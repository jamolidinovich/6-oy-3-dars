import "./App.css";
import Card from "./components/Card";
import data from "./data/data.json";
import Books from "./components/Books";

function App() {
  function handilClick() {
    <Books books={data} />;
    return console.log(data);
  }
  return (
    <>
      <div class="circle"></div>
      <button class="button" onClick={handilClick}>
        Button
      </button>
      {/* <Books books={data} /> */}
    </>
  );
}

export default App;
