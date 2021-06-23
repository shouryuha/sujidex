import logo from './logo.svg';
import './App.css';
import SujiList from './components/sujiList'
import SujiDetail from './components/sujiDetail'
import sujimon from './assets/sujimon.json';

function App() {
  const jsonSujimon = sujimon.sujimon
  console.log(jsonSujimon)
  return (
    <div className="container">
      <header className="App-header">
        <h1>SujiDex</h1>
      </header>
      <div className="row">
      
      <p>{jsonSujimon.map(item => item.name)}</p>
      {/* <SujiList />
      <SujiDetail /> */}
      </div>
   
    </div>
  );
}

export default App;
