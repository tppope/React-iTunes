import React from 'react';
import { Route, Switch} from "react-router-dom";

// styles & assets
import './App.scss';

//components
import TheNavigation from "./components/TheNavigation";

//views
import Home from "./views/Home";
import About from "./views/About";
import Tunes from "./views/Tunes";

function App() {
  return (
    <div className="App">
        <header>
            <TheNavigation />
        </header>

        <main className="content">
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/tunes" component={Tunes}/>
                <Route path="/about" component={About}/>
            </Switch>
        </main>
    </div>
  );
}

export default App;
