import { About } from "@/components/About";
import { Banner } from "@/components/Banner";
import { Header } from "@/components/Header";
import { Feedbacks } from "@/components/Feedbacks";
import { Plans } from "@/components/Plans";
import { Footer } from "@/components/Footer";
import { Activities } from "@/components/Activies/Activities";
import { Gallery } from "@/components/Gallery/Gallery";
import { Partnerships } from "@/components/Partnerships";
import { ImagePilates } from "@/components/ImagePilates";

export default function Home() {
  return (
    <div className="">
      <Header />
      <main>
        <section id="init" className="bg-black">
          <Banner />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="activies">
          <Activities />
        </section>
        <section id="imagePilates">
          <ImagePilates />
        </section>
        <section id="plans">
          <Plans />
        </section>
        <section id="partnetships">
          <Partnerships />
        </section>
        <section>
          <Gallery />
        </section>
        <section id="feedbacks">
          <Feedbacks />
        </section>
        <section id="workwithus">
          <Footer />
        </section>
      </main>
    </div>
  );
}
