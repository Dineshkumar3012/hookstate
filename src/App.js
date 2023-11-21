import State from './State'
import './App.css';
import Object from './object';

function App() {
  const employee=[

    {
    name:"Alex",
    skills:[
    {name:"ReactJS", type:"Frontend"},
    {name:"nodeJS", type:"Backend"}
    ]
    
    },
    {
    name:"Anna",
    skills:[
    {name:"Angular", type:"Frontend"},
    {name:"Python", type:"Backend"}
    ]
    
    }
    
    
    ]
  
  return (
    <div className="App">
      <State/>
      <Object res = {employee}/>
    </div>
  );
}

export default App;
