function Footer() {
    return (
        <footer className="bg-dark text-white container">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h5 className="text-center text-light">Todo App</h5>
              <p className="text-center text-warning">This is a simple Todo app built with Bootstrap and React.</p>
            </div>
            <div className="col-md-6 text-center">
              <h5>Connect with us</h5>
              <ul className="list-inline">
                <li className="list-inline-item"><a href="https://www.example.com"><i className="fab fa-twitter text-warning"></i></a></li>
                <li className="list-inline-item"><a href="https://www.example.com"><i className="fab fa-facebook text-warning"></i></a></li>
                <li className="list-inline-item"><a href="https://www.example.com"><i className="fab fa-instagram text-warning"></i></a></li>
              </ul>
            </div>
          </div>
         
          <p className="text-center text-warning">Copyright &copy; 2023 
          <a href="#">Todo App</a> | <a href="https://www.example.com">Privacy Policy</a></p>
        </div>
      </footer>
      
    );
  }
  
  export default Footer;
  