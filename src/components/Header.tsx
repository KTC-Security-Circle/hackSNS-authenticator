'use client';

import Link from 'next/link';
import { Icon } from '@iconify/react';
import { usePathname } from 'next/navigation';
import { logoutAction } from '@/server/actions/auth-actions';
import styles from './Header.module.css';

interface HeaderProps {
  username?: string;
}

export default function Header({ username = 'User' }: HeaderProps) {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Link href="/feed" className={styles.logo}>
          Nyanstagram
        </Link>

        <div className={styles.searchBar}>
          <Icon icon="ph:magnifying-glass" width={14} height={14} className={styles.searchIcon} />
          <span className={styles.searchText}>検索</span>
        </div>

        <nav className={styles.nav}>
          <Link
            href="/feed"
            className={`${styles.navIconLink} ${pathname === '/feed' ? styles.navIconLinkActive : ''}`}
            title="ホーム"
            aria-label="ホーム"
          >
            <Icon icon="ph:house" width={24} height={24} aria-hidden="true" />
          </Link>
          <Link
            href="/feed"
            className={styles.navIconLink}
            title="メッセージ"
            aria-label="メッセージ"
          >
            <Icon icon="ph:paper-plane-tilt" width={24} height={24} aria-hidden="true" />
          </Link>
          <Link
            href="/feed"
            className={styles.navIconLink}
            title="新規投稿"
            aria-label="新規投稿"
          >
            <Icon icon="ph:plus-square" width={24} height={24} aria-hidden="true" />
          </Link>
          <Link
            href="/explore"
            className={`${styles.navIconLink} ${pathname === '/explore' ? styles.navIconLinkActive : ''}`}
            title="探索"
            aria-label="探索"
          >
            <Icon icon="ph:compass" width={24} height={24} aria-hidden="true" />
          </Link>
          <Link
            href="/notifications"
            className={`${styles.navIconLink} ${pathname === '/notifications' ? styles.navIconLinkActive : ''}`}
            title="通知"
            aria-label="通知"
          >
            <Icon icon="ph:bell" width={24} height={24} aria-hidden="true" />
          </Link>
          <div className={styles.userSection}>
            <Link href="/profile" className={styles.navIconLink} title={username}>
              <div className={styles.avatar}>
                {username.charAt(0).toUpperCase()}
              </div>
            </Link>
            <form action={logoutAction}>
              <button type="submit" className={styles.logoutButton}>ログアウト</button>
            </form>
          </div>
        </nav>
      </div>
    </header>
  );
}
