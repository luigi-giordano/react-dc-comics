const Header = (prop) => {

  // Array di link con nome e URL
  const { links } = prop;

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <img src="/dc-logo.png" alt="DC Logo" />
        </div>
        <ul>
          {links.map((link, index) => (
            <li key={`link-${index}`} >
              <a href={link.href}>{link.text}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
