import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";

function App() {
  return (
    <>
      <header>
        <h1>CV Application Creator</h1>
      </header>

      <div>
        <GeneralInfo />
        <Education />
        <Experience />
      </div>
    </>
  );
}

export default App;
