import styled from "styled-components";
import winelist from "../../data/data-wines.json";
import { imagesOfWines } from "../../data/data-wine-images";
import { Link } from "react-router-dom";
import { greyDescription, winetitle } from "../../components/common/colors";

const RelatedProductsStyle = styled.div.attrs({
  className: "related-products",
})`
  display: flex;
  gap: 2rem;
  flex-direction: column;

  h2 {
    font-size: 28px;
    line-height: 1.5em;
    text-align: left;
    color: ${greyDescription};
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-weight: 400;
    margin-top: 0;
  }

  .wines-container {
    gap: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    .single-wine {
      width: 40%;
      max-width: 200px;

      img {
        width: 100%;
        height: 280px;
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
        font-weight: 400;
        line-height: 1.03em;
        letter-spacing: 0.2em;
        text-align: center;
      }

      h3 {
        font-size: 20px;
        color: ${winetitle};
        font-family: Daniel;
        margin-top: 0.5rem;
      }

      p {
        color: ${greyDescription};
        font-size: 13px;
        font-weight: 600;
      }
    }
  }

  @media only screen and (min-width: 1280px) {
    h2 {
      font-size: 34px;
    }
    .wines-container {
      .single-wine {
        h3 {
          font-size: 25px;
        }
        p {
          font-size: 17px;
        }
      }
    }
  }

  @media only screen and (min-width: 1700px) {
    .wines-container {
      justify-content: space-between;
    }
  }
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
