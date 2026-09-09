import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/home/Header";
import { Hero } from "@/components/home/Hero";
import { Credibility } from "@/components/home/Credibility";
import { Showcase } from "@/components/home/Showcase";
import { FeatureSection } from "@/components/home/FeatureSection";
import { Download } from "@/components/home/Download";
import { Blog } from "@/components/home/Blog";
import { Footer } from "@/components/home/Footer";
import sectionApp from "@/assets/section-app.jpg";
import sectionWallet from "@/assets/section-wallet.jpg";
import sectionChain from "@/assets/section-chain.jpg";

const title = "InterLink — Activate Marketplace, trade ITG assets with escrow";
const description =
  "InterLink lets you activate Marketplace on your wallet, trade ITG assets securely with escrow, and mine digital assets free from your phone.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <Credibility />
        <Showcase />
        <FeatureSection
          id="app"
          eyebrow="Interlink App"
          title="Digital assets for everyone."
          body="Making digital asset ownership accessible to everyone. InterLink never charges mining fees or sells tokens."
          bullets={["Free to start", "No hardware", "Mobile mining", "No setup needed"]}
          image={sectionApp}
          imageAlt="InterLink mining app shown on two phones"
        />
        <FeatureSection
          id="wallet"
          eyebrow="ITLX Wallet"
          title="Crypto made simple, secure, and seamless."
          body="A non-custodial wallet to store assets, manage payments, and interact with the InterLink ecosystem."
          bullets={[
            "Spend crypto like cash",
            "Instant transfer",
            "Automated earnings",
            "Unparalleled security",
          ]}
          image={sectionWallet}
          imageAlt="ITLX wallet balance screen surrounded by coins"
          reverse
          dark
        />
        <FeatureSection
          id="chain"
          eyebrow="InterlinkChain"
          title="Building the infrastructure for the next billion users."
          body="An EVM Layer 1 designed for real-world payments, tokenized assets, and scalable digital commerce, connecting blockchain technology with the global economy."
          bullets={["EVM compatible", "Instant settlement", "Plug into RWA", "Quantum resistant"]}
          image={sectionChain}
          imageAlt="Glowing global blockchain network"
        />
        <Download />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}
