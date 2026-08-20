import { type FormEvent, type MouseEvent, type ReactNode, useEffect, useState } from "react";

type Project = {
  name: string;
  summary: string;
  stack: string[];
};

type Credential = {
  issuer: string;
  credential: string;
  date: string;
  href?: string;
};

type ContactValues = {
  name: string;
  email: string;
  message: string;
};

type ContactErrors = Partial<Record<keyof ContactValues, string>>;

type Route = "/" | "/certifications" | "/contact";

const formEndpoint = "https://formspree.io/f/YOUR_FORM_ID";

const projects: Project[] = [
  {
    name: "Operations Command Center",
    summary:
      "Cut incident review time by giving support leads one reliable workspace for queues, handoffs, and service health.",
    stack: ["react", "typescript", "node", "postgres"],
  },
  {
    name: "Release Confidence System",
    summary:
      "Reduced failed deployments with preflight checks, traceable approvals, and clear rollback paths for product teams.",
    stack: ["next.js", "vercel", "github actions", "datadog"],
  },
  {
    name: "Enterprise Account Portal",
    summary:
      "Improved account setup completion by simplifying complex permissions, onboarding states, and billing workflows.",
    stack: ["react", "tailwind", "radix", "stripe"],
  },
];

const clients = ["Northstar", "Atlas", "Cobalt", "Signal", "Relay", "Bench"];

const credentials: Credential[] = [
  {
    issuer: "Example State University",
    credential: "B.S. Computer Science",
    date: "2021",
  },
  {
    issuer: "Amazon Web Services",
    credential: "AWS Certified Developer - Associate",
    date: "2025",
    href: "#",
  },
  {
    issuer: "Google Cloud",
    credential: "Professional Cloud Developer",
    date: "2024",
    href: "#",
  },
  {
    issuer: "Meta",
    credential: "Advanced React",
    date: "2023",
    href: "#",
  },
  {
    issuer: "Scrum.org",
    credential: "Professional Scrum Master I",
    date: "2022",
  },
];

function getRoute(): Route {
  if (window.location.pathname === "/certifications") {
    return "/certifications";
  }

  if (window.location.pathname === "/contact") {
    return "/contact";
  }

  return "/";
}

