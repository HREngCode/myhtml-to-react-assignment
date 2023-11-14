import { useEffect, useState } from "react";

function CharacterCardFunction({ characters }) {
  const [sortedCharacters, setSortedCharacters] = useState([]);

  useEffect(() => {
    const sorted = [...characters].sort((a, b) => b.votes - a.votes);
    const top5 = sorted.slice(0, 5);
    setSortedCharacters(top5);
  }, [characters]);

  const topCharacters = sortedCharacters.map((character, characterIndex) => {
    const adjustedIndex = characterIndex + 1;
    const isSecond = adjustedIndex % 2 === 0;
    return (
      <tr
        className={`character ${isSecond ? "light" : "dark"}`}
        key={character.name}
      >
        <td>{character.name}</td>
        <td>{character.skillset}</td>
        <td>{character.votes}</td>
      </tr>
    );
  });
  return <>{topCharacters}</>;
}

export default CharacterCardFunction;
