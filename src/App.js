import './App.css';
import ApiTester from './ApiTester';
import ConnectionContext, { defaultConnectionData } from './context/ConnectionContext';
import UserGlobalData from './context/UserContext';
import UserDisplay from './UserDisplay';

function App() {



  return (
    <div className="App">

      <UserGlobalData>
        <ConnectionContext.Provider value={defaultConnectionData} >

          <ApiTester />
          <UserDisplay />

        </ConnectionContext.Provider>
      </UserGlobalData>


      
    </div>
  );
}

export default App;
