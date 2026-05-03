import { ContactFooter } from "./components/contact-footer";
import { Experience } from "./components/experience";
import { Goal } from "./components/goal";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Journey } from "./components/journey";
import { Thinking } from "./components/thinking";
import { Why } from "./components/why";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-b from-white via-[#fbf9ff] to-[#f6f0ff] text-[#18151f]">
      <Header />
      <Hero />
      <Why />
      <Journey />
      <Thinking />
      <Experience />
      <Goal />
      <ContactFooter />
    </main>
  );
}
