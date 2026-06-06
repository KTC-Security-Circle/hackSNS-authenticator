'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { usePathname } from 'next/navigation';
import { logoutAction, getSession } from '@/server/actions/auth-actions';
import styles from './Sidebar.module.css';

const navItems = [
  { href: '/feed',      icon: 'ph:house',              label: 'ホーム' },
  { href: '/reels',     icon: 'ph:video-camera',       label: 'リール動画' },
  { href: '/messages',  icon: 'ph:paper-plane-tilt',   label: 'メッセージ' },
  { href: '/search',    icon: 'ph:magnifying-glass',   label: '検索' },
  { href: '/explore',   icon: 'ph:compass',            label: '発見' },
  { href: '/notif',     icon: 'ph:bell',               label: 'お知らせ', badge: 1 },
  { href: '/create',    icon: 'ph:plus-square',        label: '作成' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [avatarUrl, setAvatarUrl] = useState<string>('');

  useEffect(() => {
    getSession().then((session) => {
      if (session?.username) {
        setAvatarUrl(`https://picsum.photos/seed/av-${session.username}/80/80`);
      }
    });
  }, []);

  return (
    <>
      {/* PC: 左固定サイドバー */}
      <aside className={styles.sidebar}>
        <div className={styles.logoArea}>
          <Link href="/feed" className={styles.logoLink}>Nyanstagram</Link>
        </div>

        <nav className={styles.nav}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.navItem} ${pathname === item.href ? styles.navItemActive : ''}`}
            >
              <div className={styles.iconWrap}>
                <Icon
                  icon={item.icon}
                  width={24}
                  height={24}
                  className={styles.navIcon}
                />
                {item.badge ? <span className={styles.badge}>{item.badge}</span> : null}
              </div>
              <span className={styles.navLabel}>{item.label}</span>
            </Link>
          ))}
        </nav>

        <Link href="/profile" className={`${styles.navItem} ${styles.profileItem}`}>
          <div className={styles.avatarCircle}>
            {avatarUrl ? (
              <Image src={avatarUrl} alt="avatar" fill style={{ objectFit: 'cover' }} />
            ) : 'U'}
          </div>
          <span className={styles.navLabel}>マイページ</span>
        </Link>

        <form action={logoutAction} className={styles.logoutForm}>
          <button type="submit" className={styles.logoutButton}>
            ログアウト
          </button>
        </form>
      </aside>

      {/* モバイル: 下部固定ナビ */}
      <nav className={styles.bottomNav}>
        {navItems.slice(0, 5).map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`${styles.bottomNavItem} ${pathname === item.href ? styles.bottomNavItemActive : ''}`}
          >
            <div className={styles.iconWrap}>
              <Icon
                icon={item.icon}
                width={24}
                height={24}
                className={styles.navIcon}
              />
              {item.badge ? <span className={styles.badge}>{item.badge}</span> : null}
            </div>
          </Link>
        ))}
      </nav>
    </>
  );
}
