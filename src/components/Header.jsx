function Header({ name, color }) {
  return (
    <header style={{ textAlign: "center", color: color }}>
      <h1>Student Portfolio</h1>
      <h2>Welcome, {name}</h2>
      <hr />
    </header>
  );
}

export default Header;