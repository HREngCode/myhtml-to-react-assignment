export function CharacterCardFunction({ characters }) {
  const topCharacters = characters.map((character, characterIndex) => {
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
