function AddActivity() {
    const insertActivity= () => {
        const activity = document.getElementById("textareaActivity").value;
        console.log(activity);
      
        fetch("http://localhost:3000/activities", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({activity:activity})
        })
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
          })
          .catch((error) => {
            // handle errors
            console.error('Error:', error);
          });
      };
      
  return (
    <div className="container">
        <div className="card m-1">
            <div className="card-header text-warning bg-dark">
                <i className="fas fa-plus-square mr-2"></i>
                    Add activity
            </div>
          
            <div className="card-body">
                <div className="row">
                    <div className="col-12">
                    <label>Activity</label>
                    <textarea row="3" className="form-control" placeholder="Enter an activity" required id="textareaActivity"/>
                    </div>                  
                </div>
            </div>
            <div className="card-footer">
                <div className="row">
                    <div className="col-12">
                        <button onClick={insertActivity} className="form-control bg-warning text-dark" id="addActivityBtn" >
                            <i className="fas fa-plus-square mr-2"></i>
                            Add activity
                        </button>
                    </div>
                </div>                
            </div>
        </div>
    </div>
    
    );
    
}

export default AddActivity;
