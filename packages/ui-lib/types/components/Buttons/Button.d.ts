/// <reference types="react" />
export interface IButtonProps {
    text?: string;
    onClick?: () => void;
}
declare const Button: ({ text, onClick, ...rest }: IButtonProps) => JSX.Element;
export { Button };
