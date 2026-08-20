import { type FormEvent, type MouseEvent, type ReactNode, useEffect, useState } from "react";

type Route = "/" | "/contact";

type IconItem = {
  name: string;
  slug: string;
  color: string;
};

type SkillGroup = {
  category: string;
  items: string[];
};

type Project = {
  name: string;
  tag: string;
  summary: string;
  stack: string[];
};

type GalleryItem = {
  title: string;
  todo: string;
  className: string;
};

type Experience = {
  role: string;
  organization: string;
  period: string;
  bullets: string[];
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

const formEndpoint = "https://formspree.io/f/YOUR_FORM_ID";
const roles = ["Full Stack Developer", "Automation Engineer", "AI & Data Science Enthusiast"];

const stackItems: IconItem[] = [
  { name: "React", slug: "react", color: "61DAFB" },
  { name: "Node.js", slug: "nodedotjs", color: "5FA04E" },
  { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
  { name: "Python", slug: "python", color: "3776AB" },
  { name: "MongoDB", slug: "mongodb", color: "47A248" },
  { name: "PostgreSQL", slug: "postgresql", color: "4169E1" },
  { name: "TensorFlow", slug: "tensorflow", color: "FF6F00" },
  { name: "n8n", slug: "n8n", color: "EA4B71" },
  { name: "Tailwind CSS", slug: "tailwindcss", color: "06B6D4" },
  { name: "Git", slug: "git", color: "F05032" },
];

const skills: SkillGroup[] = [
  { category: "Languages", items: ["JavaScript", "Python", "Java", "SQL", "C#"] },
  { category: "Frontend", items: ["React", "HTML5", "CSS3", "Tailwind", "Bootstrap"] },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Django REST Framework", "REST APIs", "JWT Authentication"],
  },
  { category: "Databases", items: ["MongoDB", "MongoDB Atlas", "PostgreSQL", "MySQL"] },
  {
    category: "AI & Data Science",
    items: ["TensorFlow", "DistilBERT", "Hugging Face", "Pandas", "NumPy", "Scikit-learn", "Tesseract OCR", "NLP"],
  },
  { category: "Automation", items: ["n8n", "Workflow Automation", "OCR Integration"] },
  { category: "Cloud & Deployment", items: ["Cloudinary", "Render", "Netlify", "Vercel"] },
  { category: "Developer Tools", items: ["Git", "GitHub", "Postman", "VS Code", "Figma"] },
];

const featuredProjects: Project[] = [
  {
    name: "Finance Automation Platform",
    tag: "Final Year Project",
    summary:
      "An automation-driven finance platform that pairs OCR document capture with n8n workflows, tracking financial records from scan to structured, dashboarded data.",
    stack: ["React", "Node.js", "MongoDB", "OCR", "n8n", "JWT", "REST API"],
  },
  {
    name: "AI Depression Detection",
    tag: "AI / ML",
    summary:
      "A DistilBERT-based NLP model trained to flag indicators of depression in text, covering the full pipeline from data cleaning to evaluation.",
    stack: ["Python", "TensorFlow", "DistilBERT", "Hugging Face"],
  },
  {
    name: "UdharoGuru - Finance Platform",
    tag: "Fintech",
    summary:
      "A dual-purpose personal and business finance platform with OCR-based data entry, role-based authentication, and KYC verification.",
    stack: ["Django REST", "React", "PostgreSQL"],
  },
];

const allProjects: Project[] = [
  {
    name: "Homa Nepal - E-Commerce Platform",
    tag: "2026",
    summary: "Responsive e-commerce storefront and backend product management, built end to end.",
    stack: ["MERN Stack"],
  },
  {
    name: "Surgical Mart Nepal - E-Commerce Platform",
    tag: "2025\u201326",
    summary: "Production e-commerce platform with Cloudinary media handling and an admin dashboard.",
    stack: ["MERN Stack", "Cloudinary"],
  },
  {
    name: "Dekkaido - Hospitality Platform",
    tag: "2026",
    summary: "A modern, responsive hospitality site for a multi-branch resort and restaurant brand.",
    stack: ["React", "Responsive Design"],
  },
  {
    name: "Unity Game Development",
    tag: "Game Dev",
    summary: "2D and 3D game prototypes covering player mechanics, collision detection, and UI systems.",
    stack: ["Unity", "C#"],
  },
  {
    name: "Big Data Analytics Project",
    tag: "Data Analytics",
    summary: "Cleaning, analysis, and visualization of a large dataset, queried and stored in MongoDB.",
    stack: ["Python", "Pandas", "MongoDB"],
  },
  {
    name: "Brand Identity & UI Design - Raag Fusion",
    tag: "2026",
    summary: "Logo, palette, and full visual direction for a new restaurant brand launch.",
    stack: ["Logo Design", "UI/UX", "Brand Guidelines"],
  },
];

const galleryItems: GalleryItem[] = [
  // TODO: screenshot of the Finance Automation Platform dashboard
  {
    title: "Finance dashboard",
    todo: "TODO: screenshot of the Finance Automation Platform dashboard",
    className: "md:col-span-2 md:row-span-2",
  },
  // TODO: photo from the Nepal Telecom internship
  {
    title: "Nepal Telecom",
    todo: "TODO: photo from the Nepal Telecom internship",
    className: "md:col-span-1 md:row-span-1",
  },
  // TODO: n8n workflow automation diagram
  {
    title: "Workflow map",
    todo: "TODO: n8n workflow automation diagram",
    className: "md:col-span-1 md:row-span-2",
  },
  // TODO: Surgical Mart Nepal storefront screenshot
  {
    title: "Storefront",
    todo: "TODO: Surgical Mart Nepal storefront screenshot",
    className: "md:col-span-1 md:row-span-1",
  },
  // TODO: GitHub contribution graph
  {
    title: "GitHub",
    todo: "TODO: GitHub contribution graph",
    className: "md:col-span-2 md:row-span-1",
  },
  // TODO: Raag Fusion brand identity mockup
  {
    title: "Brand work",
    todo: "TODO: Raag Fusion brand identity mockup",
    className: "md:col-span-1 md:row-span-1",
  },
  // TODO: Dekkaido hospitality platform screenshot
  {
    title: "Hospitality",
    todo: "TODO: Dekkaido hospitality platform screenshot",
    className: "md:col-span-1 md:row-span-1",
  },
];

const experiences: Experience[] = [
  {
    role: "Automation Intern",
    organization: "Nepal Telecom",
    period: "Jun 2025 \u2013 Jul 2025",
    bullets: [
      "Built and deployed n8n workflow automations to streamline repetitive internal staff processes",
      "Contributed to internal tool development within a MERN stack environment",
      "Worked across teams to convert manual, time-consuming tasks into automated workflows",
    ],
  },
  {
    role: "Freelance Full Stack Developer & Designer",
    organization: "Self-Employed",
    period: "Nov 2025 \u2013 Present",
    bullets: [
      "Ongoing freelance work across e-commerce, hospitality, and brand design - see Clients above for details",
      "Facilitated cross-team communication to keep deliverables on track from initiation through completion",
    ],
  },
];

const credentials: Credential[] = [
  {
    issuer: "Herald College Kathmandu",
    credential: "BSc (Hons) Computer Science",
    date: "Expected Nov 2026",
  },
  {
    issuer: "Herald College Kathmandu",
    credential: "DevOps Summer Program",
    date: "2025",
  },
];

function getRoute(): Route {
  return window.location.pathname === "/contact" ? "/contact" : "/";
}

function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(query.matches);

    updatePreference();
    query.addEventListener("change", updatePreference);

    return () => query.removeEventListener("change", updatePreference);
  }, []);

  return prefersReducedMotion;
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
          solidNav ? "border-b border-line bg-paper/95 backdrop-blur" : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 w-full max-w-[1100px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <a
            aria-label="Home"
            className="text-sm font-semibold lowercase tracking-[0.08em] text-ink transition-colors hover:text-accent"
            href="/"
            onClick={(event) => handleRouteLink(event, "/")}
          >
            pn
          </a>
          <div className="flex items-center gap-4 sm:gap-8">
            <a className="nav-link" href="/#work" onClick={(event) => handleRouteLink(event, "/", "#work")}>
              work
            </a>
            <a className="nav-link" href="/#gallery" onClick={(event) => handleRouteLink(event, "/", "#gallery")}>
              gallery
            </a>
            <a className="nav-link" href="/#credentials" onClick={(event) => handleRouteLink(event, "/", "#credentials")}>
              credentials
            </a>
            <a className="nav-link" href="/contact" onClick={(event) => handleRouteLink(event, "/contact")}>
              contact
            </a>
          </div>
        </div>
      </nav>

      {route === "/contact" ? <ContactPage /> : null}
      {route === "/" ? <HomePage onContactClick={(event) => handleRouteLink(event, "/contact")} /> : null}
    </main>
  );
}

