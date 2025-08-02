import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/lodo 2.png';
import down from '../../assets/down.png';
import menu from '../../assets/menu.png';

const villages = [
  { name: 'ВОЛОДИМИРІВСЬКЕ', slug: 'volodymyrivske' },
  { name: 'ДНІПРЕЛЬСТАН',    slug: 'dniprelstan'    },
  { name: 'СОНЯЧНЕ',         slug: 'sonyachne'      },
];

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // Определяем текущий slug (без префикса)
  const currentSlug = pathname.slice(1).toLowerCase();
  const currentVillage = villages.find(v => v.slug === currentSlug);
  const headerLabel = currentVillage ? currentVillage.name : 'ШИРОКІВСЬКА ГРОМАДА';

  const toggleDropdown = () => setDropdownOpen(o => !o);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(o => !o);
    document.body.style.overflow = mobileMenuOpen ? 'auto' : 'hidden';
  };

  const handleSelectVillage = (slug) => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
    navigate(`/${slug}`);    // навигация без префикса "village"
  };

  useEffect(() => {
    const handleClickOutside = e => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <header className="Header">
      <div className="Container">
        <div className="Header__Left">
          <img className="Header__Logo" src={logo} alt="logo" />
          <div className="Header__SelectorWrapper" ref={dropdownRef}>
            <div className="Header__Selected" onClick={toggleDropdown}>
              {headerLabel}
              <img src={down} alt="arrow" className="Header__Arrow" />
            </div>
            {dropdownOpen && (
              <div className="Header__Dropdown">
                {villages.map(v => (
                  <div
                    key={v.slug}
                    className="Header__DropdownItem"
                    onClick={() => handleSelectVillage(v.slug)}
                  >
                    {v.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="Header__Right">
          <ul className="Header__List">
            <li className="Header__Item"><a href="https://shtg.gov.ua/">Сайт громад</a></li>
            <li className="Header__Item">Новини</li>
            <li className="Header__Item">Ринок</li>
            <li className="Header__Item">Послуги</li>
            <li className="Header__Item">Підтримка</li>
          </ul>
          <button className="Header__Button">Увійти</button>
          <img className="Header__Menu" src={menu} alt="menu" onClick={toggleMobileMenu} />
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="MobileMenu" onClick={e => e.target.classList.contains('MobileMenu') && toggleMobileMenu()}>
          <div className="MobileMenu__Content">
            <button className="MobileMenu__Close" onClick={e => { e.stopPropagation(); toggleMobileMenu(); }}>✕</button>
            <ul className="MobileMenu__List">
              <li className="MobileMenu__Item"><a href="https://shtg.gov.ua/">Сайт громад</a></li>
              <li className="MobileMenu__Item">Новини</li>
              <li className="MobileMenu__Item">Ринок</li>
              <li className="MobileMenu__Item">Послуги</li>
              <li className="MobileMenu__Item">Підтримка</li>
              <li className="MobileMenu__Item">
                {dropdownOpen && (
                  <div className="Header__Dropdown MobileDropdown">
                    {villages.map(v => (
                      <div
                        key={v.slug}
                        className="Header__DropdownItem"
                        onClick={() => handleSelectVillage(v.slug)}
                      >
                        {v.name}
                      </div>
                    ))}
                  </div>
                )}
              </li>
              <li className="MobileMenu__Item">
                <button className="MobileMenu__Login">Увійти</button>
                <div className="MobileMenu__Register">Реєстрація</div>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;