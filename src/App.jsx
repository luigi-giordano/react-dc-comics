import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

// // LINKS HEADER
// const links = [
//   { href: "#characters", text: "characters" },
//   { href: "#comics", text: "comics" },
//   { href: "#movies", text: "Movies" },
//   { href: "#tv", text: "tv" },
//   { href: "#games", text: "games" },
//   { href: "#collectibles", text: "collectibles" },
//   { href: "#videos", text: "videos" },
//   { href: "#fans", text: "fans" },
//   { href: "#news", text: "news" },
//   { href: "#shop", text: "shop" }
// ];

// // LINKS FOOTER
// const dcComicsLinks = [
//   { text: 'Characters', href: '#' },
//   { text: 'Comics', href: '#' },
//   { text: 'Movies', href: '#' },
//   { text: 'TV', href: '#' },
//   { text: 'Games', href: '#' },
//   { text: 'Videos', href: '#' },
//   { text: 'News', href: '#' }
// ];

// const shopLinks = [
//   { text: 'Shop DC', href: '#' },
//   { text: 'Shop DC Collectibles', href: '#' }
// ];


// const dcLinks = [
//   { text: 'Terms of Use', href: '#' },
//   { text: 'Privacy Policy (New)', href: '#' },
//   { text: 'Ad Choices', href: '#' },
//   { text: 'Advertising', href: '#' },
//   { text: 'Jobs', href: '#' },
//   { text: 'Subscriptions', href: '#' },
//   { text: 'Talent Workshop', href: '#' },
//   { text: 'CPSC Certificates', href: '#' },
//   { text: 'Ratings', href: '#' },
//   { text: 'Shop Help', href: '#' },
//   { text: 'Contact Us', href: '#' }
// ];

// const sitesLinks = [
//   { text: 'DC', href: '#' },
//   { text: 'MAD Magazine', href: '#' },
//   { text: 'DC Kids', href: '#' },
//   { text: 'DC Universe', href: '#' },
//   { text: 'DC Power Visa', href: '#' }
// ];

// const socialLinks = [
//   { href: "#", imgSrc: "/footer-facebook.png", alt: "Facebook Icon" },
//   { href: "#", imgSrc: "/footer-twitter.png", alt: "Twitter Icon" },
//   { href: "#", imgSrc: "/footer-youtube.png", alt: "Youtube Icon" },
//   { href: "#", imgSrc: "/footer-pinterest.png", alt: "Pinterest Icon" },
//   { href: "#", imgSrc: "/footer-periscope.png", alt: "Periscope Icon" }
// ];

const App = () => {
  return (
    <>
      <Header
      // links={links} 
      />
      <Main />
      <Footer
      // dcComicsLinks={dcComicsLinks} shopLinks={shopLinks}
      // dcLinks={dcLinks}
      // sitesLinks={sitesLinks} socialLinks={socialLinks} 
      />
    </>
  )
}

export default App;