function HomePage({ onContactClick }: { onContactClick: (event: MouseEvent<HTMLAnchorElement>) => void }) {
  return (
    <>
      <div className="mx-auto w-full max-w-[1100px] px-4 sm:px-6 lg:px-8">
        <HeroSection onContactClick={onContactClick} />
        <StackSection />
        <SkillsSection />
        <ClientsStrip />
        <ProjectsSection />
        <GallerySection />
        <ExperienceSection />
        <CredentialsSection />
        <ContactSection className="border-t border-line py-16 sm:py-24" />
      </div>
      <Footer />
    </>
  );
}

function HeroSection({ onContactClick }: { onContactClick: (event: MouseEvent<HTMLAnchorElement>) => void }) {
  const prefersReducedMotion = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) {
      setRoleIndex(0);
      return;
    }

    const interval = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, 2200);

    return () => window.clearInterval(interval);
  }, [prefersReducedMotion]);

  return (
    <section className="pt-[120px] sm:pt-[144px]">
      <div className="max-w-5xl pb-16 sm:pb-24">
        <p className="hero-step eyebrow flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-available" aria-hidden="true" />
          available for work
        </p>
        <h1 className="hero-step mt-6 text-[48px] font-medium leading-[1.02] tracking-normal text-ink sm:text-[72px] lg:text-[88px]">
          Hey, I&apos;m{" "}
          <a className="text-accent transition-colors hover:text-ink" href="/contact" onClick={onContactClick}>
            Prayag Nepal
          </a>
        </h1>
        <p className="hero-step mt-5 text-[30px] font-medium leading-tight text-muted sm:text-[48px] lg:text-[52px]">
          and I&apos;m a{" "}
          <span className="rotating-word" key={roles[roleIndex]}>
            {roles[roleIndex]}
          </span>
        </p>
        <p className="hero-step mt-4 text-[15px] leading-7 text-muted">Kathmandu, Nepal</p>
        <p className="hero-step mt-8 max-w-2xl text-lg leading-8 text-muted">
          I build full-stack web products, automation workflows, and AI-assisted systems for practical business problems.
        </p>
        <div className="hero-step mt-8 flex flex-wrap items-center gap-4">
          <a className="arrow-link" href="#work">
            view work <span aria-hidden="true">-&gt;</span>
          </a>
          <a className="button-link" href="/contact" onClick={onContactClick}>
            get in touch
          </a>
        </div>
      </div>
    </section>
  );
}

