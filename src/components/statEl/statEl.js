import PropTypes from 'prop-types';
export default function StatEl ({ label, percentage, id }) {
    return (
   
      <li className="item">
        <span className="label">{label}</span>
        <span className="percentage">{percentage}%</span>
      </li>
     
   
  )
}

StatEl.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
 
  
  
}