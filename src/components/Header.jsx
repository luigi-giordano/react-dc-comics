const Header = (prop) => {

  const { links } = prop;

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <img src="/dc-logo.png" alt="DC Logo" />
        </div>
        <ul>
          {links.map((link, index) => (
            <li key={`nav-${index}`} >
              <a href={link.href}>{link.text}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
