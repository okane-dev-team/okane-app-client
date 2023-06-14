import NextLink from "next/link";
import { Link, LinkProps } from "@chakra-ui/react";

type NavLinkProps = LinkProps & {
  href: string;
};

export const NavLink = ({ children, href }: NavLinkProps): JSX.Element => {
  return (
    <Link as={NextLink} href={href}>
      {children}
    </Link>
  );
};
