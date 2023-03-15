function AddActivity() {
  return (
    <div class="container">
        <div className="card m-1">
            <div class="card-header text-warning bg-dark">
                <i className="fas fa-plus-square mr-2"></i>
                    Add activity
            </div>

          
            <div class="card-body">
                <div className="row">
                    <div className="col-12">
                    <label>Activity</label>
                    <input type="text" className="form-control" placeholder="Enter an activity" required/>
                    </div>                  
                </div>
            </div>
            <div class="card-footer">
                <div className="row">
                    <div className="col-3">
                        <button className="form-control bg-warning text-dark">
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
