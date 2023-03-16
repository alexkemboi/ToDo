function Footer() {
    function getActivity() {
            const activityTable = document.getElementById("acitvityTable");
          
            fetch("http://localhost:3000/getActivities")
              .then((response) => {
                // handle response from server
                if (!response.ok) {
                  throw new Error('Network response was not ok');
                }
                return response.json();
              })
              .then((data) => {
                // handle data returned by server
                console.log(data);
                let tr='';
                data.forEach(item=>{
                    tr+=`<tr><td>${item.No}</td><td>${item.Activity}</td></tr>`
                });
                activityTable.innerHTML=tr;
                 })
              .catch((error) => {
                // handle errors
                console.error('Error:', error);
              });
          
        }
    return (
        <div className="container">
            <div className="card">

                <div className="card-header text-warning bg-dark">
                <button onClick={getActivity} className="text-secondary form-control"><i className="fas fa-edit"></i></button>
                    
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
                    <tbody id="acitvityTable">
                        <tr>
                        <th scope="row">1</th>
                        <td>Complete CSS tutorial</td>
                        <td><span className="badge badge-success">Completed</span></td>
                        <td>
                            <button onClick={getActivity} className="text-secondary"><i className="fas fa-edit"></i></button>
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
  