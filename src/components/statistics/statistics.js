import StatEl from './statEl';

export default function Statistics ({ title, stats }) {
    return (
    <section className="statistics">
    <h2 className="title">{title}</h2>
  
    <ul className="stat-list">
      {stats.map(stat => (
        <StatEl
        id={stat.id}
        label={stat.label}
        percentage={stat.percentage}
        />
      ))}
     
    </ul>
  </section>
  )
}

