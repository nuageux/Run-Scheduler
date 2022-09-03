import './App.css'

import Scheduler from './components/scheduler'
import Week from './components/week'
import Day from './components/day'

function App() {
  return (
    <div className="App">
      <h1>Run Schedule Tool</h1>
      <Scheduler />
    </div>
  );
}

export default App;
