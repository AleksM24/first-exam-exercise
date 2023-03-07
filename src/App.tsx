import { Container } from "@mui/material";
import "./App.css";
import CountersList from "./components/CountersList";

function App() {
  return (
    <Container maxWidth="md">
      <CountersList />
    </Container>
  );
}

export default App;
