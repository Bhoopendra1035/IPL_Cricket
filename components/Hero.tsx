import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <div className="animate-slide-up">
          <div className={styles.liveIndicator}>
            <span className={styles.liveBlinkingDot}></span> LIVE MATCH
          </div>
          <h1 className={styles.title}>MI <span className="text-gradient">VS</span> CSK</h1>
          <p className={styles.subtitle}>
            Catch the ultimate showdown at Wankhede Stadium. <br />
            Experience real-time action in ultra high definition.
          </p>
          <div className={styles.scorecard}>
            <div className={styles.team}>
              <h3>MI</h3>
              <span className={styles.score}>198/4 <span>(20.0)</span></span>
            </div>
            <div className={styles.vsCircle}>VS</div>
            <div className={styles.team}>
              <h3>CSK</h3>
              <span className={styles.score}>154/2 <span>(14.3)</span></span>
            </div>
          </div>
          <button className={styles.watchNowBtn}>WATCH LIVE NOW</button>
        </div>
      </div>
    </section>
  );
}
