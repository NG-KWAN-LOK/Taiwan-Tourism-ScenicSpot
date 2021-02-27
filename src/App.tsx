import { Route, Switch, Redirect } from "react-router-dom";

import styles from "./style.module.scss";

import NavBar from "./components/NavBar";
import ScenicSpot from "./containers/ScenicSpot";
import ScenicSpotCity from "./containers/ScenicSpotCity";

function App() {
  return (
    <div className={styles.container}>
      <NavBar />
      <Switch>
        <Route exact path="/scenicSpot">
          <ScenicSpot />
        </Route>
        <Route path="/scenicSpot/:cityName">
          <ScenicSpotCity />
        </Route>
        <Route path="/">
          <Redirect to="/scenicSpot" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
