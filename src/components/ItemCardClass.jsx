import { Component } from "react";

export class ItemCardClass extends Component {
  render() {
    const { cards } = this.props;
    const itemDetail = cards.map((card) => {
      return (
        <div className="card" key={card.name}>
          <div className="card-titles">
            <h3>{card.name}</h3>
            <h4>{card.nickname}</h4>
          </div>
          <img src={card.image} alt="" />
          <p>{card.details}</p>
        </div>
      );
    });

    return <>{itemDetail}</>;
  }
}
