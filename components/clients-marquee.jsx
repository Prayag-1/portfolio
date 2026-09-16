import ImageWithFallback from "@/components/image-with-fallback";

export default function ClientsMarquee({ clients }) {
  const loop = [...clients, ...clients];
  return <div className="clients-marquee" aria-label="Businesses Prayag has worked with"><div className="marquee-track">{loop.map((client, index) => <div className="marquee-logo" key={`${client.slug}-${index}`} aria-hidden={index >= clients.length}><ImageWithFallback src={client.image} fallback="/gallery/clients/placeholder.svg" fallbackText={client.name} alt={`${client.name} logo`} /></div>)}</div></div>;
}
