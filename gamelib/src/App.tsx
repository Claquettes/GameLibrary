import './App.css'

//we import all of the components
import GameCard from './components/GameCard';


function App() {

  return (
    <>
      <div>
      <h1>Welcome To GameLib</h1>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <GameCard title="Game Title" description="Game Description" image="https://via.placeholder.com/150" link="https://via.placeholder.com/150" />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
