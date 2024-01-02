import React from "react";
import "./CardEditor.css";

import { Link } from "react-router-dom";
class CardEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.props.addCard(this.state);
    this.setState({ front: "", back: "" });
  };

  deleteCard = (index) => this.props.deleteCard(index);

  handleEdit = (index) => {
    if (this.state.front.trim(" ") === "" || this.state.back.trim(" ") === "") {
      console.log("Cannot have a blank flashcard");
      this.setState({ front: "", back: "" });
      return;
    }
    this.props.handleEdit(index, this.state);
    this.setState({ front: "", back: "" });
  };

  handleChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  switchMode = () => this.props.switchMode();

  render() {
    const cards = this.props.cards.map((card, index) => {
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