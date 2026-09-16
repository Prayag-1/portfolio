"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";

const BLUR_DATA_URL = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";

export default function LifeSlider({ slides }) {
  const track = useRef(null); const [active, setActive] = useState(0);
  const scrollTo = useCallback((index) => track.current?.children[index]?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" }), []);
  const move = useCallback((direction) => { const next = (active + direction + slides.length) % slides.length; setActive(next); scrollTo(next); }, [active, scrollTo, slides.length]);
  const previous = useCallback(() => move(-1), [move]); const next = useCallback(() => move(1), [move]);
  const handleScroll = useCallback((event) => { const width = event.currentTarget.clientWidth; setActive(Math.round(event.currentTarget.scrollLeft / width)); }, []);
  const handleDotClick = useCallback((event) => { const index = Number(event.currentTarget.dataset.index); setActive(index); scrollTo(index); }, [scrollTo]);
  return <section className="life-slider" aria-label="Life outside work gallery"><div className="life-slider-track" ref={track} onScroll={handleScroll}>{slides.map((slide) => <figure className="life-slide" key={slide.title}><Image src={slide.src} alt={slide.alt} width={1400} height={900} loading="lazy" placeholder="blur" blurDataURL={BLUR_DATA_URL} /><figcaption><span>{slide.category}</span><h2>{slide.title}</h2><p>{slide.caption}</p></figcaption></figure>)}</div><div className="life-slider-controls"><div className="life-slider-dots" aria-label="Choose a slide">{slides.map((slide, index) => <button key={slide.title} data-index={index} type="button" className={active === index ? "active" : ""} aria-label={`Show ${slide.title}`} aria-current={active === index} onClick={handleDotClick} />)}</div><div><button type="button" onClick={previous} aria-label="Previous photo">Previous</button><button type="button" onClick={next} aria-label="Next photo">Next</button></div></div></section>;
}
