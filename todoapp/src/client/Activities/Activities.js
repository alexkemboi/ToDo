function Footer() {
    return (
        <div className="container">
            <div className="card">
                <div className="card-header text-warning bg-dark">
                <i className="fas fa-list"></i> Activities
                </div>
                <div className="card-body">
                <table className="table table-striped">
                    <thead className="thead-dark">
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
                        <td><span className="badge badge-success">Completed</span></td>
                        <td>
                            <a href="#" className="text-secondary"><i className="fas fa-edit"></i></a>
                            <a href="#" className="text-danger ml-2"><i className="fas fa-trash-alt"></i></a>
                        </td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Learn React Hooks</td>
                        <td><span className="badge badge-warning">In progress</span></td>
                        <td>
                            <a href="#" className="text-secondary"><i className="fas fa-edit"></i></a>
                            <a href="#" className="text-danger ml-2"><i className="fas fa-trash-alt"></i></a>
                        </td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>Build a Todo app</td>
                        <td><span className="badge badge-primary">Pending</span></td>
                        <td>
                            <a href="#" className="text-secondary"><i className="fas fa-edit"></i></a>
                            <a href="#" className="text-danger ml-2"><i className="fas fa-trash-alt"></i></a>
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
  