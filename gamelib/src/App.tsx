import './App.css';
import GameCard from './components/GameCard';
import * as gamesData from './data/gamesData.json';
import GameCardProps from './interface/GameCardProps';

function App() {
  const games = gamesData.games;

  return (
    <>
      <div>
        <h1>Welcome To GameLib</h1>
      </div>
      <h1>Vite + React</h1>

      <div className='gameCardContainer'>
      {games.map((gameData, index) => (
          <GameCard
            key={index} // You should include a unique key for each element in the array when using map
            title={gameData.title}
            description={gameData.description}
            image={gameData.image}
            link={gameData.link} // Make sure 'link' is present in your JSON data or handle it appropriately if it's optional
          />
        ))}

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
