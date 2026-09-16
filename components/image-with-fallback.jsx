"use client";

import Image from "next/image";
import { useCallback, useState } from "react";

const BLUR_DATA_URL = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";

export default function ImageWithFallback({ src, fallback, alt, fallbackText, width = 640, height = 480, loading = "lazy" }) {
  const [imageSrc, setImageSrc] = useState(src);
  const handleError = useCallback(() => {
    setImageSrc((current) => current !== fallback ? fallback : current);
  }, [fallback]);

  if (imageSrc === fallback && fallbackText) return <span className="image-text-fallback" aria-label={alt}>{fallbackText}</span>;
  return <Image src={imageSrc} alt={alt} width={width} height={height} loading={loading} placeholder="blur" blurDataURL={BLUR_DATA_URL} onError={handleError} />;
}
