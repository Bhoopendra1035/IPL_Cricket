import styles from './MatchSlider.module.css';

const matches = [
  { id: 1, team1: 'RCB', team2: 'KKR', status: 'LIVE', score1: '145/2', score2: 'Yet to bat', time: 'LIVE' },
  { id: 2, team1: 'SRH', team2: 'GT', status: 'Today', time: '19:30 IST' },
  { id: 3, team1: 'RR', team2: 'DC', status: 'Tomorrow', time: '15:30 IST' },
  { id: 4, team1: 'PBKS', team2: 'LSG', status: 'Sat, 14 Apr', time: '19:30 IST' },
];

export default function MatchSlider() {
  return (
    <section className={styles.sliderSection} id="matches">
      <div className="container">
        <h2 className={styles.sectionTitle}>Match Center</h2>
        <div className={styles.sliderContainer}>
          {matches.map((match) => (
            <div key={match.id} className={`${styles.matchCard} glass-panel`}>
              <div className={styles.cardHeader}>
                <span className={match.status === 'LIVE' ? styles.liveBadge : styles.dateBadge}>
                  {match.status} {match.status === 'LIVE' && <span className={styles.dot}></span>}
                </span>
                <span className={styles.time}>{match.time}</span>
              </div>
              <div className={styles.teamsRow}>
                <div className={styles.teamInfo}>
                  <h4>{match.team1}</h4>
                  {match.score1 && <p>{match.score1}</p>}
                </div>
                <div className={styles.vs}>VS</div>
                <div className={styles.teamInfo}>
                  <h4>{match.team2}</h4>
                  {match.score2 && <p>{match.score2}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
