import Image from 'next/image';
import { Icon } from '@iconify/react';
import styles from './PostCard.module.css';

interface PostCardProps {
  displayName: string;
  username: string;
  content: string;
  timestamp: string;
  likes?: number;
  comments?: number;
  imageUrl?: string;
}

export default function PostCard({
  displayName,
  username,
  content,
  timestamp,
  likes = 0,
  comments = 0,
  imageUrl,
}: PostCardProps) {
  return (
    <article className={styles.postCard}>
      {/* ヘッダー */}
      <div className={styles.postHeader}>
        <div className={styles.userInfo}>
          <div className={styles.avatarRing}>
            <div className={styles.avatar}>
              {displayName.charAt(0).toUpperCase()}
            </div>
          </div>
          <div className={styles.userMeta}>
            <span className={styles.displayName}>{displayName}</span>
            <span className={styles.headerTime}>{timestamp}</span>
          </div>
        </div>
        <button className={styles.wishlistButton}>Wishlistに追加</button>
      </div>

      {/* 画像 */}
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt="投稿画像"
          className={styles.postImage}
          width={600}
          height={600}
          style={{ objectFit: 'cover' }}
        />
      ) : (
        <div className={styles.postImagePlaceholder} />
      )}

      {/* フッター */}
      <div className={styles.postFooter}>
        <div className={styles.actionButtons}>
          <div className={styles.leftActions}>
            <button className={styles.actionButton} aria-label="いいね">
              <Icon icon="ph:heart" width={24} height={24} />
            </button>
            <button className={styles.actionButton} aria-label="コメント">
              <Icon icon="ph:chat-circle" width={24} height={24} />
            </button>
            <button className={styles.actionButton} aria-label="シェア">
              <Icon icon="ph:paper-plane-tilt" width={24} height={24} />
            </button>
          </div>
          <button className={styles.actionButton} aria-label="保存">
            <Icon icon="ph:bookmark-simple" width={24} height={24} />
          </button>
        </div>

        <span className={styles.likes}>{likes.toLocaleString()} likes</span>

        <div className={styles.caption}>
          <span className={styles.captionUser}>{username}</span>
          {content}
        </div>

        {comments > 0 && (
          <button className={styles.commentsLink}>
            {comments}件のコメントをすべて見る
          </button>
        )}
      </div>
    </article>
  );
}
