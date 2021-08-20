import NextLink, { LinkProps } from 'next/link';

interface LinkCustomProps {
  className?: string;
}

export const Link: React.FC<
  React.PropsWithChildren<LinkProps> & LinkCustomProps
> = ({ children, className, ...props }) => {
  return (
    <NextLink {...props}>
      <a className={className}>{children}</a>
    </NextLink>
  );
};
