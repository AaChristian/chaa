import styles from "./InlineLink.module.scss";

interface InlineLinkProps {
  to: string;
  children: React.ReactNode;
}

export const InlineLink: React.FC<InlineLinkProps> = ({ to, children }) => {
  return (
    <a href={to} className={styles.inlineLink} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};
