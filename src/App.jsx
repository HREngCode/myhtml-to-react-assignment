import Header from "./components/Header";
import SectionRatings from "./components/SectionRatings";
import SectionCharacters from "./components/SectionCharacters";
import { characters } from "./constants/characters";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <SectionRatings characters={characters} />
      <SectionCharacters characters={characters} />
    </>
  );
}

export default App;
