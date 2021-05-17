import React, { useEffect, useState } from "react";
import UserRatingTab from "../user-rating-tab/user-rating-tab";
import "./rating-view.scss";
import {
  FetchUsersRequestData,
  UsersSortingProperty,
} from "../../redux/user-tabs/user-tabs.types";
import { fetchUserTabsStartAsync } from "../../redux/user-tabs/user-tabs.actions";
import { createStructuredSelector } from "reselect";
import {
  selectIsAllUserTabsFetched,
  selectIsUserTabsFetching,
  selectUserTabsCurrentPage,
  selectUserTabsError,
  selectUserTabsList,
  selectUserTabsPageSize,
  selectUserTabsSortedBy,
  selectUserTabsSortedDescending,
} from "../../redux/user-tabs/user-tabs.selectors";
import { connect, ConnectedProps, MapDispatchToProps } from "react-redux";

interface User {
  name: string;
  place: number;
  points: number;
}

function RatingView({
  isUserTabsFetching,
  userTabs,
  isAllUserTabsFetched,
  fetchUserTabsStartAsync,
}: ConnectedProps<typeof connector>) {
  const [rangUsers, setRangUsers] = useState<any[]>([]);
  const my_rating = 3;
  useEffect(() => {
    fetchUserTabsStartAsync({
      levelCode: null,
      gameCode: null,
      sortedBy: UsersSortingProperty.BY_RATING,
      descending: true,
      offset: 0,
      limit: 510,
    });
  }, []);

  useEffect(() => {
    console.log("USERTABS CHANGED!");
    console.log(userTabs);
  }, [userTabs]);

  const fst_check = my_rating >= 1;
  const up2_check = my_rating > 3;
  const up1_check = my_rating > 2;
  return (
    <div>
      <div className="fst-tab">
        {isAllUserTabsFetched && userTabs && fst_check && userTabs[0] && (
          <UserRatingTab
            name={userTabs[1].fields[1].value}
            points={userTabs[1].fields[2].value}
            place={1}
          />
        )}
        <hr
          style={{
            color: "darkred",
            backgroundColor: "blue",
            height: 5,
          }}
        />
      </div>

      <div className="rating-views">
        <div className="rating-views__tab">
          {isAllUserTabsFetched &&
            userTabs &&
            up2_check &&
            userTabs[my_rating - 2] && (
              <UserRatingTab
                name={userTabs[my_rating - 2].fields[1].value}
                points={userTabs[my_rating - 2].fields[2].value}
                place={my_rating - 2}
              />
            )}
        </div>
        <div className="rating-views__tab">
          {isAllUserTabsFetched &&
            userTabs &&
            up1_check &&
            userTabs[my_rating - 1] && (
              <UserRatingTab
                name={userTabs[my_rating - 1].fields[1].value}
                points={userTabs[my_rating - 1].fields[2].value}
                place={my_rating - 1}
              />
            )}
        </div>

        <div
          className="rating-views__tab"
          style={{
            opacity: "1",
            border: "0.5rem solid #9955aa",
          }}
        >
          {isAllUserTabsFetched &&
            userTabs &&
            my_rating > 1 &&
            userTabs[my_rating] && (
              <UserRatingTab
                name={userTabs[my_rating].fields[1].value}
                points={userTabs[my_rating].fields[2].value}
                place={my_rating}
              />
            )}
        </div>

        <div className="rating-views__tab">
          {isAllUserTabsFetched &&
            userTabs &&
            my_rating < userTabs.length - 2 && (
              <UserRatingTab
                name={userTabs[my_rating + 1].fields[1].value}
                points={userTabs[my_rating + 1].fields[2].value}
                place={my_rating + 1}
              />
            )}
        </div>

        <div className="rating-views__tab">
          {isAllUserTabsFetched &&
            userTabs &&
            my_rating < userTabs.length - 1 && (
              <UserRatingTab
                name={userTabs[my_rating + 2].fields[1].value}
                points={userTabs[my_rating + 2].fields[2].value}
                place={my_rating + 2}
              />
            )}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector<any, any>({
  isUserTabsFetching: selectIsUserTabsFetching,
  userTabs: selectUserTabsList,
  isAllUserTabsFetched: selectIsAllUserTabsFetched,
});

const mapDispatchToProps: MapDispatchToProps<any, any> = (dispatch: any) => ({
  fetchUserTabsStartAsync: (data: FetchUsersRequestData) =>
    dispatch(fetchUserTabsStartAsync(data)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(RatingView);
