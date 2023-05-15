// import logo from './logo.svg';
// import './App.css';
import Demo from './Demo'
import EventHandling from './EventHandling'
import ColorChanging from './ColorChanging'
import Timer from './Timer'

const App = (props) => {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <p>
            {props.name}
          </p>
          <p>
            {props.roll}
          </p>
          <Demo value="this is from app.jsx page" />
          <Demo value="from app.jsx page" />
        </header>
      </div>
      <div>
        <EventHandling />
        <ColorChanging />
        <Timer />
      </div>
    </>
  );
}

export default App;