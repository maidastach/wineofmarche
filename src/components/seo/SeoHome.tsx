import { Helmet } from "react-helmet-async";
import logoPic from "../../assets/images/wine of marche logo.png";

export const SeoHome = () => {
  return (
    <Helmet prioritizeSeoTags>
      {/* GOOGLE TAG ANALYTICS */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GTAG_ID}`}
      />
      <script>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', ${process.env.REACT_APP_GTAG_ID});
      `}
      </script>

      {/* META TAGS */}
      <title>Wine of Marche | Italian Wine Import Company</title>
      <link rel="canonical" href="https://wineofmarche.au/" />
      <meta
        property="og:title"
        content="Wine of Marche | Italian Wine Import Company"
      />
      <meta
        name="description"
        content="Rare and High Quality Italian Wines at wholesale price. Bringing exclusive Italian wine from the Marche region to the best fine dining restaurant in Australia"
      />
      <meta
        property="og:description"
        content="Rare and High Quality Italian Wines at wholesale price. Bringing exclusive Italian wine from the Marche region to the best fine dining restaurant in Australia"
      />
      <meta property="og:url" content="https://wineofmarche.au/" />
      <meta
        property="keywords"
        content="Wine Sydney Marche Italy Italian Australia Luxury Liquor Local Restaurant Wine Importer Apollonia Flora Campo di Cuori Contatto Extra Brut Isola Lacrima Millesimato Opere Suono Urbano Wine of Marche, Italian wine importer and supplier in Sydney - Lane Cove -
        NSW. Buy wine online, Montepulciano, Sparkling Wine, Wine Shop, Italian
        Wine, Wine Delivery, Wine Wholesale, Wine Wholesale with delivery, Vintage
        Wine, Organic Wine, Online Wine Store, Prosecco, Verdicchio, Italian
        Prosecco, Best Italian Wine, White Wine."
      />
      <meta property="og:type" content="LiquorStore" />
      <meta
        property="og:image"
        content={`${process.env.REACT_APP_BASE_URL}${logoPic}`}
      />
      <meta property="og:image:alt" content="Wine of Marche Logo" />
      <meta property="og:image:width" content="200" />
      <meta property="og:image:height" content="200" />

      {/* STRUCTURED DATA */}
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
          address: "U7/19 Ralston Street, Lane Cove North. 2066 NSW, Australia",
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
          keywords:
            "Wine Sydney Marche Italy Italian Australia Luxury Liquor Local Restaurant Wine Importer Apollonia Flora Campo di Cuori Contatto Extra Brut Isola Lacrima Millesimato Opere Suono Urbano",
          knowsLanguage: "English, Italian",
          logo: `${process.env.REACT_APP_BASE_URL}${logoPic}`,
          url: `${process.env.REACT_APP_BASE_URL}/`,
        })}
      </script>
    </Helmet>
  );
};
