import { Component } from "react";

class CharacterCards extends Component {
  render() {
    const { characterCards } = this.props;
    return characterCards.map((characterCard) => {
      return (
        <div className="card" key={characterCard.name}>
          <div className="card-titles">
            <h3>{characterCard.name}</h3>
            <h4>{characterCard.nickName}</h4>
          </div>
          <img src={characterCard.imageUrl} alt="" />
          <p>{characterCard.background}</p>
        </div>
      );
    });
  }
}

export default CharacterCards;
