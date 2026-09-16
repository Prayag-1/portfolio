import ImageWithFallback from "@/components/image-with-fallback";
import PageIntro from "@/components/page-intro";

export const metadata = { title: "Clients" };
const clients = [
  ["Homa Nepal", "homa-nepal"], ["Hokkaido Group", "hokkaido-group"], ["Surgical Mart Nepal", "surgical-mart-nepal"], ["Coffee Dhara", "coffee-dhara"],["Raag ifc", "raag-ifc"]
];
export default function Clients() {
  return <PageIntro className="page-shell inner-page"><header className="page-header"><p className="kicker">Client partnerships</p><h1>Built with people who care about what they’re putting into the world.</h1><p className="lede">A selection of businesses I have worked with. Client logos will appear here when added to the gallery.</p></header><section className="client-grid">{clients.map(([name, slug]) => <article key={slug}><ImageWithFallback src={`/gallery/clients/${slug}.png`} fallback="/gallery/clients/placeholder.svg" alt={`${name} logo`} /><h2>{name}</h2></article>)}</section><p className="todo-note">TODO — add any additional confirmed client names and their logo files in <code>public/gallery/clients</code>.</p></PageIntro>;
}
