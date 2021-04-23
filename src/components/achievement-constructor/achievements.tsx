import React, { useState } from "react";
import { Progress } from "antd";
import AppModal from "../app-modal/app-modal.component";
import ImportModal from "../modal-work/importModal";
import "./achievements.scss";

interface BadgeProps {
  isFinished: boolean;
  imgSrc: string;
  imgWidth?: string;
  imgHeight?: string;
}

const Badge = ({ isFinished, imgSrc, imgHeight, imgWidth }: BadgeProps) => {
  return (
    <img
      className="achievement-block__image"
      style={{
        opacity: isFinished ? "1" : "0.5",
        border: isFinished ? "1rem solid #b9c612" : "1rem solid #c6124b",
      }}
      src={imgSrc}
      width={imgWidth ? imgWidth : "110rem"}
      height={imgHeight ? imgHeight : "110rem"}
    />
  );
};

function Achievements(props: {
  title: string;
  description: string;
  impSrc: string;
  imgWidth?: string;
  imhHeight?: string;
  progressRate: number;
}) {
  const {
    title,
    description,
    impSrc,
    imgWidth,
    imhHeight,
    progressRate,
  } = props;
  return (
    <div className="achievement-block">
      <div className="achievement-block__border">
        <Badge isFinished={progressRate === 100} imgSrc={impSrc} />
      </div>
      <Progress percent={progressRate} size={"small"} />
      <ImportModal title={title} description={description} />
    </div>
  );
}

export default Achievements;
