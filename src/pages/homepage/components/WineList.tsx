import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import winelist from "../../../data/data-wines.json";
import { imagesOfWines } from "../../../data/data-wine-images";
import { Link } from "react-router-dom";

const WineListStyle = styled.div.attrs({ className: "wine-list-container" })`
  padding: 4rem 1rem;
  background-color: #ababab;
  cursor: grab;
  overflow: hidden;
  box-shadow: 0px -6px 13px -2px #626262;

  .wines-motion-wrapper {
    display: -webkit-box;
    -webkit-box-align: center;
    gap: 2rem;
    min-height: 400px;

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
      border: 3px solid #ca9317;
      border-radius: 25px;
      box-shadow: 3px 2px 8px 4px grey;
      transition: 0.2s linear;

      &:hover .wine-overlay {
        opacity: 0.5;
        z-index: 1;
      }

      &:hover img {
        transform: scale(1.3);
      }
      &:hover {
        width: 350px;
        height: 380px;
      }

      .wine-overlay {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        opacity: 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: black;
        border-radius: 20px;
        transition: 1s ease;
        color: white;
        text-align: center;

        h2 {
          font-family: "Daniel";
          min-height: 70px;
          margin-top: 2rem;
          width: 90%;
        }
        p {
          width: 90%;
          margin-bottom: 0;
        }
      }

      img {
        object-fit: contain;
        width: 70px;
        transition: 0.5s ease;
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
          <Link key={id} to={`/wines/${id}`}>
            <div key={name} className={`wine-img-container ${name}-container`}>
              <img
                src={
                  imagesOfWines.find((w) => w.id === id)?.image ||
                  imagesOfWines[idx].image
                }
                alt={name}
              />
              <div className="wine-overlay">
                <h2>{name}</h2>
                {type.split(",").map((t) => (
                  <p key={t}>{t}</p>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </motion.div>
    </WineListStyle>
  );
};
