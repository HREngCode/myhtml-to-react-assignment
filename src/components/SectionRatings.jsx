import CharacterRow from "./CharacterRows";
import "../character-ratings.css";

const SectionRatings = ({ characters }) => {
  const sorted = [...characters].sort((a, b) => b.votes - a.votes).slice(0, 5);
  return (
    <section id="character-ratings">
      <h4>Top Characters</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Skillset</th>
            <th>Votes</th>
          </tr>
        </thead>

        <tbody>
          {sorted.map((character, i) => (
            <CharacterRow
              character={character}
              isSecond={i % 2 === 0}
              key={character.id}
            />
          ))}
          {/* <CharacterRow characters={characters} /> */}
        </tbody>
      </table>
    </section>
  );
};

export default SectionRatings;
