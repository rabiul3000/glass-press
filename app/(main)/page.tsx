import Articles from "@/components/Articles/Articles";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Glass Press | Home",
};

export default function Home() {
  return (
    <div className="h-screen">
      <main className="">
        <Articles />
      </main>
    </div>
  );
}
