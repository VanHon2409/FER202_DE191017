import "bootstrap/dist/css/bootstrap.min.css"


import Header from './components/Header';
import Carousels from './components/Carousels';
import Menu from './components/Menu';
import Booking from './components/Booking';

function App() {
  return (
    <>
      <Header />
      <Carousels />
      <Menu />
      <Booking />
    </>
  );
}

export default App;
