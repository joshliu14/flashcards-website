import React from "react";
import CardEditor from "./CardEditor";
import CardViewer from "./CardViewer";
import Home from "./Home";
import Test from "./Test";

import { Routes, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        { front: "front1", back: "back1" },
        { front: "front2", back: "back2" },
      ],
    };
  }

  addCard = (card) => {
    const cards = this.state.cards.slice().concat(card);
    this.setState({ cards });
  };

  deleteCard = (index) => {
    const cards = this.state.cards.slice();
    cards.splice(index, 1);
    this.setState({ cards });
  };

  handleEdit = (index, card) => {
    const cards = this.state.cards.slice();
    cards.splice(index, 1, card);
    this.setState({ cards });
  };

  render() {
    return (
      <Routes>
        <Route path="/">
          <Home />
        <Route path="/editor">
          <CardEditor
            addCard={this.addCard}
            handleEdit={this.handleEdit}
            cards={this.state.cards}
            deleteCard={this.deleteCard}
          />
        <Route path="/viewer">
          <CardViewer cards={this.state.cards} />
        <Route path="/test/:id" element={<Test />}>
          <Test />
      </Routes>
    );
  }
}

export default App;
