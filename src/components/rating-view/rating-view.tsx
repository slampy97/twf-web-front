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
  const position = 55;
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

  return (
    <div>
      <div className="fst-tab">
        {isAllUserTabsFetched && userTabs && position >= 1 && userTabs[0] && (
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
            position > 3 &&
            userTabs[position - 2] && (
              <UserRatingTab
                name={userTabs[position - 2].fields[1].value}
                points={userTabs[position - 2].fields[2].value}
                place={position - 2}
              />
            )}
        </div>
        <div className="rating-views__tab">
          {isAllUserTabsFetched &&
            userTabs &&
            position > 2 &&
            userTabs[position - 1] && (
              <UserRatingTab
                name={userTabs[position - 1].fields[1].value}
                points={userTabs[position - 1].fields[2].value}
                place={position - 1}
              />
            )}
        </div>

        <div className="rating-views__tab">
          {isAllUserTabsFetched &&
            userTabs &&
            position > 1 &&
            userTabs[position] && (
              <UserRatingTab
                name={userTabs[position].fields[1].value}
                points={userTabs[position].fields[2].value}
                place={position}
                currentUser={true}
              />
            )}
        </div>

        <div className="rating-views__tab">
          {isAllUserTabsFetched &&
            userTabs &&
            position < userTabs.length - 2 && (
              <UserRatingTab
                name={userTabs[position + 1].fields[1].value}
                points={userTabs[position + 1].fields[2].value}
                place={position + 1}
              />
            )}
        </div>

        <div className="rating-views__tab">
          {isAllUserTabsFetched &&
            userTabs &&
            position < userTabs.length - 1 && (
              <UserRatingTab
                name={userTabs[position + 2].fields[1].value}
                points={userTabs[position + 2].fields[2].value}
                place={position + 2}
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
