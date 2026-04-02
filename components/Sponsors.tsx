import styles from './Sponsors.module.css';

const sponsors = [
  { id: 1, name: 'TATA', logo: 'TATA', highlight: true },
  { id: 2, name: 'DREAM11', logo: 'DREAM11', highlight: false },
  { id: 3, name: 'CRED', logo: 'CRED', highlight: false },
  { id: 4, name: 'RuPay', logo: 'RuPay', highlight: false },
  { id: 5, name: 'Upstox', logo: 'Upstox', highlight: false },
  { id: 6, name: 'Herbalife', logo: 'Herbalife', highlight: false },
];

export default function Sponsors() {
  return (
    <section className={styles.sponsorsSection} id="sponsors">
      <div className="container">
        <div className={styles.header}>
          <h2>Official Partners & Sponsors</h2>
          <p>Brought to you by the biggest brands worldwide</p>
        </div>
        <div className={styles.advertisement}>
          <div className={`${styles.adBanner} glass-panel`}>
            <div className={styles.adContent}>
              <span className={styles.adBadge}>ADVERTISEMENT</span>
              <h3>Get 50% Off Your First Fantasy Team!</h3>
              <p>Join millions of fans playing daily fantasy sports.</p>
              <button className={styles.adBtn}>Play Now</button>
            </div>
          </div>
        </div>
        <div className={styles.grid}>
          {sponsors.map((brand) => (
            <div key={brand.id} className={`${styles.sponsorCard} ${brand.highlight ? styles.highlighted : ''} glass-panel`}>
              <div className={styles.logoText}>{brand.logo}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
