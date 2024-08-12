import "./App.css";
import ClockHeading from "./components/ClockHeading";
import ClockSlogan from "./components/clockSlogen";
import CurrentTime from "./components/currentTime";

function App() {
  return (
    <center>
      <ClockHeading />
      <ClockSlogan />
      <CurrentTime />
    </center>
  );
}

export default App;
