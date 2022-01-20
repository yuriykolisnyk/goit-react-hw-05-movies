import './App.css';

import Navigation from './components/Navigation';
import Container from './components/Container';
import Searchbar from './components/Searchbar';

export default function App() {
  return (
    <Container>
      <Navigation />
      <Searchbar />
    </Container>
  );
}
