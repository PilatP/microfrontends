/// <reference types="react" />
import { NavLinkProps } from 'react-router-dom';
export interface INavLinkProps extends NavLinkProps {
}
declare const NavLink: ({ children, ...rest }: React.PropsWithChildren<INavLinkProps>) => JSX.Element;
export { NavLink };
