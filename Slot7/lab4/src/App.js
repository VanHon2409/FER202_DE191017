import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import NavBar from './components/NavBar';
import Quantity from './components/Quantity';
import OrderModal from './components/OrderModal';
import ProductForm from './components/ProductForm';
import TodoList from './components/TodoList';
import Quantity2 from './components/Quantity2';
import OrderModal2 from './components/OrderModal2';
import ProductForm2 from './components/ProductForm2';
import TodoList2 from './components/TodoList2';
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Navigate to="/ex1" />} />
            <Route path="/ex1" element={<Quantity2 />} />
            <Route path="/ex2" element={<OrderModal2 />} />
            <Route path="/ex3" element={<ProductForm2 />} />
            <Route path="/ex4" element={<TodoList2 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;