import React from 'react';

import './App.css';
import DataBeers from './components/DataBeers';
import BeersList from './components/BeersList';
/*
function RandomBeers() {

  const [name, setName] = useState();
  const [volumeValue, setVolumeValue] = useState();
  const [volumeUnit, setVolumeUnit] = useState();

  useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers/random')
      .then(results => results.json())
      .then(data => {
        setName(data[0].name);
        const { volume } = data[0];
        setVolumeValue(volume.value);
        setVolumeUnit(volume.unit);
      })
  }, []);

  return (
    <div>
      {name} : {volumeValue}, {volumeUnit}
    </div>
  )
}
*/
function App() {
  return (
    <div className="App">
      <h1>React Beers by Hoang Phung</h1>
      <BeersList />
      <DataBeers />
      {/* <RandomBeers />  */}
    </div>
  );
}

export default App;
