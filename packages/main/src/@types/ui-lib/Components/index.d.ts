/// <reference types="react" />
export interface IButtonProps {
  text?: string;
  onClick?: () => void;
}
declare const Button: ({ text, onClick, ...rest }: IButtonProps) => JSX.Element;

export interface ILinkProps {
  text: string;
}
declare const Link: ({ text, ...rest }: ILinkProps) => JSX.Element;

export interface ITextProps {
  text: string;
}
declare const Text: ({ text, ...rest }: ITextProps) => JSX.Element;

declare const Variants: ({ children, ...rest }: React.PropsWithChildren<IVariantsProps>) => JSX.Element;

export { Button, Link, Text, Variants };
