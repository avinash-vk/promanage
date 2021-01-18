import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import ROUTES from "./routes";

//components
import SignedInLayout from "./layout/SignedInLayout";

// Pages
import Dashboard from "./pages/Dashboard";
import CreateProject from "./pages/CreateProject";
import Project from "./pages/Project";
import Settings from "./pages/Settings";
import Info from "./pages/Info";
import Profile from "./pages/Profile";

function App() {
  let routes = (
    <Switch>
      <Route exact path={ROUTES.dashboard} component={Dashboard} />
      <Route exact path={ROUTES.createProject} component={CreateProject} />
      <Route exact path={ROUTES.project} component={Project} />
      <Route exact path={ROUTES.profile} component={Profile} />
      <Route exact path={ROUTES.settings} component={Settings} />
      <Route exact path={ROUTES.info} component={Info} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <BrowserRouter>
      <SignedInLayout >
        {routes}
      </SignedInLayout>
    </BrowserRouter>
  );
}

export default App;
