import { CartProvider } from './context/CartContext';
import MenuPage from './pages/MenuPage/MenuPage';
import './App.css'

const App = () => {
  return (
    <CartProvider>
      <MenuPage />
    </CartProvider>
  );
};

export default App;