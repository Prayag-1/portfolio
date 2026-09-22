import { redirect } from "next/navigation";

export const metadata = {
  title: "Life — Prayag Nepal | Beyond the Screen",
  description: "Black belt martial artist, half marathon runner, gym regular. The person behind the code.",
  keywords: ["web developer Nepal", "life beyond screen", "Kathmandu freelancer"],
  alternates: { canonical: "/life" }
};

export default function Life() { redirect("/about#life"); }
