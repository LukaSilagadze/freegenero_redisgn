function PageHero({ eyebrow, title, copy, icon: Icon }) {
  return (
    <section className="section page-hero">
      <div>
        <p className="eyebrow">
          {Icon ? <Icon size={16} /> : null}
          {eyebrow}
        </p>
        <h1>{title}</h1>
        <p>{copy}</p>
      </div>
    </section>
  );
}

export default PageHero;
