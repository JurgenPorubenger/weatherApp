import React from 'react';
import './App.css';
import { WeatherDisplay } from './weatherDisplay';

const PLACES = [
  { name: 'Palo Alto', zip: '94303' },
  { name: 'San Jose', zip: '94088' },
  { name: 'Santa Cruz', zip: '95062' },
  { name: 'Honolulu', zip: '96803' },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activePlace: 0,
    };
  }

  // eslint-disable-next-line react/require-render-return
  render() {
    const { activePlace } = this.state;
    return (
      <div className="App">
        {PLACES.map((place, index) => (
          <button
            key={index}
            onClick={() => {
              this.setState({ activePlace: index });
            }}
          >
            {place.name}
          </button>
        ))}
        <WeatherDisplay
          key={activePlace}
          zip={PLACES[activePlace].zip}
        />
      </div>
    );
  }
}


export default App;
