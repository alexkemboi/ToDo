function Footer() {
    return (
        <div className="container">
            <div className="card">
                <div className="card-header">

                </div>
                <div className="card-body">
                <table class="table table-striped">
                    <thead class="thead-dark">
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Task</th>
                        <th scope="col">Status</th>
                        <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Complete CSS tutorial</td>
                        <td><span class="badge badge-success">Completed</span></td>
                        <td>
                            <a href="#" class="text-secondary"><i class="fas fa-edit"></i></a>
                            <a href="#" class="text-danger ml-2"><i class="fas fa-trash-alt"></i></a>
                        </td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Learn React Hooks</td>
                        <td><span class="badge badge-warning">In progress</span></td>
                        <td>
                            <a href="#" class="text-secondary"><i class="fas fa-edit"></i></a>
                            <a href="#" class="text-danger ml-2"><i class="fas fa-trash-alt"></i></a>
                        </td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>Build a Todo app</td>
                        <td><span class="badge badge-primary">Pending</span></td>
                        <td>
                            <a href="#" class="text-secondary"><i class="fas fa-edit"></i></a>
                            <a href="#" class="text-danger ml-2"><i class="fas fa-trash-alt"></i></a>
                        </td>
                        </tr>
                    </tbody>
                    </table>

                </div>
            </div>
        </div>
      
    );
  }
  
  export default Footer;
  