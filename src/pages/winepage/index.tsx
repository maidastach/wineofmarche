import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { MaxWidthComponent } from "../../components/common/MaxWidthComponent";
import winelist from "../../data/data-wines.json";
import { RelatedProducts } from "./RelatedProducts";
import { WineCard } from "./WineCard";
import wineBgPic from "../../assets/images/wine of marche wine.jpg";
import { SeoWine } from "../../components/seo/SeoWine";

const WinePageStyle = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  .winepage-content {
    padding-bottom: 3rem;
    background-image: url("${wineBgPic}");
    background-color: #000000b0;
    background-blend-mode: soft-light;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    .max-width-component {
      margin-top: 3rem;
      padding-inline: 2rem;
    }
  }

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
        font-size: 20px;
        text-align: left;
        color: white;
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
        color: #ffe000;
        font-family: Daniel;
      }

      p {
        color: white;
        font-size: 14px;
        font-weight: 600;
      }

      a {
        letter-spacing: 0.1em;
        font-weight: 600;
        padding: 13px 26px;
        font-size: initial;
        font-family: "Cinzel", -apple-system, BlinkMacSystemFont, "Segoe UI",
          "Roobto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
          "Helvetica Neue", sans-serif, "Daniel";
        margin-top: 0.75rem;
        color: #ffe000;
        border-color: rgba(255, 224, 0, 0.5);
        &:hover {
          border-color: rgba(255, 224, 0, 1);
        }
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
        color: #ffe000;
      }

      p {
        color: white;
        font-size: 13px;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .wine-container {
      row-gap: 4rem;
      grid-template-columns: 4fr 3fr;
      grid-template-areas:
        "header header"
        "specs specs"
        "images description";

      &.is-extended {
        grid-template-rows: auto 95px auto;
        grid-template-areas: none;
      }

      .wine-header {
        &.is-extended {
          grid-column: 1 / 3;
          grid-row: 1 / 2;
        }
        h1 {
          text-align: center;
        }
      }

      .wine-description {
        margin-top: 0;
        &.is-extended {
          grid-column: 2 / 3;
          grid-row: 2 / 4;
        }
      }

      .wine-specs {
        &.is-extended {
          grid-column: 1 / 2;
          grid-row: 2 / 2;
        }
      }

      .wine-images {
        &.is-extended {
          margin-top: 10rem;
          grid-column: 1 / 2;
          grid-row: 3 / 4;
        }
      }
    }
  }

  @media only screen and (min-width: 1280px) {
    .winepage-content {
      .max-width-component {
        margin-top: 8rem;
        padding-inline: 4rem;
      }
    }
    .wine-container {
      &.is-extended {
        grid-template-rows: auto 180px auto;
      }
      .wine-images {
        &.is-extended {
          margin-top: 5rem;
          img {
            height: 550px;
            max-height: 5 50px;
          }
        }
        img {
          height: auto;
          max-height: 550px;
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
      <SeoWine wine={wine} wineId={wineId} />
      <div className="winepage-content">
        <MaxWidthComponent label={wineId}>
          <WineCard wine={wine} />
        </MaxWidthComponent>
      </div>
      <RelatedProducts idToNotDisplay={id} />
    </WinePageStyle>
  );
};
