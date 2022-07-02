import PropTypes from 'prop-types';
import StatEl from '../statEl/statEl';

export default function Statistics ({ title, stats }) {
    return (
    <section className="statistics">
      {title && (
        <h2 className="title">{title}</h2>
      )}    
  
    <ul className="stat-list">
      {stats.map(stat => (
        <StatEl key={stat.id}
        label={stat.label}
        percentage={stat.percentage}
        />
      ))}
     
    </ul>
  </section>
  )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired
    }))

}