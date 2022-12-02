import { Hero } from "./components/Hero";
import { WineList } from "./components/WineList";

export const HomepageScreen = () => {
  return (
    <section className="homepage-container">
      <Hero />
      <WineList />
    </section>
  );
};
