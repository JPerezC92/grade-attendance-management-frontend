import NextLink from 'next/link';

interface LinkProps {
  href?: string;
}

const Link: React.FC<LinkProps> = ({ href, children }) => {
  return (
    <>
      <NextLink href={href} passHref>
        {children}
      </NextLink>
    </>
  );
};

export default Link;
