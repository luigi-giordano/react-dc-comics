import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

// HEADER
const links = [
  { href: "#characters", text: "CHARACTERS" },
  { href: "#comics", text: "COMICS" },
  { href: "#movies", text: "MOVIES" },
  { href: "#tv", text: "TV" },
  { href: "#games", text: "GAMES" },
  { href: "#collectibles", text: "COLLECTIBLES" },
  { href: "#videos", text: "VIDEOS" },
  { href: "#fans", text: "FANS" },
  { href: "#news", text: "NEWS" },
  { href: "#shop", text: "SHOP" }
];


// FOOTER
const dcComicsLinks = [
  { text: 'Characters', href: '#' },
  { text: 'Comics', href: '#' },
  { text: 'Movies', href: '#' },
  { text: 'TV', href: '#' },
  { text: 'Games', href: '#' },
  { text: 'Videos', href: '#' },
  { text: 'News', href: '#' }
];

const shopLinks = [
  { text: 'Shop DC', href: '#' },
  { text: 'Shop DC Collectibles', href: '#' }
];


const dcLinks = [
  { text: 'Terms of Use', href: '#' },
  { text: 'Privacy Policy (New)', href: '#' },
  { text: 'Ad Choices', href: '#' },
  { text: 'Advertising', href: '#' },
  { text: 'Jobs', href: '#' },
  { text: 'Subscriptions', href: '#' },
  { text: 'Talent Workshop', href: '#' },
  { text: 'CPSC Certificates', href: '#' },
  { text: 'Ratings', href: '#' },
  { text: 'Shop Help', href: '#' },
  { text: 'Contact Us', href: '#' }
];

const sitesLinks = [
  { text: 'DC', href: '#' },
  { text: 'MAD Magazine', href: '#' },
  { text: 'DC Kids', href: '#' },
  { text: 'DC Universe', href: '#' },
  { text: 'DC Power Visa', href: '#' }
];


const socialLinks = [
  { href: "#facebook", icon: "/footer-facebook.png", alt: "Facebook" },
  { href: "#twitter", icon: "/footer-twitter.png", alt: "Twitter" },
  { href: "#youtube", icon: "/footer-youtube.png", alt: "YouTube" },
  { href: "#pinterest", icon: "/footer-pinterest.png", alt: "Pinterest" },
  { href: "#instagram", icon: "/footer-periscope.png", alt: "Periscope" },
];

const App = () => {
  return (
    <>
      <Header
        links={links}
      />
      <Main />
      <Footer
        dcComicsLinks={dcComicsLinks} shopLinks={shopLinks}
        dcLinks={dcLinks}
        sitesLinks={sitesLinks} socialLinks={socialLinks}
      />
    </>
  )
}

export default App;