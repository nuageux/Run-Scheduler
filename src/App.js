import './App.css'

import Scheduler from './components/scheduler'
import Week from './components/week'
import Day from './components/day'

function App() {
  return (
    <div className="App">
      <h1>Run Schedule Tool</h1>
      <Scheduler />
      <p><strong>+</strong> add another week</p>
    </div>
  );
}

export default App;
