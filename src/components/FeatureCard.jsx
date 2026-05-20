function FeatureCard({ item, className = '', children }) {
  const Icon = item.icon;

  return (
    <article className={`feature-card ${className}`.trim()}>
      <span className="icon-badge">
        <Icon size={22} />
      </span>
      <span className="meta">{item.meta}</span>
      <h3>{item.title}</h3>
      <p>{item.detail}</p>
      {children}
    </article>
  );
}

export default FeatureCard;
