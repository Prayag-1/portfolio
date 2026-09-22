import ContactForm from "@/components/contact-form";
import ContactIcon from "@/components/contact-icon";
import PageIntro from "@/components/page-intro";

export const metadata = {
  title: "Contact — Prayag Nepal | Hire a Web Developer in Nepal",
  description: "Looking for a web developer in Nepal? Get in touch with Prayag Nepal for ecommerce websites, service platforms and digital presence — affordable and professional.",
  keywords: ["hire web developer Nepal", "freelance web developer Nepal", "web designer Kathmandu", "ecommerce website Nepal"],
  alternates: { canonical: "/contact" }
};

export default function Contact() {
  return <PageIntro className="page-shell inner-page"><header className="page-header"><p className="kicker">Contact</p><h1>Hire a Web Developer in Nepal</h1><p className="lede">Tell me about your business or the system you want to improve. I’ll get back to you by email.</p></header><section className="contact-layout"><aside className="contact-details"><h2>Send an enquiry</h2><p>The form is the best way to start a conversation. You can also email me directly.</p><a href="mailto:nepalprayag880@gmail.com"><ContactIcon type="mail" /><span><small>Email</small>nepalprayag880@gmail.com</span></a></aside><ContactForm endpoint={process.env.NEXT_PUBLIC_FORMSPREE_URL} /></section><p className="contact-note">For ecommerce websites, service platforms, and AI automation systems.</p></PageIntro>;
}
