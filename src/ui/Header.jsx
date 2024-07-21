import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';

function Header() {
  return (
    <header className="bg-yellow-500">
      <Link to="/">Pizza Co.</Link>

      <SearchOrder />

      <p>Lilan</p>
    </header>
  );
}

export default Header;
