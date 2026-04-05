import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navigation.css';

const navLinks = [
  { to: '/',        label: 'Home' },
  { to: '/story',   label: 'His Story' },
  { to: '/timeline',label: 'Timeline' },
  { to: '/legacy',  label: 'Legacy' },
  { to: '/awards',  label: 'Awards' },
  { to: '/family',  label: 'Family' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/memories',label: 'Memories' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <NavLink to="/" className="nav__brand">
          <img
            src={`${process.env.PUBLIC_URL}/images/img_01.jpg`}
            alt="António do Forno"
            className="nav__brand-photo"
          />
          <span className="nav__brand-text">
            <span className="nav__brand-name">António do Forno</span>
            <span className="nav__brand-dates">1935 – 2025</span>
          </span>
        </NavLink>

        {/* Desktop links */}
        <ul className="nav__links">
          {navLinks.map(link => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `nav__link${isActive ? ' nav__link--active' : ''}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className={`nav__burger${menuOpen ? ' nav__burger--open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`nav__mobile${menuOpen ? ' nav__mobile--open' : ''}`}>
        {navLinks.map(link => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            className={({ isActive }) =>
              `nav__mobile-link${isActive ? ' nav__mobile-link--active' : ''}`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
