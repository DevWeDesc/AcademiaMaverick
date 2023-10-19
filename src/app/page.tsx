import { About } from "@/components/About";
import { Banner } from "@/components/Banner";
import { Header } from "@/components/Header";
import { Feedbacks } from "@/components/Feedbacks";
import { Plans } from "@/components/Plans";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="">
        <section id="init">
          <Banner />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="feedbacks">
          <Feedbacks />
        </section>
        <section id="plans">
          <Plans />
        </section>
      </main>
      <Footer />
    </div>
  );
}
