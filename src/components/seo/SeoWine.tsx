import { Helmet } from "react-helmet-async";
import { imagesOfWines } from "../../data/data-wine-images";
import { IWineCard } from "../../pages/winepage/WineCard";

interface ISeoProps extends IWineCard {
  wineId: string;
}

export const SeoWine = ({ wine, wineId }: ISeoProps) => {
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
      <title>
        {wine.name} | {wine.type.split(",")[0]} | Wine of Marche | Italian Wine
        Import Company
      </title>
      <link
        rel="canonical"
        href={`${process.env.REACT_APP_BASE_URL}/wines/${wine.id}/`}
      />
      <meta
        property="og:title"
        content={`${wine.name} | ${
          wine.type.split(",")[0]
        } | Wine of Marche | Italian Wine Import Company`}
      />
      <meta
        name="description"
        content={`${wine.type} | Wine of Marche | Italian Wine Import Company`}
      />
      <meta
        property="og:description"
        content={`${wine.type} | Wine of Marche | Italian Wine Import Company`}
      />
      <meta
        property="og:url"
        content={`${process.env.REACT_APP_BASE_URL}/wines/${wine.id}/`}
      />
      <meta
        property="keywords"
        content={`${wine.id} ${wine.type} Wine Sydney Marche Italy Italian Australia Luxury Liquor Local Restaurant Wine Importer Apollonia Flora Campo di Cuori Contatto Extra Brut Isola Lacrima Millesimato Opere Suono Urbano`}
      />
      <meta property="og:type" content="Product" />
      <meta
        property="og:image"
        content={`${process.env.REACT_APP_BASE_URL}${
          imagesOfWines.find((w) => w.id === wineId)?.image
        }`}
      />
      <meta property="og:image:alt" content={wine.name} />
      <meta property="og:image:width" content="200" />
      <meta property="og:image:height" content="400" />

      {/* STRUCTURED DATA */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: wine.name,
          description: `${wine.type} | Wine of Marche | Italian Wine Import Company`,
          image: [
            `${process.env.REACT_APP_BASE_URL}${
              imagesOfWines.find((w) => w.id === wineId)?.image
            }`,
          ],
          brand: {
            "@type": "Organization",
            name: "Wine of Marche",
            "@id": "https://wineofmarche.au/",
          },
          review: {
            "@type": "Review",
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5",
              worstRating: "4",
            },
            author: { "@type": "Person", name: "Salvatore" },
          },
          audience: {
            "@type": "Audience",
            name: "wine lovers - restaurants - business",
          },
          category: "Alcohol, Wines",
          countryOfAssembly: "Italy",
          countryOfOrigin: {
            address: "Italy",
          },
          keywords: `${wine.id} ${wine.type} Wine Sydney Marche Italy Italian Australia Luxury Liquor Local Restaurant Wine Importer Apollonia Flora Campo di Cuori Contatto Extra Brut Isola Lacrima Millesimato Opere Suono Urbano`,
          url: `${process.env.REACT_APP_BASE_URL}/wines/${wine.id}/`,
        })}
      </script>
    </Helmet>
  );
};
