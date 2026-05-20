function PageHero({ eyebrow, title, copy, icon: Icon }) {
  return (
    <section className="section page-hero">
      <div>
        <h1 className="hero-title">{title}</h1>
        <p>{copy}</p>
      </div>
    </section>
  );
}

export default PageHero;
