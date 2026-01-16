function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">Pizza House</a>

        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><a className="nav-link active">Home</a></li>
            <li className="nav-item"><a className="nav-link">About</a></li>
            <li className="nav-item"><a className="nav-link">Contact</a></li>
          </ul>

          <form className="d-flex">
            <input className="form-control me-2" placeholder="Search" />
            <button className="btn btn-danger">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
