import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import logoSVG from 'logo.svg';

import { StyledMenuItem, StyledMenuWrapper } from './styled';

import styles from './styles.module.css';

const getActiveLinkClassList = (isActive: boolean) =>
  classNames(styles.link, { [`${styles['link--active']}`]: isActive });

const menuList = [
  { text: 'Home', to: '/' },
  { text: 'About', to: '/about' },
  { text: 'Users', to: '/users' },
];

export function MainMenu() {
  return (
    <StyledMenuWrapper>
      <nav>
        <img src={logoSVG} alt="React Logo" />

        <ul>
          {menuList.map((route, index) => (
            <StyledMenuItem key={index}>
              <NavLink
                className={(props) => getActiveLinkClassList(props.isActive)}
                end
                to={route.to}
              >
                {route.text}
              </NavLink>
            </StyledMenuItem>
          ))}
        </ul>
      </nav>
    </StyledMenuWrapper>
  );
}
