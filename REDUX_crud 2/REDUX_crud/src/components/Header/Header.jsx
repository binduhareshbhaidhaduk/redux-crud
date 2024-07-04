  import { Link } from 'react-router-dom';


  const Header = () => (
    <header>
      <Link to='/'>Home</Link>

      <Link to='/create'>Create</Link>

      {/* <Link to='/edit'>Edit</Link> */}

    </header>
  );

  export default Header;
