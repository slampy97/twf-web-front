import React, { useState } from "react";
// ROUTER
import { Switch, Route } from "react-router-dom";
// TRANSLATION CONFIG
import { TranslationProvider } from "./translations";
import { LOCALES } from "./translations";
// PAGES
import HomePage from "./pages/home-page/home-page";
import RatingsPage from "./pages/ratings-page/ratings-page.component";
import GameInfoPage from "./pages/game-info-page/game-info-page";
import GamesPage from "./pages/games-page/games-page";
import PlayerInfoPage from "./pages/player-info-page/player-info-page";
import PlayersPage from "./pages/players-page/players-page";
import LevelInfoPage from "./pages/level-info-page/level-info-page";
// LAYOUT
import NavigationBar from "./layouts/navigation-bar/navigation-bar";
import Footer from "./layouts/footer/footer";
// ROOT STYLES
import "./styles/App.scss";

const App: React.FC = () => {
  const [locale, setLocale] = useState<string>(LOCALES.RUSSIAN);

  return (
    <TranslationProvider locale={locale}>
      {/*passing App's state translation vars to navigation for being able to switch language from navigation across all
       Application*/}
      <NavigationBar currentLanguage={locale} setLanguage={setLocale} />
      <div className="app-content-container">
        <Switch>
          <Route exact path={"/"} component={HomePage} />
          <Route exact path={"/ratings"} component={RatingsPage} />
          <Route exact path={"/game-info/:gameCode"} component={GameInfoPage} />
          <Route exact path={"/matifygames"} component={GamesPage} />
          <Route
            exact
            path={"/player-info/:playerCode"}
            component={PlayerInfoPage}
          />
          <Route exact path={"/players"} component={PlayersPage} />
          <Route
            exact
            path={"/level-info/:levelCode"}
            component={LevelInfoPage}
          />
        </Switch>
      </div>
      <Footer />
    </TranslationProvider>
  );
};

export default App;
