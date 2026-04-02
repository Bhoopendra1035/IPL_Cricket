import styles from './Highlights.module.css';

const highlights = [
  { id: 1, title: 'MI vs CSK: Final Over Drama', type: 'Match Highlights', duration: '12:45', image: 'https://images.unsplash.com/photo-1540747913346-19e32fc3e6ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 2, title: 'Virat Kohli Masterclass 100 vs KKR', type: 'Innings', duration: '08:20', image: 'https://images.unsplash.com/photo-1593766827228-8737b4534aa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 3, title: 'Best Catches of the Week', type: 'Compilation', duration: '05:15', image: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 4, title: 'Bumrah 5 Wicket Haul', type: 'Bowling', duration: '06:10', image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
];

export default function Highlights() {
  return (
    <section className={styles.highlightsSection} id="highlights">
      <div className="container">
        <div className={styles.header}>
          <h2>Top Highlights</h2>
          <button className={styles.viewAll}>View All</button>
        </div>
        <div className={styles.grid}>
          {highlights.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.thumbnail} style={{ backgroundImage: `url(${item.image})` }}>
                <div className={styles.playIconContainer}>
                  <div className={styles.playIcon}></div>
                </div>
                <span className={styles.duration}>{item.duration}</span>
              </div>
              <div className={styles.info}>
                <span className={styles.type}>{item.type}</span>
                <h3 className={styles.title}>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
