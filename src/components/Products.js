const Products = () => {
    return ( 
        
        <div className="container-fluid">
            
        <div className="container p-1 mx-0">
           <h2 className="mt-5 mb-3"> Products</h2>
           </div>
        <div className="d-flex align-item-sm-start mt-0">  

            <div className="card bg-light w-25">
                <img className="card-img-top" src="imgs/xps_laptops.png" alt="Title"/>
                <div className="card-body">
                    <h4 className="card-title">XPS Laptops</h4>
                    <p className="card-text">Power Your Passions!</p>
                    <button className="btn btn-info"> Learn More  </button>
                </div>
            </div>


            <div className="card bg-light w-25">
                <img className="card-img-top" src="imgs/dlcomputers.png" alt="Title"/>
                <div className="card-body">
                    <h4 className="card-title">Latitude Laptops</h4>
                    <p className="card-text">Bring Work Closer to You!</p>
                    <button className="btn btn-info"> Lean More  </button>
                </div>
            </div>


            <div className="card bg-light w-25">
                <img className="card-img-top" src="imgs/gaming-pc-monitor.png" alt="Title"/>
                <div className="card-body">
                    <h4 className="card-title">The Big Gaming Event is Live</h4>
                    <p className="card-text">Top Gear to level up your gameplay! </p>
                    <button className="btn btn-info"> Learn More  </button>
                </div>
            </div>

            <div className="card bg-light w-25">
                <img className="card-img-top img-thumbnail"  src="imgs/google_nest_hub.png" alt="Title"/>
                <div className="card-body">
                    <h4 className="card-title">Google Nest Hub Max</h4>
                    <p className="card-text"> Meet Smart Home Speaker! </p>
                    <button className="btn btn-info"> Learn More  </button>
                </div>
            </div>
            </div>
        </div>
     );
}
 
export default Products;
