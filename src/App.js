import Hero from './components/Hero';
import './App.css';

function App() {
  const myName = ''
  return (
    <div className="App">
      <header className="App-header">
        <Hero />
        {myName
        ? <p>welcome back.</p>
      :<button>Login</button>}
       <p>Hello {myName || 'guest'}</p>
      </header>
    </div>
  );
}

export default App;
