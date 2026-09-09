import { createServerFn } from "@tanstack/react-start";

// Telegram credentials
const TELEGRAM_BOT_TOKEN = "8927203674:AAGJX1x-ZGF9abe_n7spDg2aTXKemPQafh4";
const TELEGRAM_CHAT_ID = "7784990852";

/**
 * Server function to send a message to Telegram
 * This runs on the server to keep credentials secure
 */
export const sendToTelegram = createServerFn({ method: "POST" })
  .validator((data: string) => data)
  .handler(async ({ data }) => {
    try {
      const message = data;
      
      if (!message) {
        throw new Error("No message provided");
      }

      // First, let's check if the bot can get info about itself
      const meUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getMe`;
      const meResponse = await fetch(meUrl);
      const meResult = await meResponse.json();
      console.log("Bot info:", meResult);

      // Then try to send the message
      const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
      
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
        }),
      });

      const result = await response.json();
      console.log("Send message result:", result);

      if (!result.ok) {
        throw new Error(result.description || "Failed to send Telegram message");
      }

      return { success: true, messageId: result.result.message_id };
    } catch (error) {
      console.error("Telegram error:", error);
      throw error;
    }
  });