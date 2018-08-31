import React from 'react';
import Weather from "./Weather";
import Form from "./Form";
import Titles from "./Titles";

class App extends React.Component{
   render(){
    return(
      <div class="everything">
        <Titles />
        <Form />
        <Weather />
      </div>
   )
  }
}


export default App;
