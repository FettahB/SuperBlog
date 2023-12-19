import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="lama blog" width={50} height={50} />
          <h1 className={styles.logoText}>Lamablog</h1>
        </div>
        <p className={styles.desc}>H-hello there, lovely hooman! 💕✨ Ben Fettahu-nyan! (´꒳`) Bu s-sooo kawaii sanal dünyada renkli bir varlık desu~! 💖💫 Müzik-chan, kitap-kunlar ve kahve-senpai benim için birer tutkusu desu. 🎶📚☕️ Hayal gücümün sınırlarını kawaii bir şekilde zorlamayı, yeni şeyler öğrenmeyi ve her gün biraz daha kawaii bir şekilde gülümsemeyi seviyowum desu! (*≧ω≦) Siz de meraklı mısınız? Let's kawaii adventures together! (灬º‿º灬)♡ Nyaa~! 🚀💖🌍✨
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="" width={18} height={18} />
          <Image src="/instagram.png" alt="" width={18} height={18} />
          <Image src="/tiktok.png" alt="" width={18} height={18} />
          <Image src="/youtube.png" alt="" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
      <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;