function App() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [route, setRoute] = useState<Route>(getRoute);

  useEffect(() => {
    const updateNav = () => setHasScrolled(window.scrollY > 40);

    updateNav();
    window.addEventListener("scroll", updateNav, { passive: true });

    return () => window.removeEventListener("scroll", updateNav);
  }, []);

  useEffect(() => {
    const updateRoute = () => setRoute(getRoute());

    window.addEventListener("popstate", updateRoute);

    return () => window.removeEventListener("popstate", updateRoute);
  }, []);

  const navigate = (nextRoute: Route, hash?: string) => {
    const nextPath = `${nextRoute}${hash ?? ""}`;

    window.history.pushState(null, "", nextPath);
    setRoute(nextRoute);

    window.requestAnimationFrame(() => {
      if (hash) {
        document.querySelector(hash)?.scrollIntoView();
        return;
      }

      window.scrollTo({ top: 0 });
    });
  };

  const handleRouteLink = (event: MouseEvent<HTMLAnchorElement>, nextRoute: Route, hash?: string) => {
    event.preventDefault();
    navigate(nextRoute, hash);
  };

  const solidNav = route !== "/" || hasScrolled;

  return (
    <main className="min-h-screen bg-paper text-ink">
      <nav
        className={`sticky top-0 z-50 -mb-16 w-full transition-[background-color,border-color] duration-200 ${
          solidNav ? "border-b border-line bg-paper" : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 w-full max-w-[1100px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <a
            href="/"
            onClick={(event) => handleRouteLink(event, "/")}
            className="font-sans text-sm font-medium lowercase tracking-[0.08em] text-ink transition-colors hover:text-accent"
            aria-label="Home"
          >
            am
          </a>
          <div className="flex items-center gap-5 sm:gap-8">
            <a className="nav-link" href="/#work" onClick={(event) => handleRouteLink(event, "/", "#work")}>
              work
            </a>
            <a className="nav-link" href="/certifications" onClick={(event) => handleRouteLink(event, "/certifications")}>
              certifications
            </a>
            <a className="nav-link" href="/contact" onClick={(event) => handleRouteLink(event, "/contact")}>
              contact
            </a>
          </div>
        </div>
      </nav>

      {route === "/certifications" ? <CertificationsPage /> : null}
      {route === "/contact" ? <ContactPage /> : null}
      {route === "/" ? <HomePage onContactClick={(event) => handleRouteLink(event, "/contact")} /> : null}
    </main>
  );
}

function HomePage({ onContactClick }: { onContactClick: (event: MouseEvent<HTMLAnchorElement>) => void }) {
  return (
    <div className="mx-auto w-full max-w-[1100px] px-4 sm:px-6 lg:px-8">
      <section id="top" className="pt-[120px] sm:pt-[144px]">
        <div className="max-w-3xl pb-16 sm:pb-24">
          <h1 className="hero-step text-[48px] font-medium leading-[1.04] tracking-normal text-ink sm:text-[56px]">
            Alex Morgan
          </h1>
          <p className="hero-step mt-6 max-w-2xl text-lg leading-8 text-muted">
            Software engineer building dependable React and TypeScript products for teams with complex workflows.
          </p>
          <p className="hero-step mt-6 flex items-center gap-3 font-mono text-[13px] text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-available" aria-hidden="true" />
            <span>
              status: open to new roles
              <span className="cursor-blink ml-1 text-accent" aria-hidden="true">
                _
              </span>
            </span>
          </p>
          <div className="hero-step mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-ink"
            >
              view work
              <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                -&gt;
              </span>
            </a>
            <a
              href="/contact"
              onClick={onContactClick}
              className="rounded-xl border border-line px-4 py-2.5 text-sm font-medium text-ink transition duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              get in touch
            </a>
          </div>
        </div>
      </section>

      <section className="client-fade -mx-4 border-y border-line sm:mx-0" aria-label="Selected clients">
        <div className="flex min-w-full snap-x gap-10 overflow-x-auto px-4 py-6 sm:grid sm:grid-cols-6 sm:gap-4 sm:overflow-visible sm:px-0">
          {clients.map((client) => (
            <div
              className="client-logo min-w-[132px] snap-start text-center font-sans text-[15px] font-medium tracking-[0.06em] text-ink sm:min-w-0"
              key={client}
            >
              {client}
            </div>
          ))}
        </div>
      </section>

      <section id="work" className="py-16 sm:py-24">
        <p className="section-label">selected work</p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {projects.map((project) => (
            <article
              className="group flex min-h-[292px] flex-col rounded-xl border border-line bg-surface p-6 transition duration-200 hover:-translate-y-0.5 hover:border-accent hover:shadow-quiet"
              key={project.name}
            >
              <div className="flex items-start justify-between gap-6">
                <h2 className="text-xl font-medium tracking-normal text-ink">{project.name}</h2>
                <span
                  className="mt-1 text-sm text-muted transition duration-200 group-hover:translate-x-1 group-hover:text-accent"
                  aria-hidden="true"
                >
                  -&gt;
                </span>
              </div>
              <p className="mt-5 flex-1 text-[15px] leading-7 text-muted">{project.summary}</p>
              <p className="mt-8 border-t border-line pt-5 font-mono text-[12px] leading-6 text-muted">
                {project.stack.join(" \u00b7 ")}
              </p>
            </article>
          ))}
        </div>
      </section>

      <ContactSection className="border-t border-line py-16 sm:py-24" />
    </div>
  );
}

function CertificationsPage() {
  return (
    <div className="mx-auto w-full max-w-[1100px] px-4 pt-[120px] sm:px-6 sm:pt-[144px] lg:px-8">
      <section className="pb-16 sm:pb-24">
        <p className="section-label">credentials</p>

        <div className="mt-10 divide-y divide-line border-y border-line">
          {credentials.map((item) => (
            <article
              className="grid gap-3 py-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-8"
              key={`${item.issuer}-${item.credential}`}
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-3">
                <p className="text-base font-medium tracking-normal text-ink">{item.issuer}</p>
                <p className="text-[15px] leading-7 text-muted">
                  {item.credential}
                  {" \u00b7 "}
                  {item.date}
                </p>
              </div>

              {item.href ? (
                <a
                  className="font-mono text-[12px] text-accent underline decoration-line underline-offset-4 transition-colors hover:decoration-accent"
                  href={item.href}
                >
                  view credential
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-[1100px] px-4 pt-[120px] sm:px-6 sm:pt-[144px] lg:px-8">
      <ContactSection className="pb-16 sm:pb-24" />
    </div>
  );
}

function ContactSection({ className }: { className?: string }) {
  const [values, setValues] = useState<ContactValues>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<ContactErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const updateField = (field: keyof ContactValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setStatus("idle");
  };

  const validate = () => {
    const nextErrors: ContactErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!values.name.trim()) {
      nextErrors.name = "Name is required.";
    }

    if (!values.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!emailPattern.test(values.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!values.message.trim()) {
      nextErrors.message = "Message is required.";
    }

    return nextErrors;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    setStatus("idle");

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch(formEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Form submission failed.");
      }

      setValues({ name: "", email: "", message: "" });
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={className} id="contact">
      <p className="section-label">get in touch</p>

      <div className="mt-10 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <div>
          <p className="max-w-sm text-lg leading-8 text-muted">
            Have a role, project, or product problem where careful frontend engineering would help?
          </p>
          <div className="mt-8 flex flex-col items-start gap-3 text-[15px]">
            <a className="plain-link" href="mailto:hello@example.com">
              hello@example.com
            </a>
            <a className="plain-link" href="https://linkedin.com/in/example">
              linkedin.com/in/example
            </a>
            <a className="plain-link" href="https://github.com/example">
              github.com/example
            </a>
          </div>
        </div>

        <form action={formEndpoint} method="POST" noValidate onSubmit={handleSubmit}>
          <input type="hidden" name="_subject" value="New portfolio message" />
          <div className="grid gap-8">
            <FormField error={errors.name} id="name" label="name">
              <input
                className="form-control"
                id="name"
                name="name"
                onChange={(event) => updateField("name", event.target.value)}
                required
                type="text"
                value={values.name}
              />
            </FormField>

            <FormField error={errors.email} id="email" label="email">
              <input
                className="form-control"
                id="email"
                name="email"
                onChange={(event) => updateField("email", event.target.value)}
                required
                type="email"
                value={values.email}
              />
            </FormField>

            <FormField error={errors.message} id="message" label="message">
              <textarea
                className="form-control min-h-32 resize-y"
                id="message"
                name="message"
                onChange={(event) => updateField("message", event.target.value)}
                required
                value={values.message}
              />
            </FormField>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                className="inline-flex w-fit rounded-xl border border-line px-4 py-2.5 text-sm font-medium text-ink transition duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent disabled:pointer-events-none disabled:opacity-50"
                disabled={isSubmitting}
                type="submit"
              >
                {isSubmitting ? "sending..." : "send message"}
              </button>

              {status === "success" ? (
                <p className="font-mono text-[12px] text-muted">message sent {"\u2014"} I'll get back to you soon</p>
              ) : null}
              {status === "error" ? (
                <p className="field-error">Message could not be sent. Replace YOUR_FORM_ID or try again.</p>
              ) : null}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

function FormField({
  children,
  error,
  id,
  label,
}: {
  children: ReactNode;
  error?: string;
  id: string;
  label: string;
}) {
  return (
    <div>
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      {children}
      {error ? <p className="field-error">{error}</p> : null}
    </div>
  );
}

export default App;
