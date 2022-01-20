import './App.css';

import AppBar from './components/AppBar';
import Container from './components/Container';
import Searchbar from './components/Searchbar';

export default function App() {
  return (
    <Container>
      <AppBar />
      <Searchbar />
    </Container>
  );
}
