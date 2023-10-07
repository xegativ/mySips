const HomeNav = () => {
  return (
    <div className="nav-top">
      <ul>
        <li>
          <a href="#home" className="td-none">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="td-none">
            About
          </a>
        </li>
        <li>
          <a href="#app" className="td-none">
            Log in
          </a>
        </li>
        <li>
          <a href="#app" className="nav-try td-underline">
            Try out
          </a>
        </li>
      </ul>
    </div>
  );
};

export default HomeNav;
