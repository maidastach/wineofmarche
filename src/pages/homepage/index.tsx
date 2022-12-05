import { AboutUs } from "./components/AboutUs";
import { ContactUs } from "./components/ContactUs";
import { Hero } from "./components/Hero";
import { MapRenderer } from "./components/MapRenderer";
import { WineList } from "./components/WineList";

export const HomepageScreen = () => {
  return (
    <section className="homepage-container">
      <Hero />
      <WineList />
      <AboutUs />
      <ContactUs />
      <MapRenderer />
    </section>
  );
};
