const Gallery = () => {

    return (
        <div className="container-fluid">

      <div class="container p-1">
        <h2 class="mt-5 mb-2"> Electronics & Accessories </h2>
    </div>
        <div className="container mt-5">
            <div className="row">
                <div className="col-sm-3">
                    <div className="media">
                        <img className="img-thumbnail" src="imgs/monitors1.png" alt=""/>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="media">
                        <img className="img-thumbnail" src="imgs/home-electronics.png" alt=""/>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="media">
                        <img className="img-thumbnail" src="imgs/cyber-monday-deals.png" alt=""/>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="media">
                        <img className="img-thumbnail" src="imgs/keyboards&mouse.png" alt=""/>
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-sm-3">
                    <div className="media">
                        <img className="img-thumbnail" src="imgs/gaming_accessories.png" alt=""/>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="media">
                        <img className="img-thumbnail" src="imgs/pc_accessories.png" alt=""/>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="media">
                        <img className="img-thumbnail" src="imgs/webcams&vid-conferencing.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default Gallery;
