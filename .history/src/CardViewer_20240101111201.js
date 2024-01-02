import React from "react";
import "./CardViewer.css";

import { Link, withRouter } from "react-router-dom";
import { firebaseConnect, isLoaded } from "react-redux-firebase";
import { connect } from "react-redux";
import { compose } from "redux";

class CardViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currCard: 0,
      front: true,
    };
  }
  switchMode = () => this.props.switchMode();

  flipCard = () => this.setState({ front: !this.state.front });

  goNext = () => {
    if (this.state.currCard < this.props.cards.length - 1) {
      this.setState({ currCard: this.state.currCard + 1 });
      this.setState({ front: true });
    }
  };

  goPrev = () => {
    if (this.state.currCard > 0) {
      this.setState({ currCard: this.state.currCard - 1 });
      this.setState({ front: true });
    }
  };

  render() {
    if (!isLoaded(this.props.cards)) {
      return <div>Loading...</div>;
    }

    const card =
      this.props.cards[this.state.currCard][
        this.state.front ? "front" : "back"
      ];

    return (
      <div className="cardView">
        <h2>{this.props.name}</h2>
        <p>
          Card {this.state.currCard + 1}/{this.props.cards.length}
        </p>
        <button className="flash-card" onClick={this.flipCard}>
          {card}
        </button>
        <div>
          <button onClick={this.goPrev}>prev</button>
          <button onClick={this.goNext}>next</button>
          <hr />
          <Link className="viewNav" to="/editor">
            Go to card editor
          </Link>
          <Link className="viewNav" to="/">
            {" "}
            Go Home
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  const deck = state.firebase.data.deck2;
  const name = deck && deck.name;
  const cards = deck && deck.cards;
  return { cards: cards, name: name };
};
export default compose(
  withRouter,
  firebaseConnect((props) => {
    return [{ path: "/flashcards/deck2", storeAs: "deck2" }];
  }),
  connect(mapStateToProps)
)(CardViewer);
