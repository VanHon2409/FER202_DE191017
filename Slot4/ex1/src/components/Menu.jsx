import { pizzaData } from "../data/data";

function Menu() {
  return (
    <div className="container my-5">
      <h3 className="text-center mb-4">Our Menu</h3>

      <div className="row">
        {pizzaData.map((pizza) => (
          <div
            className="col-lg-3 col-md-6 col-sm-12 mb-4"
            key={pizza.id}
          >
            <div className="card h-100 text-center position-relative">

              {pizza.tag && (
                <span className="badge bg-warning position-absolute" style={{top: "10px", left: "10px"}}>
                  {pizza.tag}
                </span>
              )}

              <div className="pizza-img-wrapper" style={{overflow: "hidden", height: "250px"}}>
                <img src={pizza.image} alt={pizza.name} style={{width: "100%", height: "100%", objectFit: "cover"}} />
              </div>

              <div className="card-body">
                <h5 className="card-title">{pizza.name}</h5>
                <p className="text-danger fw-bold">${pizza.price}</p>
                <button className="btn btn-outline-dark w-100">View Detail</button>
                <button className="btn btn-dark w-100 mt-2">Buy</button>
                
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
