/// <reference types="react" />
export interface ILinkProps {
    text: string;
}
declare const Link: ({ text, ...rest }: ILinkProps) => JSX.Element;
export { Link };
