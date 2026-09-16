import ContactForm from "@/components/contact-form";
import ContactIcon from "@/components/contact-icon";
import PageIntro from "@/components/page-intro";

export const metadata = { title: "Contact — Prayag Nepal" };

export default function Contact() {
  return <PageIntro className="page-shell inner-page"><header className="page-header"><p className="kicker">Contact</p><h1>Let’s make something useful together.</h1><p className="lede">Tell me about your business or the system you want to improve. I’ll get back to you by email.</p></header><section className="contact-layout"><aside className="contact-details"><h2>Send an enquiry</h2><p>The form is the best way to start a conversation. You can also email me directly.</p><a href="mailto:nepalprayag880@gmail.com"><ContactIcon type="mail" /><span><small>Email</small>nepalprayag880@gmail.com</span></a></aside><ContactForm endpoint={process.env.NEXT_PUBLIC_FORMSPREE_URL} /></section><p className="contact-note">For ecommerce websites, service platforms, and AI automation systems.</p></PageIntro>;
}
