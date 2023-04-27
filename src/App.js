import { Box, Flex } from '@chakra-ui/react';
import './App.css';
import Navbar from './Components/Navbar';
import Offer from './Components/Offer';
import Teacher from './Components/Teacher';
import Welcome from './Components/Welcome';
import Footer from './Components/Footer';

function App() {
  return (
    <Box >
     <Navbar/>
     <Welcome/>
     <Offer/>
     <Teacher/>
     <Footer/>
     </Box>
    
  );
}

export default App;