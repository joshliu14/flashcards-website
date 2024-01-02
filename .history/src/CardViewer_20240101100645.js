import React from "react";
import "./CardViewer.css";

import { Link } from "react-router-dom";
import { firebaseConnect } from "react-redux-firebase";
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
    const card =
      this.props.cards[this.state.currCard][
        this.state.front ? "front" : "back"
      ];

    return (
      <div className="cardView">
        <h2>Card Viewer</h2>
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
  const deck = state.firebase.data.deck1;
  const name = deck.name;
  const cards = deck.cards;
  return {};
};
export default compose(
  firebaseConnect([{ path: "/flashcards/deck1", storeAs: "deck1" }]),
  connect(mapStateToProps)
)(CardViewer);
