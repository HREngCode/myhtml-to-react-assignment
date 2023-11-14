import ItemCardClass from "./ItemCardClass";
import "../character-cards.css";

const SectionCharacters = ({ characters }) => {
  return (
    <section id="character-cards">
      <ItemCardClass cards={characters} />
    </section>
  );
};

export default SectionCharacters;
