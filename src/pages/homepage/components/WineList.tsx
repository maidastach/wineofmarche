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

const WineListStyle = styled.div.attrs({ className: "wine-list-container" })`
  padding: 4rem 2rem;
  background: url(${imageWineBG}) center/cover no-repeat;
  overflow: hidden;
  box-shadow: 3.8px -7.5px 7.5px hsl(0deg 0% 0% / 0.38);
  min-height: 550px;
  position: relative;

  h2.section-title {
    font-size: 35px;
    line-height: 1.5em;
    text-align: left;
    color: ${winelisthp};
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-weight: 400;
    margin: 0;
    margin-bottom: 4rem;
  }

  .wines-motion-wrapper {
    display: -webkit-box;
    -webkit-box-align: center;
    gap: 3rem;
    min-height: 400px;
    cursor: grab;

    a {
      display: contents;
    }

    .wine-img-container {
      position: relative;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 250px;
      height: 330px;
      border: 3px solid ${borderColor};
      border-radius: 25px;
      box-shadow: 3px 2px 8px 4px grey;
      transition: 0.3s linear;

      &:hover {
        margin-inline: 3rem;
      }

      &:hover .wine-overlay {
        opacity: 1;
        z-index: 1;
      }

      &:hover img {
        transform: scale(1.2) translateX(60px);
      }
      &:hover {
        transform: scale(1.5);
      }

      .wine-overlay {
        position: absolute;
        top: 0;
        left: 10px;
        z-index: -1;
        opacity: 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 60%;
        height: 100%;
        border-radius: 20px;
        transition: 0.5s ease;
        text-align: start;

        h2 {
          font-family: "Daniel";
          color: ${winetitle};
          margin-top: 2rem;
          width: 90%;
          font-size: 20px;
          margin-bottom: 0;
        }
        p {
          width: 90%;
          margin-bottom: 0;
          font-size: 14px;
          color: ${winelisthp};
        }
      }

      img {
        object-fit: contain;
        width: 70px;
        transition: 0.5s ease;
      }
    }
  }

  @media only screen and (min-width: 1280px) {
    padding-inline: 4rem;
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
      <h2 className="section-title">OUR WINES</h2>
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
            <Link to={`/wines/${id}`}>
              <img
                src={
                  imagesOfWines.find((w) => w.id === id)?.image ||
                  imagesOfWines[idx].image
                }
                alt={name}
              />
              <div className="wine-overlay">
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
