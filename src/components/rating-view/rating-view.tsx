import React from "react";
import UserRatingTab from "../user-rating-tab/user-rating-tab";
import "./rating-view.scss";

interface User {
  name: string;
  place: number;
  points: number;
}

function RatingView() {
  const users: User[] = [
    {
      name: "brain",
      place: 1,
      points: 5000,
    },
    {
      name: "up2",
      place: 500,
      points: 2504,
    },
    {
      name: "up1",
      place: 501,
      points: 2503,
    },
    {
      name: "me",
      place: 502,
      points: 2502,
    },
    {
      name: "down1",
      place: 503,
      points: 2501,
    },
    {
      name: "down2",
      place: 504,
      points: 2500,
    },
  ];
  return (
    <div className="rating-views">
      {users.map(({ name, place, points }) => {
        return (
          <div key={name} className="rating-views__tab">
            <UserRatingTab name={name} points={points} place={place} />
          </div>
        );
      })}
    </div>
  );
}

export default RatingView;
