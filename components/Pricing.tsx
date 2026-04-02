import styles from './Pricing.module.css';

const plans = [
  { id: 1, name: 'Mobile Basic', price: '$4.99/mo', desc: 'Perfect for watching on the go.', features: ['1 Mobile Device', '720p HD Quality', 'Ads Supported'] },
  { id: 2, name: 'StreamMax Premium', price: '$12.99/mo', desc: 'The ultimate ad-free experience.', features: ['4 Devices (TV, PC)', '4K Ultra HD + Dolby', 'Zero Ads', 'Exclusive Interviews'], isPopular: true },
  { id: 3, name: 'Super VIP', price: '$9.99/mo', desc: 'Great for big screens at home.', features: ['2 Devices Simultaneously', '1080p Full HD', 'Zero Ads'] },
];

export default function Pricing() {
  return (
    <section className={styles.pricingSection} id="pricing">
      <div className="container">
        <div className={styles.header}>
          <h2>Choose Your Plan</h2>
          <p>Unlock unlimited cricket streaming in high definition</p>
        </div>
        <div className={styles.grid}>
          {plans.map((plan) => (
            <div key={plan.id} className={`${styles.card} ${plan.isPopular ? styles.popular : ''} glass-panel`}>
              {plan.isPopular && <div className={styles.badge}>MOST POPULAR</div>}
              <h3>{plan.name}</h3>
              <p className={styles.desc}>{plan.desc}</p>
              <div className={styles.price}>{plan.price}</div>
              <ul className={styles.features}>
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className={styles.check}>✓</span> {feature}
                  </li>
                ))}
              </ul>
              <button className={`${styles.btn} ${plan.isPopular ? styles.btnPrimary : styles.btnSecondary}`}>
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
