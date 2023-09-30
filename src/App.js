import './App.css';
import ApiTester from './ApiTester';
import ConnectionContext, { defaultConnectionData } from './context/ConnectionContext';
import UserGlobalData from './context/UserContext';

function App() {



  return (
    <div className="App">

      <UserGlobalData>
        <ConnectionContext.Provider value={defaultConnectionData} >

          <ApiTester />

        </ConnectionContext.Provider>
      </UserGlobalData>


      
    </div>
  );
}

export default App;
