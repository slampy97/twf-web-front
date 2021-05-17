import React, { Component } from "react";

import "./sample-user-page.scss";
import { Progress } from "antd";
import "antd/dist/antd.compact.min.css";
import Achievements from "../../components/achievement-constructor/achievements";
import RatingView from "../../components/rating-view/rating-view";
import RangImage from "../../components/rangeImageSelector/range-image-selector";

function SampleUserPage() {
  return (
    <div>
      <div className="sample-user-page u-container">
        <div className="sample-user-page__info">
          <img
            width={"50rem"}
            height={"auto"}
            src="https://yt3.ggpht.com/a/AATXAJwk1dcIOlP31tuvk2J-DjhWpnwVZTqav9AT6Q=s900-c-k-c0xffffffff-no-rj-mo"
          />
          <div className="sample-user-page__login">vitek_user</div>
          <div className="sample-user-page__name">Xavi Garsia</div>
        </div>

        <div className="sample-user-page__progress">
          <Progress percent={30} />
        </div>
        <div className="sample-user-page__rang">
          <div>
            <RangImage levelsPassed={18} ratingCounter={(x) => x} />
          </div>
        </div>
      </div>

      <div className="sample-user-page__achieve  u-container">
        {Array(20)
          .fill(1)
          .map((_, i) => {
            return (
              <Achievements
                key={i}
                description="some info"
                title="first achieve"
                impSrc="https://pp.userapi.com/c834100/v834100365/b2de7/l-iX0TyLuhY.jpg"
                progressRate={i > 13 ? 50 : 100}
              />
            );
          })}
      </div>
      <div className="sample-user-page__rating  u-container">
        <RatingView />
      </div>
    </div>
  );
}

export default SampleUserPage;
