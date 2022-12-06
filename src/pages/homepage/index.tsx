import { Hero } from "./components/Hero";
import { WineList } from "./components/WineList";
import { AboutUs } from "./components/AboutUs";
import { ContactUs } from "./components/ContactUs";
import { Experience } from "./components/Experience";

export const HomepageScreen = () => {
  return (
    <section className="homepage-container">
      <Hero />
      <WineList />
      <AboutUs />
      <ContactUs />
      <Experience />
    </section>
  );
};
