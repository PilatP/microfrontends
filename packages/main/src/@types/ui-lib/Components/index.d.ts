/// <reference types="react" />
export interface IButtonProps {
  text?: string;
}
declare const Button: ({ text, ...rest }: IButtonProps) => JSX.Element;

export interface ILinkProps {
  text: string;
}
declare const Link: ({ text, ...rest }: ILinkProps) => JSX.Element;

export { Button, Link };
