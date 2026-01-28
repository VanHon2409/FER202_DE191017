import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import NavBar from './components/NavBar';
import Quantity from './components/Quantity';
import OrderModal from './components/OrderModal';
import ProductForm from './components/ProductForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Navigate to="/ex1" />} />
            <Route path="/ex1" element={<Quantity />} />
            <Route path="/ex2" element={<OrderModal />} />
            <Route path="/ex3" element={<ProductForm />} />
            <Route path="/ex4" element={<TodoList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;