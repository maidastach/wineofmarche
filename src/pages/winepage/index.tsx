import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import {
  greyDescription,
  winelisthp,
  winetitle,
} from "../../components/common/colors";
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
    margin-top: 2rem;
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
        font-size: 20px;
        text-align: left;
        color: ${winelisthp};
      }
    }
    .wine-images {
      grid-area: images;
      margin: auto;
      img {
        height: 450px;
      }
    }
    .wine-specs {
      grid-area: specs;
      h2,
      p {
        margin-top: 0;
        margin-bottom: 0.5rem;
      }

      h2 {
        font-size: 30px;
        color: ${winetitle};
        font-family: Daniel;
      }

      p {
        color: ${greyDescription};
        font-size: 14px;
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
        font-size: 16px;
        color: ${winetitle};
      }

      p {
        color: ${greyDescription};
        font-size: 13px;
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

      .wine-description {
        margin-top: 0;
      }
    }
  }

  @media only screen and (min-width: 1280px) {
    padding-top: 3rem;
    margin-top: 4rem;
    .wine-container {
      .wine-images {
        img {
          height: auto;
          transition: 0.5s ease;
          &:hover {
            transform: scale(1.2);
          }
        }
      }
      .wine-specs {
        h2 {
          font-size: 40px;
        }
        p {
          font-size: 22px;
        }
      }

      .wine-description {
        h3 {
          font-size: 22px;
        }
        p {
          font-size: 18px;
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
