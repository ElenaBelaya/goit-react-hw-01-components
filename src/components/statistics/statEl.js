export default function StatEl ({ label, percentage, id }) {
    return (
   
      <li className="item" id={id}>
        <span className="label">{label}</span>
        <span className="percentage">{percentage}%</span>
      </li>
     
   
  )
}