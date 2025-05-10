import React, { useEffect } from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "IT Director",
    company: "TechCorp Solutions",
    quote:
      "SoftSell helped us recover over $50,000 from unused enterprise licenses. The process was incredibly smooth, and we received payment faster than expected.",
  },
  {
    name: "Michael Chen",
    role: "CFO",
    company: "Innovate Industries",
    quote:
      "As we transitioned to cloud services, we had dozens of unused licenses. SoftSell's valuation was fair and competitive, and their team was professional throughout the entire process.",
  },
];

const Testimonials = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css";
    document.head.appendChild(link);
  }, []);

  return (
    <>
      {/* Testimonials Section */}
      <section style={{ backgroundColor: "#f8fefb" }} className="py-5">
        <div className="container text-center mb-5">
          <span
            className="badge mb-3 px-3 py-2 fs-6"
            style={{ backgroundColor: "#d1e7dd", color: "#0f766e" }}
          >
            Customer Stories
          </span>
          <h2 className="fw-bold mb-3" style={{ fontSize: "2.5rem", color: "#008080" }}>
            What Our Customers Say
          </h2>
          <p className="text-muted fs-5">
            Don't just take our word for it. Here's what businesses like yours have to say about SoftSell.
          </p>
        </div>

        <div className="container">
          <div className="row justify-content-center g-4">
            {testimonials.map((t, i) => (
              <div className="col-md-6" key={i}>
                <div
                  className="card h-100 border-0 shadow rounded-4 p-4"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  <div className="mb-3 text-warning fs-5">
                    {"★★★★★".split("").map((s, idx) => (
                      <span key={idx}>★</span>
                    ))}
                  </div>
                  <div className="mb-3" style={{ color: "#14b8a6", fontSize: "2rem" }}>
                    “
                  </div>
                  <p className="fst-italic text-dark mb-4" style={{ textAlign: "left", lineHeight: "1.6" }}>
                    "{t.quote}"
                  </p>
                  <div className="d-flex align-items-center mt-4">
                    <div
                      className="rounded-circle bg-secondary me-3"
                      style={{ width: "40px", height: "40px" }}
                    />
                    <div style={{ textAlign: "left" }}>
                      <div className="fw-semibold">{t.name}</div>
                      <div className="text-muted small">
                        {t.role}, {t.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Started Section with Matching Boxes */}
      <section id="testimonials" style={{ backgroundColor: "#f8fefb" }} className="py-5">
        <div className="container">
          <div className="row align-items-stretch">
            {/* Get Started Box */}
            <div className="col-lg-6 mb-4 mb-lg-0 d-flex">
              <div className="card border-0 shadow rounded-4 p-4 p-lg-5 w-100">
                <div className="card-body d-flex flex-column">
                  <h2 className="fw-bold mb-3" style={{ color: "#008080" }}>Get Started Today</h2>
                  <h3 className="mb-4" style={{ color: "#4b5563" }}>Ready to Sell Your Licenses?</h3>
                  <p className="text-muted mb-4">
                    Fill out the form and one of our license specialists will contact you within 24 hours with a valuation.
                  </p>

                  {/* Steps */}
                  <div className="mb-4 flex-grow-1">
                    <div className="d-flex align-items-start mb-3">
                      <div className="me-3">
                        <div className="rounded-circle d-flex align-items-center justify-content-center" 
                            style={{ width: "36px", height: "36px", backgroundColor: "#d1fae5", color: "#14b8a6", fontSize: "1rem", fontWeight: "bold" }}>
                          1
                        </div>
                      </div>
                      <div>
                        <h4 className="h5 mb-0">Complete the form with your license details</h4>
                      </div>
                    </div>
                    
                    <div className="d-flex align-items-start mb-3">
                      <div className="me-3">
                        <div className="rounded-circle d-flex align-items-center justify-content-center" 
                            style={{ width: "36px", height: "36px", backgroundColor: "#d1fae5", color: "#14b8a6", fontSize: "1rem", fontWeight: "bold" }}>
                          2
                        </div>
                      </div>
                      <div>
                        <h4 className="h5 mb-0">Receive a valuation within 24 hours</h4>
                      </div>
                    </div>
                    
                    <div className="d-flex align-items-start">
                      <div className="me-3">
                        <div className="rounded-circle d-flex align-items-center justify-content-center" 
                            style={{ width: "36px", height: "36px", backgroundColor: "#d1fae5", color: "#14b8a6", fontSize: "1rem", fontWeight: "bold" }}>
                          3
                        </div>
                      </div>
                      <div>
                        <h4 className="h5 mb-0">Accept the offer and get paid</h4>
                      </div>
                    </div>
                  </div>

                  {/* Satisfaction Guarantee */}
                  <div className="p-4 rounded-3 mt-auto" style={{ backgroundColor: "#ecfdf5" }}>
                    <h4 className="h5 mb-2">Satisfaction Guarantee</h4>
                    <p className="mb-0">
                      If you're not satisfied with our valuation, we'll match any legitimate competitor's offer.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Box */}
            <div className="col-lg-6 d-flex">
              <div className="card border-0 shadow rounded-4 p-4 p-lg-5 w-100">
                <div className="card-body">
                  <h3 className="card-title mb-4" style={{ color: "#008080" }}>Contact Us</h3>
                  <p className="text-muted mb-4">
                    Fill out the form below to get started with your license valuation.
                  </p>
                  
                  <form>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Name</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        placeholder="John Doe" 
                        defaultValue="John Doe"
                      />
                    </div>
                    
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        placeholder="john@example.com" 
                        defaultValue="john@example.com"
                      />
                    </div>
                    
                    <div className="mb-3">
                      <label htmlFor="company" className="form-label">Company</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="company" 
                        placeholder="Acme Inc." 
                        defaultValue="Acme Inc."
                      />
                    </div>
                    
                    <div className="mb-3">
                      <label htmlFor="licenseType" className="form-label">License Type</label>
                      <select className="form-select" id="licenseType">
                        <option>Select license type</option>
                        <option>Microsoft Office</option>
                        <option>Adobe Creative Cloud</option>
                        <option>AutoCAD</option>
                        <option>Other</option>
                      </select>
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="message" className="form-label">Message</label>
                      <textarea 
                        className="form-control" 
                        id="message" 
                        rows="4"
                        placeholder="Please provide details about your licenses (quantity, expiration date, etc.)"
                      ></textarea>
                    </div>
                    
                   <button 
                        type="submit" 
                        className="btn w-100 py-2 mb-3 fw-semibold"
                        style={{ 
                            backgroundColor: "#d6f5e7",
                            borderColor: "#d6f5e7",
                            color: "#000000",
                            transition: "all 0.3s ease",
                            transform: "scale(1)",
                            boxShadow: "none"
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "scale(1.03)";
                            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                            e.currentTarget.style.boxShadow = "none";
                        }}
                        >
                        Get a Quote
                    </button>
                    
                    <p className="text-muted small">
                      By submitting this form, you agree to our Privacy Policy and Terms of Service.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;