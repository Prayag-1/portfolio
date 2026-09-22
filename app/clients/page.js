import ImageWithFallback from "@/components/image-with-fallback";
import PageIntro from "@/components/page-intro";

export const metadata = {
  title: "Clients — Prayag Nepal | Trusted by Nepali Businesses",
  description: "Homa Nepal, Surgical Mart Nepal, Coffee Dhara, Procare Nepal and more. See the businesses that trusted Prayag Nepal to build their digital presence.",
  keywords: ["web developer Nepal", "trusted web developer Nepal", "ecommerce website Nepal", "Nepali businesses website"],
  alternates: { canonical: "/clients" }
};
const clients = [
  { name: "Homa Nepal", src: "/gallery/clients/homa.svg" },
  { name: "Hokkaido Group", src: "/gallery/clients/Hokkaido Group.jpg" },
  { name: "Surgical Mart Nepal", src: "/gallery/clients/surgical mart.png" },
  { name: "Coffee Dhara", src: "/gallery/clients/coffee dhara.png" },
  { name: "Raag ifc", src: "/gallery/clients/raagifc.avif" }
];
export default function Clients() {
  return <PageIntro className="page-shell inner-page"><header className="page-header"><p className="kicker">Client partnerships</p><h1>Trusted Web Developer in Nepal</h1><p className="lede">A selection of businesses I have worked with. Client logos will appear here when added to the gallery.</p></header><section className="client-grid">{clients.map((client) => <article key={client.name}><ImageWithFallback src={client.src} fallback="/gallery/clients/placeholder.svg" alt={`${client.name} logo`} /><h2>{client.name}</h2></article>)}</section></PageIntro>;
}
