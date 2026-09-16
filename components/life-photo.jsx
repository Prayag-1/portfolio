"use client";

import Image from "next/image";
import { useCallback, useState } from "react";

function LifeIcon({ type }) { if (type === "gym") return <svg viewBox="0 0 64 64" aria-hidden="true"><path d="M9 25v14m8-20v26m30-26v26m8-20v14M17 32h30" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" /></svg>; if (type === "running") return <svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="37" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="3" /><path d="m31 25 8 5 9-2m-17-3-5 11 10 4 7 13m-17-17-10 11m12-21 8-4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>; return <svg viewBox="0 0 64 64" aria-hidden="true"><path d="M12 28h40l-20 12L12 28Zm7-5 13-8 13 8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" /><path d="M22 39v9m20-9v9" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>; }

export default function LifePhoto({ src, alt, type, label }) { const [missing, setMissing] = useState(false); const markMissing = useCallback(() => setMissing(true), []); if (missing) return <div className="life-photo-placeholder"><LifeIcon type={type} /><span>{label}</span></div>; return <Image src={src} alt={alt} width={1200} height={800} loading="lazy" placeholder="blur" blurDataURL="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" onError={markMissing} />; }
