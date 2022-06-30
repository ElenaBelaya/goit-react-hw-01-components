export default function Statistics ({ label, percentage, id }) {
    return (
    <section className="statistics">
    <h2 className="title">Upload stats</h2>
  
    <ul className="stat-list">
      <li className="item" >
        <span className="label">{label}</span>
        <span className="percentage">{percentage}%</span>
      </li>
      <li className="item" >
        <span className="label">{label}</span>
        <span className="percentage">{percentage}%</span>
      </li>
      <li className="item">
        <span className="label">{label}</span>
        <span className="percentage">{percentage}%</span>
      </li>
      <li className="item">
        <span className="label">{label}</span>
        <span className="percentage">{percentage}%</span>
      </li>
    </ul>
  </section>
  )
}
