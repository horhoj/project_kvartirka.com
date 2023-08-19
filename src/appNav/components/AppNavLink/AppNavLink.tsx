'use client';
import Link from 'next/link';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import styles from './AppNavLink.module.scss';

interface NavLinkProps {
  text: string;
  path: string;
}

export function AppNavLink({ path, text }: NavLinkProps) {
  const pathName = usePathname();

  return (
    <Link
      className={classNames(styles.AppNavLink, pathName === path && 'active')}
      href={path}
    >
      {text}
    </Link>
  );
}
