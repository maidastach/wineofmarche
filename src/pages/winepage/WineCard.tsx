import { Button } from "@mui/material";
import { imagesOfWines } from "../../data/data-wine-images";

interface SpecsOfWine {
  id: string;
  label: string;
  data: string;
}
export interface IWineCard {
  wine: {
    id: string;
    name: string;
    type: string;
    image: string;
    isForSale: boolean;
    url: string;
    specs: {
      grape: SpecsOfWine;
      growing: SpecsOfWine;
      yield: SpecsOfWine;
      harvest: SpecsOfWine;
      vinification: SpecsOfWine;
      tasting?: SpecsOfWine;
      aroma?: SpecsOfWine;
      appearance?: SpecsOfWine;
    };
  };
}

export const WineCard = ({ wine }: IWineCard) => {
  const {
    id: wineId,
    name,
    isForSale,
    url,
    type,
    specs: {
      grape,
      growing,
      yield: wineYield,
      harvest,
      vinification,
      tasting,
      aroma,
      appearance,
    },
  } = wine;

  return (
    <div className={`wine-container${!!tasting ? " is-extended" : ""}`}>
      <div className={`wine-header${!!tasting ? " is-extended" : ""}`}>
        <h1>Our Wines</h1>
      </div>
      <div className={`wine-images${!!tasting ? " is-extended" : ""}`}>
        <img
          src={imagesOfWines.find((w) => w.id === wineId)?.image}
          alt={wineId}
        />
      </div>
      <div className={`wine-specs${!!tasting ? " is-extended" : ""}`}>
        <h2>{name}</h2>
        {type.split(",").map((t) => (
          <p key={t}>{t}</p>
        ))}
        {!!isForSale && (
          <Button href={url} target="_blank" size="large" variant="outlined">
            Buy Now
          </Button>
        )}
      </div>
      <div className={`wine-description${!!tasting ? " is-extended" : ""}`}>
        <div className={grape.id}>
          <h3>{grape.label}</h3>
          <p>{grape.data}</p>
        </div>
        <div className={growing.id}>
          <h3>{growing.label}</h3>
          <p>{growing.data}</p>
        </div>
        <div className={wineYield.id}>
          <h3>{wineYield.label}</h3>
          <p>{wineYield.data}</p>
        </div>
        <div className={harvest.id}>
          <h3>{harvest.label}</h3>
          <p>{harvest.data}</p>
        </div>
        <div className={vinification.id}>
          <h3>{vinification.label}</h3>
          <p>{vinification.data}</p>
        </div>
        {!!tasting && (
          <div className={tasting.id}>
            <h3>{tasting.label}</h3>
            <p>{tasting.data}</p>
          </div>
        )}
        {!!aroma && (
          <div className={aroma.id}>
            <h3>{aroma.label}</h3>
            <p>{aroma.data}</p>
          </div>
        )}
        {!!appearance && (
          <div className={appearance.id}>
            <h3>{appearance.label}</h3>
            <p>{appearance.data}</p>
          </div>
        )}
      </div>
    </div>
  );
};
