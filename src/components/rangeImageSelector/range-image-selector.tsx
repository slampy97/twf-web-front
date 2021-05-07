import React from "react";
// assets
import imgRang1 from "../../assets/rang-images/be001215_1024x1024 (1).jpeg";
import imgRang2 from "../../assets/rang-images/scale_1200.webp";
import imgRang3 from "../../assets/rang-images/image30.jpg";
import imgRang4 from "../../assets/rang-images/scale_1200 (1).webp";
import imgRang5 from "../../assets/rang-images/las-13-mejores-frases-clebres-de-anaxgoras.jpg";
import imgRang6 from "../../assets/rang-images/1.jpg";
import imgRang7 from "../../assets/rang-images/0HzxmBYtaPki_evklid.jpg";
import imgRang8 from "../../assets/rang-images/009.jpg";
import imgRang9 from "../../assets/rang-images/2093181.jpg";
import imgRang10 from "../../assets/rang-images/arhimed.jpg";
export interface RangImageProps {
  levelsPassed: number;
  ratingCounter: (arg0: number) => number;
}

function RangImage({ levelsPassed, ratingCounter }: RangImageProps) {
  const calculateRangImage = (rang: number): string => {
    switch (rang) {
      case 1:
        return imgRang1;
      case 2:
        return imgRang2;
      case 3:
        return imgRang3;
      case 4:
        return imgRang4;
      case 5:
        return imgRang5;
      case 6:
        return imgRang6;
      case 7:
        return imgRang7;
      case 8:
        return imgRang8;
      case 9:
        return imgRang9;
      default:
        return imgRang10;
    }
  };

  return (
    <img
      src={calculateRangImage(ratingCounter(levelsPassed))}
      height={"50rem"}
      width={"auto"}
    />
  );
}

export default RangImage;