function StackSection() {
  return (
    <section className="border-y border-line py-8" id="stack">
      <p className="eyebrow text-center">stack</p>
      <div className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-6">
        {stackItems.map((item) => (
          <a
            aria-label={item.name}
            className="brand-mark group"
            href={`https://simpleicons.org/icons/${item.slug}.svg`}
            key={item.name}
          >
            <img
              alt=""
              className="h-8 w-8"
              loading="lazy"
              src={`https://cdn.simpleicons.org/${item.slug}/${item.color}`}
            />
            <span>{item.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section className="border-b border-line py-10" id="skills">
      <p className="eyebrow">skills</p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {skills.map((group) => (
          <div className="skill-row" key={group.category}>
            <p>{group.category}</p>
            <span>{group.items.join(" \u00b7 ")}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function ClientsStrip() {
  return (
    <section aria-label="Selected clients" className="client-fade -mx-4 border-b border-line sm:mx-0">
      <div className="flex min-w-full snap-x gap-10 overflow-x-auto px-4 py-7 sm:grid sm:grid-cols-4 sm:gap-4 sm:overflow-visible sm:px-0">
        <div className="client-wordmark min-w-[176px] snap-start text-center sm:min-w-0">
          {/* TODO: replace with real logo — <img src="/logos/surgical-mart-nepal.svg" alt="Surgical Mart Nepal" /> */}
          Surgical Mart Nepal
        </div>
        <div className="client-wordmark min-w-[176px] snap-start text-center sm:min-w-0">
          {/* TODO: replace with real logo — <img src="/logos/raag-fusion.svg" alt="Raag Fusion" /> */}
          Raag Fusion
        </div>
        <div className="client-wordmark min-w-[176px] snap-start text-center sm:min-w-0">
          {/* TODO: replace with real logo — <img src="/logos/homa-nepal.svg" alt="Homa Nepal" /> */}
          Homa Nepal
        </div>
        <div className="client-wordmark min-w-[176px] snap-start text-center sm:min-w-0">
          {/* TODO: replace with real logo — <img src="/logos/dekkaido.svg" alt="Dekkaido" /> */}
          Dekkaido
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section className="py-16 sm:py-24" id="work">
      <p className="eyebrow">projects</p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>

      <div className="mt-12 flex items-center justify-between gap-6">
        <p className="eyebrow">view all projects</p>
        <a className="arrow-link" href="https://github.com/Prayag-1">
          GitHub <span aria-hidden="true">-&gt;</span>
        </a>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {allProjects.map((project) => (
          <ProjectCard compact key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ compact = false, project }: { compact?: boolean; project: Project }) {
  return (
    <article
      className={`group flex flex-col rounded-[14px] border border-line bg-surface p-6 transition duration-200 hover:-translate-y-0.5 hover:border-line-strong ${
        compact ? "min-h-[236px]" : "min-h-[328px]"
      }`}
    >
      <div className="flex items-start justify-between gap-6">
        <h2 className="text-xl font-medium tracking-normal text-ink">{project.name}</h2>
        <span className="year-tag text-right">{project.tag}</span>
      </div>
      <p className="mt-6 flex-1 text-[15px] leading-7 text-muted">{project.summary}</p>
      <p className="mt-8 border-t border-line pt-5 font-mono text-[12px] leading-6 text-muted">
        {project.stack.join(" \u00b7 ")}
      </p>
      {/* TODO: add live link and/or GitHub repo link */}
    </article>
  );
}

function GallerySection() {
  return (
    <section className="border-t border-line py-16 sm:py-24" id="gallery">
      <p className="eyebrow">snapshots</p>

      <div className="mt-8 grid auto-rows-[180px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:auto-rows-[160px]">
        {galleryItems.map((item) => (
          <figure className={`gallery-tile gallery-placeholder ${item.className}`} key={item.title}>
            {/* TODO: replace gray placeholder with the named project screenshot/photo for this gallery slot */}
            <div aria-hidden="true" />
            <figcaption>
              <span>{item.title}</span>
              {item.todo}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="border-t border-line py-16 sm:py-24" id="experience">
      <p className="eyebrow">experience</p>

      <div className="mt-10 divide-y divide-line border-y border-line">
        {experiences.map((item) => (
          <article className="grid gap-5 py-6 lg:grid-cols-[280px_1fr]" key={`${item.role}-${item.organization}`}>
            <div>
              <p className="text-base font-medium tracking-normal text-ink">{item.role}</p>
              <p className="mt-1 text-[15px] leading-7 text-muted">{item.organization}</p>
              <p className="mt-2 font-mono text-[12px] text-muted">{item.period}</p>
            </div>
            <ul className="space-y-3 text-[15px] leading-7 text-muted">
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function CredentialsSection() {
  return (
    <section className="border-t border-line py-16 sm:py-24" id="credentials">
      <p className="eyebrow">credentials</p>

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
              <a className="mono-link" href={item.href}>
                view credential
              </a>
            ) : null}
            {/* TODO: add credential/verification link if available */}
          </article>
        ))}
      </div>
    </section>
  );
}

function ContactPage() {
  return (
    <>
      <div className="mx-auto w-full max-w-[1100px] px-4 pt-[120px] sm:px-6 sm:pt-[144px] lg:px-8">
        <ContactSection className="pb-16 sm:pb-24" />
      </div>
      <Footer />
    </>
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
      <p className="eyebrow">get in touch</p>

      <div className="mt-10 grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24">
        <div>
          <p className="max-w-md text-lg leading-8 text-muted">
            Based in Kathmandu, open to freelance work and full-time roles - reach out if you&apos;re building something.
          </p>
          <div className="mt-8 flex flex-col items-start gap-3 text-[15px]">
            <a className="plain-link" href="mailto:nepalprayag75@gmail.com">
              nepalprayag75@gmail.com
            </a>
            <a className="plain-link" href="https://linkedin.com/in/prayag-nepal">
              linkedin.com/in/prayag-nepal
            </a>
            <a className="plain-link" href="https://github.com/Prayag-1">
              github.com/Prayag-1
            </a>
            <a className="plain-link" href="/resume.pdf">
              Download Resume
            </a>
            {/* TODO: drop your resume PDF into the /public folder as resume.pdf */}
          </div>
        </div>

        <form action={formEndpoint} method="POST" noValidate onSubmit={handleSubmit}>
          <input name="_subject" type="hidden" value="New portfolio message" />
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
              <button className="button-link" disabled={isSubmitting} type="submit">
                {isSubmitting ? "sending..." : "send message"}
              </button>

              {status === "success" ? (
                <p className="font-mono text-[12px] text-muted">message sent {"\u2014"} I&apos;ll get back to you soon</p>
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

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-[15px] text-muted">Built with React, Tailwind, and a lot of freelance-hours coffee.</p>
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[12px] text-muted">
            <p>{"\u00a9"} {year} Prayag Nepal</p>
            <a className="mono-link" href="/resume.pdf">
              Download Resume
            </a>
            {/* TODO: drop your resume PDF into the /public folder as resume.pdf */}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a aria-label="GitHub" className="social-link" href="https://github.com/Prayag-1">
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.58 2 12.22c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49v-1.73c-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.1-1.49-1.1-1.49-.9-.63.07-.62.07-.62 1 .07 1.52 1.05 1.52 1.05.88 1.55 2.32 1.1 2.88.84.09-.65.35-1.1.63-1.35-2.22-.26-4.56-1.14-4.56-5.05 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.31 9.31 0 0 1 12 7.1c.85 0 1.7.12 2.5.35 1.9-1.32 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.92-2.34 4.78-4.57 5.04.36.32.68.94.68 1.9v2.63c0 .27.18.59.69.49A10.08 10.08 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z" />
            </svg>
          </a>
          <a aria-label="LinkedIn" className="social-link" href="https://linkedin.com/in/prayag-nepal">
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.35 8h4.3v15H.35V8Zm7.33 0h4.12v2.05h.06c.57-1.08 1.98-2.22 4.07-2.22 4.35 0 5.15 2.86 5.15 6.58V23h-4.3v-7.6c0-1.81-.03-4.14-2.52-4.14-2.52 0-2.9 1.97-2.9 4V23H7.68V8Z" transform="translate(1.5)" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default App;
