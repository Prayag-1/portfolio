import Link from "next/link";
import ContactIcon from "@/components/contact-icon";

const FOOTER_LINKS = [["Home", "/"], ["About / Life", "/about"], ["Projects", "/projects"], ["Clients", "/clients"], ["Contact", "/contact"], ["Privacy Policy", "/privacy"]];

export default function SiteFooter() {
  return <footer className="site-footer"><div><Link className="wordmark" href="/">Prayag Nepal</Link><p>Web Developer · Kathmandu, Nepal</p></div><div className="footer-links">{FOOTER_LINKS.map(([name, href]) => <Link href={href} key={href}>{name}</Link>)}</div><div className="footer-social"><a href="mailto:nepalprayag880@gmail.com" aria-label="Email Prayag Nepal"><ContactIcon type="mail" /></a><a href="https://www.linkedin.com/in/prayag-nepal/" target="_blank" rel="noopener noreferrer" aria-label="Prayag Nepal on LinkedIn"><ContactIcon type="linkedin" /></a><a href="https://github.com/Prayag-1/" target="_blank" rel="noopener noreferrer" aria-label="Prayag Nepal on GitHub"><ContactIcon type="github" /></a></div><div className="copyright"><span>© 2025 Prayag Nepal. All rights reserved.</span><span>Built with Next.js · Hosted on Vercel</span></div></footer>;
}
