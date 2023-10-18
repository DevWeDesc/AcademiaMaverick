import { About } from "@/components/About";
import { Banner } from "@/components/Banner";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="">
        <section id="init">
          <Banner />
        </section>
        <section>
          <About />
        </section>
      </main>
    </div>
  );
}
