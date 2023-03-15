function Footer() {
    return (
        <footer class="bg-dark text-white container">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h5 className="text-centre text-warning">Todo App</h5>
              <p className="text-centre">This is a simple Todo app built with Bootstrap and React.</p>
            </div>
            <div class="col-md-6 text-center">
              <h5>Connect with us</h5>
              <ul class="list-inline">
                <li class="list-inline-item"><a href="https://www.example.com"><i class="fab fa-twitter text-warning"></i></a></li>
                <li class="list-inline-item"><a href="https://www.example.com"><i class="fab fa-facebook text-warning"></i></a></li>
                <li class="list-inline-item"><a href="https://www.example.com"><i class="fab fa-instagram text-warning"></i></a></li>
              </ul>
            </div>
          </div>
         
          <p class="text-center text-warning">Copyright &copy; 2023 
          <a href="#">Todo App</a> | <a href="https://www.example.com">Privacy Policy</a></p>
        </div>
      </footer>
      
    );
  }
  
  export default Footer;
  