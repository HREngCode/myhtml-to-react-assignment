import CharacterCardFunction from "./CharacterCardFunction";
import "../character-ratings.css";

const SectionRatings = ({ characters }) => {
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
          <CharacterCardFunction characters={characters} />
        </tbody>
      </table>
    </section>
  );
};

export default SectionRatings;
