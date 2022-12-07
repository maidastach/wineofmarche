import { Hero } from "./components/Hero";
import { WineList } from "./components/WineList";
import { AboutUs } from "./components/AboutUs";
import { ContactUs } from "./components/ContactUs";
import { Experience } from "./components/Experience";
import { SeoHome } from "../../components/seo/SeoHome";

export const HomepageScreen = () => {
  return (
    <section className="homepage-container">
      <SeoHome />
      <Hero />
      <WineList />
      <AboutUs />
      <ContactUs />
      <Experience />
    </section>
  );
};
