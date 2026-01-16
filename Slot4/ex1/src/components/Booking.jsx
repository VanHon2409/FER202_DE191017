function Booking() {
  return (
    <div className="py-5" style={{backgroundColor: "#2c2c2c"}}>
      <div className="container">
        <h3 className="text-center text-white mb-4">Book Your Table</h3>

        <div className="row mb-3">
          <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
            <input className="form-control" placeholder="Your Name*" />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
            <input className="form-control" placeholder="Your Email*" />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
            <select className="form-control">
              <option>Select a Service</option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-12">
            <textarea className="form-control" rows="5" placeholder="Please write your comments"></textarea>
          </div>
        </div>

        <button className="btn btn-warning fw-bold">Send Message</button>
      </div>
    </div>
  );
}

export default Booking;
