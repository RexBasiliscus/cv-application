import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";

function App() {
  return (
    <>
      <header>
        <h1>CV Application Creator</h1>
      </header>

      <div>
        <GeneralInfo />
        <Education />
      </div>
    </>
  );
}

export default App;
