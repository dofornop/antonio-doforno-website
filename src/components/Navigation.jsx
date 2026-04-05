import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navigation.css';

const navGroups = [
  {
    label: 'His Life',
    links: [
      { to: '/story',    label: 'His Story' },
      { to: '/timeline', label: 'Timeline' },
      { to: '/roots',    label: 'Roots & Origins' },
    ]
  },
  {
    label: 'His Work',
    links: [
      { to: '/legacy',        label: 'Legacy' },
      { to: '/awards',        label: 'Awards' },
      { to: '/travel-agency', label: 'Travel Agency' },
    ]
  },
  {
    label: 'Community',
    links: [
      { to: '/community', label: 'Community' },
      { to: '/faith',     label: 'Faith' },
      { to: '/tributes',  label: 'Tributes' },
      { to: '/press',     label: 'Press & Media' },
    ]
  },
  {
    label: 'Family',
    links: [
      { to: '/family',   label: 'Family' },
      { to: '/gallery',  label: 'Gallery' },
      { to: '/memories', label: 'Memories' },
      { to: '/videos',   label: 'Videos' },
    ]
  },
];

export default function Navigation() {
  const [scrolled, setScrolled]       = useState(false);
  const [menuOpen, setMenuOpen]       = useState(false);
  const [openGroup, setOpenGroup]     = useState(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setOpenGroup(null);
    window.scrollTo(0, 0);
  }, [location]);

  const isGroupActive = (group) =>
    group.links.some(link => location.pathname === link.to);

  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="nav__inner">

        {/* Brand */}
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

        {/* Desktop grouped nav */}
        <ul className="nav__groups">
          {navGroups.map(group => (
            <li key={group.label} className="nav__group">
              <button
                className={`nav__group-label${isGroupActive(group) ? ' nav__group-label--active' : ''}`}
                aria-haspopup="true"
              >
                {group.label}
                <span className="nav__chevron">▾</span>
              </button>
              <ul className="nav__dropdown">
                {group.links.map(link => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        `nav__dropdown-link${isActive ? ' nav__dropdown-link--active' : ''}`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
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
        {navGroups.map(group => (
          <div key={group.label} className="nav__mobile-group">
            <button
              className={`nav__mobile-group-label${openGroup === group.label ? ' nav__mobile-group-label--open' : ''}`}
              onClick={() => setOpenGroup(openGroup === group.label ? null : group.label)}
            >
              {group.label}
              <span className="nav__mobile-chevron">▾</span>
            </button>
            {openGroup === group.label && (
              <div className="nav__mobile-links">
                {group.links.map(link => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      `nav__mobile-link${isActive ? ' nav__mobile-link--active' : ''}`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
