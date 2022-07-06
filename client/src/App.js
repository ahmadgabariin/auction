import "./App.css";
import Container from "./components/Container/Container";
import { CookiesProvider } from "react-cookie";
function App() {
  return (
    <div>
      <CookiesProvider>
        <Container />
      </CookiesProvider>
    </div>
  );
}

export default App;
