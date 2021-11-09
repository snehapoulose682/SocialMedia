import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import PostsPage from "./pages/PostsPage";
import PostDetailsPage from "./pages/PostDetailsPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/postsPage" component={PostsPage} />
          <Route exact path="/postDetailsPage" component={PostDetailsPage} />
          <Route exact path="/profilePage" component={ProfilePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
