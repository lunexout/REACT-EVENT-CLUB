import './App.css';
import {Route} from 'react-router-dom'
import HomeApp from './components/HomeApp/HomeApp'
import SignInApp from './components/SignInApp/SignInApp'
import SignUpApp from './components/SignUpApp/SignUpApp'
import EventBookApp from './components/EventBookApp/EventBookApp'

function App() {
  return (
    <>
      <Route exact path="/" component={HomeApp}  />
      <Route path="/signin" exact component={SignInApp} />
      <Route path="/signup" exact component={SignUpApp} />
      <Route path="/eventbook" component={EventBookApp} />
    </>
  );
}

export default App;
