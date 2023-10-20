import { About } from "@/components/About";
import { Banner } from "@/components/Banner";
import { Header } from "@/components/Header";
import { Feedbacks } from "@/components/Feedbacks";
import { Plans } from "@/components/Plans";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="">
      <Header />
      <main>
        <section id="init">
          <Banner />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="feedbacks">
          <Feedbacks />
        </section>
        <section id="plans" className="lg:hidden">
          <Plans />
        </section>
      </main>
      <Footer />
    </div>
  );
}
