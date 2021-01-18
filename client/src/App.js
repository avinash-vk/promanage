import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import ROUTES from "./routes";

// Pages
import Dashboard from "./pages/Dashboard";
import CreateProject from "./pages/CreateProject";
import Project from "./pages/Project";
import SignedInLayout from "./layout/SignedInLayout";

function App() {
  let routes = (
    <Switch>
      <Route exact path={ROUTES.dashboard} component={Dashboard} />
      <Route exact path={ROUTES.createProject} component={CreateProject} />
      <Route exact path={ROUTES.project} component={Project} />
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
