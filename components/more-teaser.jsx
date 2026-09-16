import Link from "next/link";

export default function MoreTeaser({ life = false }) {
  return <section className={`more-teaser ${life ? "more-teaser-life" : ""}`}><h2>{life ? "Want to talk training, tools, or builds?" : "More in the works."}</h2><p>{life ? "Drop a message." : "New projects, new clients, new ideas — always building. Reach out if you want to know what’s next or work on something together."}</p><div><Link className="button button-primary" href="/contact">Get in touch</Link></div></section>;
}
