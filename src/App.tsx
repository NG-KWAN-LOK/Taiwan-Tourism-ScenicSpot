import { Route, Switch, Redirect } from "react-router-dom";

import ScenicSpot from "./containers/ScenicSpot";
import ScenicSpotCity from "./containers/ScenicSpotCity";

function App() {
  return (
    <div>
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
