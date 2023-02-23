
import './App.css';
import NavBar from './componets/NavBar'; 
import Content from './componets/content';
import { data, dataNavBar } from './componets/data';
function App() {
  return (
    <div className="App">
     <NavBar dataNavBar={dataNavBar} />
     <Content data={data} />
     </div>
    
  );
}

export default App;
