import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark container">
      <a className="navbar-brand text-white" href="/home">Todo App</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/homenavbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                  <li className="nav-item active">
                    <a className="nav-link text-warning" href="/home">
                      <i className="fas fa-home"></i> Home <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-warning" href="/activities">
                      <i className="fas fa-list"></i> Activities
                    </a>
                  </li>
               </ul>

      </div>
    </nav>
  );
}

export default Navbar;
