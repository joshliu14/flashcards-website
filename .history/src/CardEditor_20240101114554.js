import React from "react";
import "./CardEditor.css";

import { Link } from "react-router-dom";
class CardEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        { front: "front1", back: "back1" },
        { front: "front2", back: "back2" },
      ],
      front: "",
      back: "",
    };
  }

  addCard = () => {
    if (this.state.front.trim(" ") === "" || this.state.back.trim(" ") === "") {
      console.log("Cannot have a blank flashcard");
      this.setState({ front: "", back: "" });
      return;
    }
    const newCard = { front: this.state.front, back: this.state.back };
    const cards = this.state.cards.slice().concat(newCard);
    this.setState({ cards, front: "", back: "" });
  };

  deleteCard = (index) => {
    const cards = this.state.cards.slice();
    cards.splice(index, 1);
    this.setState({ cards });
  };

  handleEdit = (index) => {
    if (this.state.front.trim(" ") === "" || this.state.back.trim(" ") === "") {
      console.log("Cannot have a blank flashcard");
      this.setState({ front: "", back: "" });
      return;
    }
    const cards = this.state.cards.slice();
    cards.splice(index, 1, { front: this.state.front, back: this.state.back });
    this.setState({ cards });
    this.setState({ front: "", back: "" });
  };

  handleChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  switchMode = () => this.props.switchMode();

  render() {
    const cards = this.state.cards.map((card, index) => {
      return (
        <tr key={index}>
          <td>{card.front}</td>
          <td>{card.back}</td>
          <td>
            <button onClick={() => this.handleEdit(index)}>edit card</button>
          </td>
          <td>
            <button onClick={() => this.deleteCard(index)}>delete card</button>
          </td>
        </tr>
      );
    });
    return (
      <div className="editView">
        <h2>Card Editor</h2>
        <div>
          Deck Name: <input placeholder="Name of deck" />
        </div>
        <table>
          <thead>
            <tr>
              <th>Front</th>
              <th>Back</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{cards}</tbody>
        </table>
        <br />
        <input
          name="front"
          onChange={this.handleChange}
          placeholder="Front of Card"
          value={this.state.front}
        />
        <input
          name="back"
          onChange={this.handleChange}
          placeholder="Back of Card"
          value={this.state.back}
        />
        <button onClick={this.addCard}>Add Card</button>
        <hr />
        <Link className="editNav" to="/viewer">
          Go to card viewer
        </Link>
        <Link className="editNav" to="/">
          Go Home
        </Link>
      </div>
    );
  }
}

export default CardEditor;
