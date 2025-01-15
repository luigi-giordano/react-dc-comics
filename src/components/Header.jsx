const Header = () => {
  // Array di link con nome e URL
  const links = [
    { href: "#characters", text: "characters" },
    { href: "#comics", text: "comics" },
    { href: "#movies", text: "Movies" },
    { href: "#tv", text: "tv" },
    { href: "#games", text: "games" },
    { href: "#collectibles", text: "collectibles" },
    { href: "#videos", text: "videos" },
    { href: "#fans", text: "fans" },
    { href: "#news", text: "news" },
    { href: "#shop", text: "shop" }
  ];

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <img src="/dc-logo.png" alt="DC Logo" />
        </div>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.text}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
