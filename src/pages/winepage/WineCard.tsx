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
    specs: {
      grape: SpecsOfWine;
      growing: SpecsOfWine;
      yield: SpecsOfWine;
      harvest: SpecsOfWine;
      vinification: SpecsOfWine;
    };
  };
}

export const WineCard = ({ wine }: IWineCard) => {
  const {
    id: wineId,
    name,
    type,
    specs: { grape, growing, yield: wineYield, harvest, vinification },
  } = wine;

  return (
    <div className="wine-container">
      <div className="wine-header">
        <h1>Our Wines</h1>
      </div>
      <div className="wine-images">
        <img
          src={imagesOfWines.find((w) => w.id === wineId)?.image}
          alt={wineId}
        />
      </div>
      <div className="wine-specs">
        <h2>{name}</h2>
        {type.split(",").map((t) => (
          <p key={t}>{t}</p>
        ))}
      </div>
      <div className="wine-description">
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
      </div>
    </div>
  );
};
