import "./App.css";
import Container from "./components/Container/Container";
import {io} from 'socket.io-client'


function App() {
  const socket = io.connect('http://localhost:3001')
  return (
    <div >
      <Container />
    </div>
  );
}


export default App;
