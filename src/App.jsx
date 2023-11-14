import Header from "./components/Header";
import SectionRatings from "./components/SectionRatings";
import SectionCharacters from "./components/SectionCharacters";
import { DATA } from "./constants/data";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <SectionRatings characters={DATA} />
      <SectionCharacters characters={DATA} />
    </>
  );
}

export default App;
