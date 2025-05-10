import { FaShieldAlt, FaBolt, FaDollarSign, FaClock } from "react-icons/fa";

const features = [
  {
    icon: <FaDollarSign size={24} className="text-success" />,
    title: "Best Market Rates",
    description:
      "Our AI-powered valuation ensures you get the highest possible value for your licenses.",
  },
  {
    icon: <FaShieldAlt size={24} className="text-success" />,
    title: "Secure Transactions",
    description:
      "End-to-end encryption and secure payment processing protect your data and finances.",
  },
  {
    icon: <FaClock size={24} className="text-success" />,
    title: "Fast Processing",
    description:
      "From valuation to payment, our streamlined process takes just days, not weeks.",
  },
  {
    icon: <FaBolt size={24} className="text-success" />,
    title: "Instant Valuation",
    description:
      "Get an immediate estimate of your license value with our real-time valuation tool.",
  },
];

const WhyChooseUs = () => (
  <section id="why-choose-us" className="py-5" style={{ background: '#f8fefb' }}>
    <div className="container">
      <div className="text-center mb-5">
        <span className="badge bg-success-subtle text-success mb-2">Our Advantages</span>
        <h2
          className="fw-bold mb-3"
          style={{ color: '#008080' }}
        >
          Why Choose Us
        </h2>
        <p className="text-secondary">
          SoftSell offers unique advantages that make us the preferred choice for software license resale.
        </p>
      </div>
      <div className="row g-4">
        {features.map((feature, index) => (
          <div className="col-12 col-sm-6 col-lg-3" key={index}>
            <div
              className="card h-100 border-0 rounded-4 text-center p-4 shadow-sm"
              style={{
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.03)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.06)';
              }}
            >
              <div className="d-flex justify-content-center mb-3">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: '56px',
                    height: '56px',
                    backgroundColor: '#d6f5e7',
                  }}
                >
                  {feature.icon}
                </div>
              </div>
              <h5 className="fw-semibold text-dark">{feature.title}</h5>
              <p className="text-muted small">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
