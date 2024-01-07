const Contact = () => {
    return ( 
        <div className='container-fluid'>

      <div className="container p-1 mx-0">
        <h2 className="mt-5 mb-3 text-left">Contact Us</h2>
        </div>
        <div className="d-flex justify-content-center">
            <div className="card bg-light w-25">
                <img className="card-img-top" src="imgs/customersupport.png" alt="Title"/>
                <div className="card-body">
                    <h4 className="card-title">Get Tech Help & Customer Support</h4>
                    <p className="card-text">Enter your device info and we’ll get you started</p>
                    <button className="btn btn-info"> Contact Technical Support </button>
                </div>
            </div>

                <div className="card bg-light w-25">
                    <img className="card-img-top" src="imgs/check_orders.png" alt="Title"/>
                    <div className="card-body">
                        <h4 className="card-title">Check Your Orders</h4>
                        <p className="card-text">View order status, invoices, and contact support</p>
                        <button className="btn btn-info"> Contact Technical Support </button>
                    </div>
            </div>
            </div>
            </div>
     );
}
 
export default Contact;
