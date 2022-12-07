import { Hero } from "./components/Hero";
import { WineList } from "./components/WineList";
import { AboutUs } from "./components/AboutUs";
import { ContactUs } from "./components/ContactUs";
import { Experience } from "./components/Experience";
import { Helmet } from "react-helmet";
import logoPic from "../../assets/images/logopics.png";

export const HomepageScreen = () => {
  return (
    <section className="homepage-container">
      <Helmet>
        <title>Wine of Marche</title>
        <link rel="canonical" href={`${process.env.REACT_APP_BASE_URL}/`} />

        <meta property="og:title" content="Wine of Marche" />
        <meta
          name="description"
          content="Bringing exclusive Italian wine from the Marche region to the best fine dining restaurant in Australia"
        />
        <meta
          property="og:description"
          content="Bringing exclusive Italian wine from the Marche region to the best fine dining restaurant in Australia"
        />
        <meta
          property="og:url"
          content={`${process.env.REACT_APP_BASE_URL}/`}
        />
        <meta
          property="keywords"
          content="Wine Sydney Marche Italy Italian Australia"
        />
        <meta property="og:type" content="LiquorStore" />
        <meta
          property="og:image"
          content={`${process.env.REACT_APP_BASE_URL}${logoPic}`}
        />
        <meta property="og:image:alt" content="Wine of Marche Logo" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LiquorStore",
            name: "Wine of Marche",
            image: `${process.env.REACT_APP_BASE_URL}${logoPic}`,
            telephone: "+61434004360",
            currenciesAccepted: "AUD",
            openingHours: "Mo, Tu, We, Th, Fr, Sa, Su",
            paymentAccepted: "Credit Card, Cash",
            priceRange: "$$",
            address:
              "U7/19 Ralston Street, Lane Cove North. 2066 NSW, Australia",
            areaServed: "All Australia, Sydney",
            brand: {
              "@type": "Organization",
              logo: `${process.env.REACT_APP_BASE_URL}${logoPic}`,
              name: "Wine of Marche",
              url: `${process.env.REACT_APP_BASE_URL}/`,
              "@id": "https://wineofmarche.au",
            },
            email: "info@wineofmarche.au",
            founder: {
              email: "info@wineofmarche.au",
              familyName: "Bajrami",
              gender: "M",
              givenName: "Besar",
            },
            keywords: "Wine Sydney Marche Italy Italian Australia",
            knowsLanguage: "English, Italian",
            logo: `${process.env.REACT_APP_BASE_URL}${logoPic}`,
            url: `${process.env.REACT_APP_BASE_URL}/`,
          })}
        </script>
      </Helmet>
      <Hero />
      <WineList />
      <AboutUs />
      <ContactUs />
      <Experience />
    </section>
  );
};
