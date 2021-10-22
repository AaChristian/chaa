import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";
import styles from "./InlineLink.module.scss";

interface InlineLinkProps
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  to: string;
  children: React.ReactNode;
}

export const InlineLink: React.FC<InlineLinkProps> = ({
  to,
  children,
  ...props
}) => {
  return (
    <a
      href={to}
      className={styles.inlineLink}
      target="_blank"
      rel="noreferrer"
      {...props}
    >
      {children}
    </a>
  );
};
