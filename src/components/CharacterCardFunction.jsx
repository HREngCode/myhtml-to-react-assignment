function CharacterCardFunction({ characters }) {
  const sorted = [...characters].sort((a, b) => b.votes - a.votes).slice(0, 5);

  return sorted.map((character, characterIndex) => {
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
}

export default CharacterCardFunction;
