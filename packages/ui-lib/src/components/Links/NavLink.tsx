import styled from 'styled-components';
import { NavLink as RouterNavLink, NavLinkProps } from 'react-router-dom';

export interface INavLinkProps extends NavLinkProps {}

const ScRouterNavLink = styled(RouterNavLink)`
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: rgb(36, 37, 39);

  &.active {
    color: rgb(66, 171, 233);
  }
`;

const NavLink = ({
  children,
  ...rest
}: React.PropsWithChildren<INavLinkProps>) => {
  return <ScRouterNavLink {...rest}>{children}</ScRouterNavLink>;
};

export { NavLink };
