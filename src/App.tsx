import { useState } from 'react';
import './styles/App.css';
import { Box } from '@chakra-ui/react';
import { Header } from './components/Header';
import { NewFeatures } from './components/Features';
import { Navigation } from './components/Navigation';
import { Team } from './components/Team';
import { CallAction } from './components/CallAction';
import { Pricing } from './components/Pricing';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <Box bg='#3056D3'>
        <Navigation />
        <Header />
      </Box>
      <NewFeatures />
      <Team />
      <CallAction />
      <Pricing />
    </div>
  );
}

export default App;
