import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import styles from './page.module.css';

export default function LandingPage() {
  return (
    <div className={styles.page}>
      {/* Top Bar */}
      <header className={styles.topBar}>
        <div className={styles.topBarInner}>
          <span className={styles.brandText}>Nyanstagram</span>
          <div className={styles.topActions}>
            <Link href="/login" className={styles.loginBtn}>ログイン</Link>
          </div>
        </div>
      </header>

      {/* Main: 2カラム */}
      <main className={styles.main}>
        {/* 左: フォンモックアップ */}
        <div className={styles.phoneWrap}>
          <div className={styles.phone}>
            <div className={styles.phoneSpeaker} />
            <div className={styles.phoneScreen}>
              {/* ミニヘッダー */}
              <div className={styles.mockHeader}>
                <span className={styles.mockLogo}>Nyanstagram</span>
              </div>
              {/* スクリーン画像 */}
              <Image
                src="https://picsum.photos/seed/nyanstagram/400/600"
                alt="Nyanstagram feed"
                width={400}
                height={600}
                className={styles.mockScreenImage}
              />
              {/* ボトムナビ */}
              <div className={styles.mockNav}>
                <Link href="/login"><Icon icon="ph:house"            width={20} height={20} className={styles.mockNavIcon} /></Link>
                <Link href="/login"><Icon icon="ph:magnifying-glass" width={20} height={20} className={styles.mockNavIcon} /></Link>
                <Link href="/login"><Icon icon="ph:plus-square"      width={20} height={20} className={styles.mockNavIcon} /></Link>
                <Link href="/login"><Icon icon="ph:heart"            width={20} height={20} className={styles.mockNavIcon} /></Link>
                <Link href="/login"><Icon icon="ph:compass"          width={20} height={20} className={styles.mockNavIcon} /></Link>
              </div>
            </div>
          </div>
        </div>

        {/* 右: ブランド + CTA */}
        <div className={styles.ctaWrap}>
          <h1 className={styles.logo}>Nyanstagram</h1>
          <p className={styles.tagline}>
            大切な人や、好きなことと<br />つながろう。
          </p>

          <Link href="/login" className={styles.ctaButton}>
            ログインして始める
          </Link>

          <div className={styles.divider}>
            <span className={styles.dividerLine} />
            <span className={styles.dividerText}>または</span>
            <span className={styles.dividerLine} />
          </div>

          <Link href="/login" className={styles.subLink}>
            アカウントを作成
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <span>© 2026 Nyanstagram</span>
        <span>·</span>
        <a href="#" className={styles.footerLink}>利用規約</a>
        <span>·</span>
        <a href="#" className={styles.footerLink}>プライバシー</a>
        <span>·</span>
        <span>KTC Security Circle</span>
      </footer>
    </div>
  );
}
