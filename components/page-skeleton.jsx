export default function PageSkeleton({ variant = "page" }) {
  const box = "animate-pulse rounded-xl bg-zinc-200";
  if (variant === "clients") return <div className="page-shell inner-page" aria-hidden="true"><div className={`h-12 w-2/3 ${box}`} /><div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4"><div className={`h-40 ${box}`} /><div className={`h-40 ${box}`} /><div className={`h-40 ${box}`} /><div className={`h-40 ${box}`} /></div></div>;
  if (variant === "projects") return <div className="page-shell inner-page" aria-hidden="true"><div className={`h-12 w-2/3 ${box}`} /><div className="mt-12 space-y-4"><div className={`h-36 ${box}`} /><div className={`h-36 ${box}`} /><div className={`h-36 ${box}`} /></div></div>;
  if (variant === "certifications") return <div className="page-shell inner-page" aria-hidden="true"><div className={`h-12 w-2/3 ${box}`} /><div className="mt-12 grid gap-4 sm:grid-cols-2"><div className={`h-48 ${box}`} /><div className={`h-48 ${box}`} /></div></div>;
  if (variant === "life") return <div className="page-shell inner-page" aria-hidden="true"><div className={`h-16 w-3/4 ${box}`} /><div className="mt-12 space-y-6"><div className={`h-72 ${box}`} /><div className={`h-48 ${box}`} /></div></div>;
  if (variant === "about") return <div className="page-shell inner-page" aria-hidden="true"><div className={`h-16 w-3/4 ${box}`} /><div className="mt-12 space-y-6"><div className={`h-40 ${box}`} /><div className={`h-48 ${box}`} /><div className={`h-72 ${box}`} /></div></div>;
  return <div className="page-shell inner-page" aria-hidden="true"><div className={`h-12 w-2/3 ${box}`} /><div className={`mt-12 h-64 ${box}`} /></div>;
}
