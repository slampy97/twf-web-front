import React from "react";

function RangeSelector(selectorPros: {
  levelsPassed: number;
  ratingCounter: (arg0: number) => number;
}) {
  const { levelsPassed, ratingCounter } = selectorPros;
  switch (ratingCounter(levelsPassed)) {
    case 1:
      return (
        <div>
          <img
            src={
              "https://cdn.shopify.com/s/files/1/0895/0864/products/be001215_1024x1024.jpeg?v=1451681989"
            }
            height={"50rem"}
            width={"auto"}
          />
        </div>
      );
    case 2:
      return (
        <div>
          <img
            src={
              "https://avatars.mds.yandex.net/get-zen_doc/3437146/pub_5f895d7d9eb9a66f8bff0aca_5f8a8ced5284e336e5ffb961/scale_1200"
            }
            height={"50rem"}
            width={"auto"}
          />
        </div>
      );
    case 3:
      return (
        <div>
          <img
            src={
              "https://austrianartblog.files.wordpress.com/2014/11/image30.jpg"
            }
            height={"50rem"}
            width={"auto"}
          />
        </div>
      );
    case 4:
      return (
        <div>
          <img
            src={
              "https://avatars.mds.yandex.net/get-zen_doc/1361478/pub_5eca772991e212659e300bbf_5eca77367c82386f5b789161/scale_1200"
            }
            height={"50rem"}
            width={"auto"}
          />
        </div>
      );
    case 5:
      return (
        <div>
          <img
            src={
              "https://www.sainte-anastasie.org/img/images/las-13-mejores-frases-clebres-de-anaxgoras.jpg"
            }
            height={"50rem"}
            width={"auto"}
          />
        </div>
      );
    case 6:
      return (
        <div>
          <img
            src={
              "https://shkrudnev.com/images/downloads/pictures/publikatsii/KNIGA/kniga_4/glava_5/1.jpg"
            }
            height={"50rem"}
            width={"auto"}
          />
        </div>
      );
    case 7:
      return (
        <div>
          <img
            src={
              "https://biografii.net/wp-content/uploads/2018/12/0HzxmBYtaPki_evklid.jpg"
            }
            height={"50rem"}
            width={"auto"}
          />
        </div>
      );
    case 8:
      return (
        <div>
          <img
            src={"https://www.ilovegreece.ru/mediaResource/00/010/009.jpg"}
            height={"50rem"}
            width={"auto"}
          />
        </div>
      );
    case 9:
      return (
        <div>
          <img
            src={"https://fb.ru/misc/i/gallery/55362/2093181.jpg"}
            height={"50rem"}
            width={"auto"}
          />
        </div>
      );
    default:
      return (
        <div>
          <img
            src={
              "https://library.vladimir.ru/wp-content/uploads/2020/07/arhimed.jpg"
            }
            height={"50rem"}
            width={"auto"}
          />
        </div>
      );
  }
}

export default RangeSelector;
