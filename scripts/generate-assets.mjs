import sharp from "sharp";

const ogText = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg"><style>text{font-family:Arial,sans-serif}</style><text x="600" y="315" text-anchor="middle" fill="white" font-size="86" font-weight="700">Prayag Nepal</text><text x="600" y="370" text-anchor="middle" fill="#a1a1aa" font-size="32">Web Developer · Kathmandu, Nepal</text></svg>`);
await sharp({ create: { width: 1200, height: 630, channels: 4, background: "#18181b" } }).composite([{ input: ogText }]).png().toFile("public/og-image.png");
const faviconSvg = Buffer.from(`<svg width="32" height="32" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" fill="#4F46E5"/><text x="16" y="23" text-anchor="middle" font-family="Arial, sans-serif" font-size="22" font-weight="600" fill="white">P</text></svg>`);
await sharp(faviconSvg).png().toFile("public/favicon.ico");
