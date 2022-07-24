
export default function Header () {
  return (
    <header>
      <nav className="navbar bg-light">
        <div className="container-fluid justify-content-center">
          <a className="navbar-brand m-0 py-2 d-flex align-items-center fs-3 h1" href="/">
            <img
              src="icon.png"
              alt=""
              width="50"
              height="50"
              className="d-inline-block align-text-top"
            />
            Upload your image!
          </a>
        </div>
      </nav>
    </header>
  );
}
