import React, { useState } from "react";
import { Progress } from "antd";
import AppModal from "../app-modal/app-modal.component";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="achievement_block" onClick={() => setIsModalOpen(true)}>
      <img
        src={impSrc}
        width={imgWidth ? imgWidth : "80rem"}
        height={imhHeight ? imhHeight : "80rem"}
      />
      <Progress percent={progressRate} size={"small"} />
      <AppModal isOpen={isModalOpen} close={() => setIsModalOpen(false)}>
        <div>
          <h1>{title}</h1>
          <div>{description}</div>
        </div>
      </AppModal>
    </div>
  );
}

export default Achievements;
