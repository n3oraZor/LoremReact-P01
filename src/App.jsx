import "./App.css";
import TitleLorem from "./components/titleLorem";
import TextLorem from "./components/textLorem";

function App() {
  return (
    <>
      <div className="container-global">
        <div className="container">
          <TitleLorem name="Lorem" />
          <TextLorem text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima officia, pariatur numquam eos praesentium quia modi vitae sapiente qui consequuntur magni cupiditate molestiae. Laboriosam, dolore eveniet totam qui ipsum eligendi?" />
        </div>

        <div className="container">
          <TitleLorem name="Lorem" />
          <TextLorem text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima officia, pariatur numquam eos praesentium quia modi vitae sapiente qui consequuntur magni cupiditate molestiae. Laboriosam, dolore eveniet totam qui ipsum eligendi?" />
        </div>
      </div>
    </>
  );
}

export default App;
