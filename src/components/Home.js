const Home = () => {
    return ( 

        <div className="container-fluid ">
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
               <div className="d-flex justify-content-center">
                <img src="imgs/tech_services.png" className="d-block w-70 mb-3" alt="..."/>
               </div>

                <div className="carousel-caption d-none d-md-block">
                 
                  <h5 className ="text-white" >Extend Data Everywhere.</h5>

                </div>
            
              </div>
              <div className="carousel-item">
                <div className="d-flex justify-content-center">

                <img src="imgs/dlcomputers.png" className="d-block w-70" alt="..."/>
                </div>
                <div className="d-flex justify-content-center">
                <h5 className ="text-black">Drive breakthroughs in tech world. </h5>
                </div>
              </div>
            </div>
              
          
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    
     );
}
 
export default Home;
