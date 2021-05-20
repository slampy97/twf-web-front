import React from "react";
// assets
import Fales from "../../assets/rang-images/Fales.jpg";
import Pifagor from "../../assets/rang-images/Pifagor.jpg";
import Geraklit from "../../assets/rang-images/Geraklit.jpg";
import Diofant from "../../assets/rang-images/Diofant.jpg";
import Anaxagor from "../../assets/rang-images/Anaxagor.jpg";
import Demokrit from "../../assets/rang-images/Demokrit.jpg";
import Euclid from "../../assets/rang-images/Euclid.jpg";
import Geron from "../../assets/rang-images/Gerom.jpg";
import Eratosven from "../../assets/rang-images/Eratosven.jpg";
import Archimed from "../../assets/rang-images/archimed.jpg";
import Tartalia from "../../assets/rang-images/tartaglia.jpg";
import Viet from "../../assets/rang-images/viet.jpg";
import Dekart from "../../assets/rang-images/dekart.jpg";
import Djon_Neper from "../../assets/rang-images/Djon_Neper.jpg";
import Simon_Stevin from "../../assets/rang-images/Simeon_Stevin.jpg";
import Ferma from "../../assets/rang-images/Ferma.jpg";
import Leibniz from "../../assets/rang-images/Leibnitz.jpg";
import Pascal from "../../assets/rang-images/Pascal.jpg";
import Bernulli from "../../assets/rang-images/bernoulli.jpg";
import Dalamber from "../../assets/rang-images/Dalamber.jpg";

export interface RangImageProps {
  levelsPassed: number;
  ratingCounter: (arg0: number) => number;
}

function RangImage({ levelsPassed, ratingCounter }: RangImageProps) {
  const calculateRangImage = (rang: number): string => {
    switch (rang) {
      case 1:
        return Fales;
      case 2:
        return Pifagor;
      case 3:
        return Geraklit;
      case 4:
        return Diofant;
      case 5:
        return Anaxagor;
      case 6:
        return Demokrit;
      case 7:
        return Euclid;
      case 8:
        return Geron;
      case 9:
        return Eratosven;
      case 10:
        return Archimed;
      case 11:
        return Tartalia;
      case 12:
        return Viet;
      case 13:
        return Dekart;
      case 14:
        return Djon_Neper;
      case 15:
        return Simon_Stevin;
      case 16:
        return Ferma;
      case 17:
        return Leibniz;
      case 18:
        return Pascal;
      case 19:
        return Bernulli;
      default:
        return Dalamber;
    }
  };

  return (
    <img
      style={{
        opacity: "1",
        border: "0.5rem solid #1155aa",
        margin: "1rem",
      }}
      src={calculateRangImage(ratingCounter(levelsPassed))}
      height={"100rem"}
      width={"auto"}
    />
  );
}

export default RangImage;
