"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const BLUR_DATA_URL = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
function CapIcon() { return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="m4 18 20-10 20 10-20 10L4 18Zm8 7.5V33c0 4.6 5.4 7 12 7s12-2.4 12-7v-7.5l-12 6-12-6Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M42 19v13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>; }

export default function CertificatePreview({ src, alt, label }) {
  const [missing, setMissing] = useState(false); const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []); const openPreview = useCallback(() => setOpen(true), []); const markMissing = useCallback(() => setMissing(true), []); const stopPropagation = useCallback((event) => event.stopPropagation(), []);
  useEffect(() => { const closeOnEscape = (event) => event.key === "Escape" && close(); window.addEventListener("keydown", closeOnEscape); return () => window.removeEventListener("keydown", closeOnEscape); }, [close]);
  if (missing) return <div className="certificate-placeholder"><CapIcon /><span>{label}</span></div>;
  return <><button className="certificate-thumb" type="button" onClick={openPreview} aria-label={`Open ${alt}`}><Image src={src} alt={alt} width={520} height={340} loading="lazy" placeholder="blur" blurDataURL={BLUR_DATA_URL} onError={markMissing} /></button>{open && <div className="certificate-modal" role="dialog" aria-modal="true" aria-label={alt} onClick={close}><button type="button" className="modal-close" onClick={close} aria-label="Close certificate preview">×</button><Image src={src} alt={alt} width={1200} height={800} loading="lazy" placeholder="blur" blurDataURL={BLUR_DATA_URL} onClick={stopPropagation} /></div>}</>;
}
