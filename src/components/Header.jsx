function Header({ name, color }) {
  return (
    <header className="hero-card" style={{ borderColor: color }}>
      <p className="eyebrow">Welcome to my portfolio</p>
      <h1>Hi, I’m {name}</h1>
      <p className="hero-text">
        A student developer who enjoys building simple websites and learning
        through practice.
      </p>
      <div className="tag-row">
        <span className="tag">Frontend</span>
        <span className="tag">React</span>
        <span className="tag">Learning</span>
      </div>
    </header>
  );
}

export default Header;