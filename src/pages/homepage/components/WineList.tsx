import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import winelist from "../../../data/data-wines.json";
import imageWineBG from "../../../assets/images/wines-list.jpg";
import { imagesOfWines } from "../../../data/data-wine-images";
import { Link } from "react-router-dom";
import {
  borderColor,
  winelisthp,
  winetitle,
} from "../../../components/common/colors";

const WineListStyle = styled.div.attrs({
  className: "wine-list-container container",
})`
  background: url(${imageWineBG}) center/cover no-repeat;
  gap: 3rem;

  h2.section-title {
    color: ${winelisthp};
  }

  .wines-motion-wrapper {
    display: -webkit-box;
    -webkit-box-align: center;
    gap: 3rem;
    cursor: grab;

    .wine-img-container {
      position: relative;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 200px;
      height: 280px;
      border: 3px solid ${borderColor};
      border-radius: 25px;
      box-shadow: 3px 2px 8px 4px grey;
      transition: 0.3s linear;

      &:hover .wine-overlay {
        opacity: 1;
        z-index: 1;
      }

      &:hover img {
        transform: scale(1.1) translateX(50px) translateY(20px);
      }
      &:hover {
        transform: scale(1.2);
      }

      .wine-overlay {
        left: 10px;
        z-index: -1;
        opacity: 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 60%;
        border-radius: 25px;
        transition: 0.3s ease;
        text-align: start;

        h2 {
          font-family: "Daniel";
          color: ${winetitle};
          margin-top: 2rem;
          width: 90%;
          font-size: 18px;
        }
        p {
          width: 90%;
          font-size: 13px;
          color: ${winelisthp};
        }
      }

      img {
        object-fit: contain;
        width: 50px;
        transition: 0.5s ease;
      }
    }
  }

  @media only screen and (min-width: 1280px) {
    gap: 4rem;
    .wines-motion-wrapper {
      .wine-img-container {
        width: 250px;
        height: 330px;
        &:hover {
          margin-inline: 1rem;
          transform: scale(1.2);
        }

        &:hover img {
          transform: scale(1.2) translateX(60px) translateY(20px);
        }

        .wine-overlay {
          h2 {
            font-size: 20px;
          }
        }
        img {
          width: 60px;
        }
      }
    }
  }
`;

export const WineList = () => {
  const [scrollLeft, setScrollLeft] = useState<number>(0);
  const winesContainerRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    setScrollLeft(
      (winesContainerRef.current as HTMLDivElement)?.scrollWidth -
        (winesContainerRef.current as HTMLDivElement)?.offsetWidth +
        128
    );
  }, []);

  return (
    <WineListStyle id="wines-list">
      <h2 className="section-title">Our Wines</h2>
      <motion.div
        drag="x"
        dragConstraints={{
          right: 32,
          left: -scrollLeft,
        }}
        className="wines-motion-wrapper"
        ref={winesContainerRef}
      >
        {winelist.map(({ id, name, type }, idx) => (
          <div key={name} className={`wine-img-container ${name}-container`}>
            <Link to={`/wines/${id}/`}>
              <img
                src={
                  imagesOfWines.find((w) => w.id === id)?.image ||
                  imagesOfWines[idx].image
                }
                alt={name}
              />
              <div className="wine-overlay overlay">
                <h2>{name}</h2>
                <p>{type.split(",")[0]}</p>
              </div>
            </Link>
          </div>
        ))}
      </motion.div>
    </WineListStyle>
  );
};
