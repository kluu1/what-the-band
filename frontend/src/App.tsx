import './App.css';
import Header from './components/Header';
import Jokes from './components/Jokes';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Header />
        <Jokes />
      </header>
    </div>
  );
}

export default App;
