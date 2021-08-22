import NextLink, { LinkProps } from 'next/link';
import LinkMaterial from '@material-ui/core/Link';
interface LinkCustomProps {
  className?: string;
}

export const Link: React.FC<
  React.PropsWithChildren<LinkProps> & LinkCustomProps
> = ({ children, className, ...props }) => {
  return (
    <NextLink {...props}>
      <LinkMaterial className={className}>{children}</LinkMaterial>
    </NextLink>
  );
};
