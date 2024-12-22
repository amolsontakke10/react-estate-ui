import "./navbar.scss";
function Navbar() {
  return (
    <nav>
      <div className="left">
        <a href="/">
          <img src="/logo.png" />
          <span>real estate</span>
        </a>
        <a href="/">home</a>
        <a href="/">about </a>
        <a href="/">contact</a>
        <a href="/">agency</a>
      </div>
      <div className="right">
        <a href="/">sign in</a>
        <a href="/">sign up</a>
      </div>
    </nav>
  );
}

export default Navbar;
