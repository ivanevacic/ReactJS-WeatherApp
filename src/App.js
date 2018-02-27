import React from 'react';
//  Import Titles component
import Titles from './components/Titles';
//  Import Form component
import Form from './components/Form';
//  Import Weather component
import Weather from './components/Weather';

class App extends React.Component {
  // Returns JSX
  render(){
    return (
      <div>
        <Titles/>
        <Form/>
        <Weather/>
      </div>
    );
  }
}

//  Export component
export default App;