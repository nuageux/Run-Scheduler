import './App.css'

import Scheduler from './components/scheduler'
import Week from './components/week'
import Day from './components/day'

function App() {
  return (
    <div className="App">
      <h1>Run Schedule Tool</h1>
      <Scheduler />
      <footer>
        <p>made by Andrew Uhm with React.js</p>
        <p>contact me at <a href="mailto:uhmjiwoon@gmail.com">uhmjiwoon@gmail.com</a></p>
      </footer>
    </div>
  );
}

export default App;
