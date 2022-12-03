import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { greyDescription, winetitle } from "../../components/common/colors";
import { MaxWidthComponent } from "../../components/common/MaxWidthComponent";
import winelist from "../../data/data-wines.json";
import { RelatedProducts } from "./RelatedProducts";
import { WineCard } from "./WineCard";

const WinePageStyle = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 6rem;
  padding-bottom: 3rem;

  .wine-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    grid-template-areas:
      "header"
      "images"
      "specs"
      "description";

    .wine-header {
      grid-area: header;
      h1 {
        font-size: 28px;
        line-height: 1.5em;
        text-align: left;
        color: ${greyDescription};
        letter-spacing: 0.1em;
        text-transform: uppercase;
        font-weight: 400;
        margin-bottom: 0;
      }
    }
    .wine-images {
      grid-area: images;
      margin: auto;
    }
    .wine-specs {
      grid-area: specs;
      h2,
      p {
        margin-top: 0;
        margin-bottom: 0.5rem;
        font-weight: 400;
        line-height: 1.03em;
        letter-spacing: 0.2em;
      }

      h2 {
        font-size: 35px;
        color: ${winetitle};
        font-family: Daniel;
      }

      p {
        color: ${greyDescription};
        font-size: 20px;
        font-weight: 600;
      }
    }
    .wine-description {
      grid-area: description;
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem;
      margin-top: 4rem;
      h3,
      p {
        margin-top: 0;
        margin-bottom: 0.5rem;
      }

      h3 {
        font-size: 20px;
        letter-spacing: 0.15em;
        /* color: #282727; */
        font-weight: bold;
        color: ${winetitle};
      }

      p {
        color: ${greyDescription};
        font-size: 15px;
        font-weight: 600;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .wine-container {
      row-gap: 4rem;
      grid-template-columns: 3fr 2fr;
      grid-template-areas:
        "header header"
        "specs specs"
        "images description";

      .wine-header {
        h1 {
          text-align: center;
        }
      }
    }
  }

  @media only screen and (min-width: 1280px) {
    padding-top: 3rem;
    margin-top: 6rem;
    .wine-container {
      .wine-specs {
        h2 {
          font-size: 45px;
        }
        p {
          font-size: 28px;
        }
      }

      .wine-description {
        margin-top: 0;
        h3 {
          font-size: 30px;
        }
        p {
          font-size: 20px;
        }
      }
    }
  }
`;

export const WinepageScreen = () => {
  const { id } = useParams();
  const wine = winelist.find((w) => w.id === id);

  if (!wine || !id) return <Navigate to="/404" />;

  const { id: wineId } = wine;

  return (
    <WinePageStyle className={`winepage-container ${wineId}`}>
      <MaxWidthComponent label={wineId}>
        <WineCard wine={wine} />
      </MaxWidthComponent>
      <RelatedProducts idToNotDisplay={id} />
    </WinePageStyle>
  );
};
