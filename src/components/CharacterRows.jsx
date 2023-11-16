function CharacterRow({ character, isSecond }) {
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
}

export default CharacterRow;
