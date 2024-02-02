import './App.scss';
import Sidebar from './Components/Sidebar/Sidebar';
import ComponentsGroup from './Components/ComponentsGroup/ComponentsGroup';

const  App = () => {
  return (
    <div className="App">
      <Sidebar/>
      <ComponentsGroup/>
    </div>
  );
}

export default App;
