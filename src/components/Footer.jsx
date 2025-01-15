const Footer = (prop) => {
  const { dcComicsLinks, shopLinks, dcLinks, sitesLinks, socialLinks } = prop;

  return (
    <footer>
      <div className="footer-links">
        <div>
          <h4>DC COMICS</h4>
          <ul>
            {dcComicsLinks.map((link, index) => (
              <li key={`dcComics-${index}`}>{link.text}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>SHOP</h4>
          <ul>
            {shopLinks.map((link, index) => (
              <li key={`shop-${index}`}>{link.text}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>DC</h4>
          <ul>
            {dcLinks.map((link, index) => (
              <li key={`dc-${index}`}>{link.text}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>SITES</h4>
          <ul>
            {sitesLinks.map((link, index) => (
              <li key={`sites-${index}`}>{link.text}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-logo">
        <img src="/dc-logo-bg.png" alt="DC Logo" />
      </div>
      <div className="footer-social">
        <button className="sign-up">SIGN-UP NOW!</button>
        <p>FOLLOW US</p>
      </div>
      <div className="social-icons">
        <ul>
          {socialLinks.map((link, index) => (
            <li key={`social-${index}`}>
              <a href={link.href}>
                <img src={link.icon} alt={link.alt} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
