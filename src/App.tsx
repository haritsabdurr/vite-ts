import { useState } from 'react';
import './styles/App.css';
import { Box } from '@chakra-ui/react';
import { Header } from './components/Header';
import { NewFeatures } from './components/Features';
import { Navigation } from './components/Navigation';
import { Team } from './components/Team';
import { CallAction } from './components/CallAction';
import { Pricing } from './components/Pricing';
import { Testimonial } from './components/Testimonial';
import { Contact } from './components/Contact';

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
      <Testimonial />
      <Box bg='#E9F9FF' h='410px'></Box>
      <Contact />
    </div>
  );
}

export default App;
