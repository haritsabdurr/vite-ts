import { useState } from 'react';
import './styles/App.css';
import { Box } from '@chakra-ui/react';
import { Header } from './components/Header';
import { Pricing } from './components/Pricing';
import { NewFeatures } from './components/Features';
import { About } from './components/About';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <Box bg='#6B46C1'>
        <About />
        <Header />
      </Box>
      <Pricing />
      <NewFeatures />
    </div>
  );
}

export default App;
