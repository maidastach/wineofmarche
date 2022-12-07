import styled from "styled-components";
import winelist from "../../data/data-wines.json";
import { imagesOfWines } from "../../data/data-wine-images";
import { Link } from "react-router-dom";
import {
  greyDescription,
  winelisthp,
  winetitle,
} from "../../components/common/colors";

const RelatedProductsStyle = styled.div.attrs({
  className: "related-products",
})`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  padding: 2rem 2rem 4rem;

  h2 {
    font-size: 20px;
    text-align: left;
    color: ${winelisthp};
  }

  .wines-container {
    gap: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    .single-wine {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 140px;

      img {
        width: 140px;
        height: 170px;
        object-fit: cover;
        object-position: bottom;
        transition: 0.75s all;

        &:hover {
          object-position: center;
        }
      }

      h3,
      p {
        margin: 0;
        text-align: center;
        padding-inline: 0.75rem;
      }

      h3 {
        font-size: 16px;
        color: ${winetitle};
        font-family: Daniel;
        margin-top: 0.5rem;
      }

      p {
        color: ${greyDescription};
        font-size: 10px;
      }
    }
  }

  @media only screen and (min-width: 1280px) {
    padding-inline: 4rem;

    h2 {
      font-size: 25px;
    }
    .wines-container {
      .single-wine {
        max-width: 200px;
        img {
          height: 200px;
        }
        h3 {
          font-size: 22px;
        }
        p {
          font-size: 14px;
        }
      }
    }
  }

  /* @media only screen and (min-width: 1950px) {
    .wines-container {
      justify-content: space-between;
    }
  } */
`;

export const RelatedProducts = ({
  idToNotDisplay,
}: {
  idToNotDisplay: string;
}) => {
  const wines = winelist.filter((w) => w.id !== idToNotDisplay);

  return (
    <RelatedProductsStyle>
      <h2>More Wines</h2>
      <div className="wines-container">
        {wines.map(({ id, name, type }) => (
          <Link key={id} to={`/wines/${id}`}>
            <div className="single-wine">
              <img
                src={imagesOfWines.find((w) => w.id === id)?.image}
                alt={id}
              />
              <h3>{name}</h3>
              <p>{type.split(",")[0]}</p>
            </div>
          </Link>
        ))}
      </div>
    </RelatedProductsStyle>
  );
};
