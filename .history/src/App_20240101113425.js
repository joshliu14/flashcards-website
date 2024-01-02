import React from "react";
import CardEditor from "./CardEditor";
import CardViewer from "./CardViewer";
import Home from "./Home";

import { Switch, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleEdit = (index, card) => {
    const cards = this.state.cards.slice();
    cards.splice(index, 1, card);
    this.setState({ cards });
  };

  render() {
    return (
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/editor">
          <CardEditor handleEdit={this.handleEdit} />
        </Route>
        <Route exact path="/viewer/:deckId">
          <CardViewer />
        </Route>
        <Route>
          <div>Page not found!</div>
        </Route>
      </Switch>
    );
  }
}

export default App;
