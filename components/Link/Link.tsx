import { HTMLAttributeAnchorTarget, PropsWithChildren } from 'react';
// eslint-disable-next-line no-restricted-imports
import NextLink from 'next/link';
import type { UrlObject } from 'url';

export type LinkProps = PropsWithChildren<{
  href: string | UrlObject;
  className?: string;
  target?: HTMLAttributeAnchorTarget;
  scroll?: boolean;
  shallow?: boolean;
  locale?: string;
  onClick?: (e?: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  dataTestId?: string;
}>;

export default function Link({
  href,
  children,
  className,
  target,
  scroll = true,
  shallow = true,
  locale,
  onClick,
  dataTestId
}: LinkProps) {
  return (
    <NextLink
      href={href}
      className={className}
      prefetch={false}
      passHref
      scroll={scroll}
      shallow={shallow}
      target={target}
      locale={locale}
      onClick={onClick}
      data-testid={dataTestId}
    >
      {children}
    </NextLink>
  );
}
