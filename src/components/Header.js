import { Link, NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const links = [
    {
      id: 1,
      title: 'Rockets',
      to: '/Rockets',
    },
    {
      id: 2,
      title: 'Missions',
      to: '/Missions',
    },
    {
      id: 3,
      title: 'My Profile',
      to: '/Profile',
    },
  ];

  const location = useLocation();
  return (
    <header className="header-container">
      <nav className="navbar bg-white py-4 px-5 nav-style">
        <img src="/planet.png" alt="Logo" width={50} />
        <h3 className="mt-2">
          <Link to="/" className="nav-brand">Space Travelers&apos; Hub</Link>
        </h3>

        <nav className="nav-container">
          <ul className="links-list">
            {links.length > 0
              && links.map((link) => (
                <li className={`link-item ${link.to === location.pathname ? 'link-item-active' : ''}`} key={link.id}>
                  <NavLink to={link.to}>
                    {link.title}
                  </NavLink>
                </li>
              ))}
          </ul>

        </nav>
      </nav>
    </header>
  );
};

export default Header;
