import { About } from "@/components/About";
import { Banner } from "@/components/Banner";
import { Header } from "@/components/Header";
import { Feedbacks } from "@/components/Feedbacks";
import { Plans } from "@/components/Plans";

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
        <section>
          <Feedbacks />
        </section>
        <section>
          <Plans />
        </section>
      </main>
    </div>
  );
}
