const Login = () => {
    return ( 

 <div className='container-fluid'>

    <div className="modal fade" id="modalId" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
    <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm" role="document">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="modalTitleId">Login to current account </h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <div className="form-group">
                <label for=""> Username</label>
                <input type="name" className="form-control" name="Username" id="name" placeholder=""/>
            </div>
            <div className="modal-body">
                <div className="form-group">
                  <label for="password"> Password</label>
                  <input type="password" className="form-control" name="password" id="password" placeholder=""/>
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">sign in</button>
            </div>
        </div>
    </div>
</div>



<script>
    const myModal = new bootstrap.Modal(document.getElementById('modalId'), options)


</script>
</div>

<div className="container p-5 mt-4 mx-0">
<div className="mb-3 d-flex justify-content-center">
 <form className="">
    <div className="mb-3">
        <label for="name" className="form-label">Create New Account: </label>
        <label for="name" className="form-label">Username: </label>
        <input type="text" className="form-control" name="" id="name" rows="3" required/>
    </div>

    <div className="mb-3">
        <label for="Password" className="form-label">Password: </label>
        <input type="password" className="form-control" name="password" id="password" rows="3" required/>

        <p className="mt-4"> 
          Do you already have an account?
           
       <button type="button" className="btn btn-primary btn-sm align-center" data-bs-toggle="modal" data-bs-target="#modalId">
       Sign in for existing
        </button>
        </p>
        <div className="mt-3">
            <button type="submit" className="btn btn-primary">Submit</button>
        </div>
    </div>
 </form>

 </div>
    </div>
    </div>
    );
}
 
export default Login;
