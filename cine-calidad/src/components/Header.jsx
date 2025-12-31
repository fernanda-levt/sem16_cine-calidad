const Header = () => {
  return (
    <header className="header">
      <a href="/">
        <img
          src="https://cinelatino.com/wp-content/uploads/sites/2/2025/04/Logo_CL_light.png"
          alt="Cine Latino Logo"
          className="logo"
        />
      </a>

      <div className="search-box">
        <input type="text" placeholder="Buscar película..." />
        <button>Buscar</button>
      </div>
    </header>
  );
};
export default Header;
