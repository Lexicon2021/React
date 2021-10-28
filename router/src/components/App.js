import { Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import ErrorPage from './ErrorPage';
import AboutPage from './About';


function App() {
  return (
    <div>
      <nav>
      <nav>
          <Link to="/" className="link">Home</Link>
          <Link to="/about" className="link">About</Link>
        </nav>
      </nav>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={AboutPage} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
