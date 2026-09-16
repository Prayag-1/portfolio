import { redirect } from "next/navigation";

export const metadata = { title: "Life Outside Work — Prayag Nepal" };

export default function Life() { redirect("/about#life"); }
