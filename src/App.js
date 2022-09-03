
import  './App.scss'
import { useData } from './context/use-data';
import Admin from './pages/admin';


function App() {
  const {mode} = useData()

  return (
      <div className={"App " + mode }>
        <Admin></Admin>
      </div>
  );
}

export default App;
