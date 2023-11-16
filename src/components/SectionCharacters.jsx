import CharacterCards from "./CharacterCards";
import "../character-cards.css";

const SectionCharacters = ({ characters }) => {
  return (
    <section id="character-cards">
      <CharacterCards characterCards={characters} />
    </section>
  );
};

export default SectionCharacters;
