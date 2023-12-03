import { cloneElement, ReactElement } from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

type ActiveLinkProps = LinkProps & {
  children: ReactElement;
  exact?: boolean;
};

export function ActiveLink({
  children,
  exact,
  href,
  ...rest
}: ActiveLinkProps) {
  const { asPath } = useRouter();

  const isActive =
    (exact && asPath === String(href)) ||
    (!exact && asPath.startsWith(String(href)));

  return (
    <Link href={href} {...rest}>
      {cloneElement(children, { color: isActive ? "pink.400" : "gray.50" })}
    </Link>
  );
}
