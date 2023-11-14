import { Component } from "react";

class ItemCardClass extends Component {
  render() {
    const { cards } = this.props;
    const itemDetail = cards.map((card) => {
      return (
        <div className="card" key={card.name}>
          <div className="card-titles">
            <h3>{card.name}</h3>
            <h4>{card.nickName}</h4>
          </div>
          <img src={card.imageUrl} alt="" />
          <p>{card.background}</p>
        </div>
      );
    });

    return <>{itemDetail}</>;
  }
}

export default ItemCardClass;
