import { motion } from "framer-motion";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/favicon.ico';

export default function HeroSection() {
  return (
    <>
      {/* Navbar */}
      <nav className="bg-white shadow-sm px-4 px-md-5 py-3 sticky-top">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-2"> {/* Container for logo and name */}
              <img 
                src={logo} // Assuming your favicon.ico is in the public directory
                alt="SoftSell Logo" 
                height="30" // Adjust as needed
                width="30"  // Adjust as needed
              />
              <h5
                className="mb-0 fw-bold cursor-pointer"
                style={{
                  color: '#20c997',        // Mint green
                  fontWeight: '800',        // Extra bold
                  cursor: 'pointer',        // Pointer cursor on hover
                  fontSize: '2rem',          // Larger font size (~32px)
                  lineHeight: '1.2',        // Better spacing
                }}
              >
                SoftSell
              </h5>
            </div>
            <div className="d-flex gap-3">
              <button
                className="btn btn-link text-decoration-none text-dark fw-semibold hover-underline"
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              > How It Works
              </button>
              <button
                className="btn btn-link text-decoration-none text-dark fw-semibold hover-underline"
                onClick={() => document.getElementById('why-choose-us')?.scrollIntoView({ behavior: 'smooth' })}
              > Why Choose Us
              </button>
              <button
                className="btn btn-link text-decoration-none text-dark fw-semibold hover-underline"
                onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
              > Testimonials
              </button>
              <button
                className="btn btn-link text-decoration-none text-dark fw-semibold hover-underline"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact
              </button>
            </div>
            <button className="btn btn-outline-success fw-semibold rounded-pill px-3 py-2">Get Started</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-vh-100 bg-gradient-to-br from-[#f2fefb] to-[#f9fdfd] text-gray-900 py-5 px-4 px-md-5">
        <div className="container">
          <div className="row align-items-center justify-content-between gy-5 flex-column-reverse flex-md-row">

            {/* Right Text Section */}
            <div className="col-12 col-md-6 col-lg-7 text-center text-md-start">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-3"
              >
                <span className="inline-block bg-[#daf6ee] text-[#10b981] fw-semibold px-3 py-1 rounded-pill fs-sm">
                  Trusted by 500+ companies worldwide
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="display-4 fw-bolder lh-sm mb-4"
              >
                Turn Unused Software <br />
                <span className="text-[#10b981]">Licenses Into Instant Revenue</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="lead text-gray-600 mb-4"
              >
                SoftSell helps businesses recover value from unused software licenses. Our platform makes it easy to sell licenses you no longer need at the best market rates.
              </motion.p>

              <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-3 mb-4">
                <button className="btn btn-success shadow fw-semibold rounded-pill px-4 py-3">Sell My Licenses <i className="bi bi-arrow-right ms-2"></i></button>
                <button className="btn btn-outline-success fw-semibold rounded-pill px-4 py-3">Learn How It Works</button>
              </div>

              <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2 pt-3">
                {"ABCD".split("").map((char, i) => (
                  <div
                    key={i}
                    className="bg-gray-200 text-sm fw-semibold text-gray-700 rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: '28px', height: '28px', marginLeft: i === 0 ? 0 : '-8px', zIndex: 4 - i }}
                  >
                    {char}
                  </div>
                ))}
                <p className="text-gray-600 fw-medium ms-3 mb-0">
                  <span className="fw-bold text-gray-800">500+ businesses</span> recovered value with SoftSell
                </p>
              </div>
            </div>

            {/* Left Valuation Card */}
            <div className="col-12 col-md-6 col-lg-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3 shadow-lg p-4 border"
                style={{ maxWidth: '400px', margin: '0 auto' }}
              >
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h3 className="text-gray-600 fw-semibold mb-0">License Valuation</h3>
                  <span className="bg-gray-100 text-gray-600 fs-sm px-3 py-1 rounded-pill fw-semibold">License Valuation</span>
                </div>

                <div className="d-grid gap-3">
                  <LicenseCard name="Adobe Creative Cloud" type="Enterprise License" months={12} price="$1,249.99" />
                  <LicenseCard name="Microsoft Office 365" type="Business Premium" months={24} price="$899.50" />
                  <LicenseCard name="Autodesk AutoCAD" type="Professional" months={18} price="$2,150.00" />
                </div>

                <div className="bg-[#dcfef3] text-[#10b981] fw-semibold rounded-pill px-4 py-2 text-center mt-3">
                  Total Value: $4,299.49
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function LicenseCard({ name, type, months, price }) {
  return (
    <div className="border border-gray-200 rounded-2 p-3 shadow-sm">
      <h4 className="fw-semibold text-gray-800 mb-1">{name}</h4>
      <p className="fs-sm text-gray-500 mb-1">
        {type} • {months} months remaining
      </p>
      <p className="text-[#10b981] fw-bold fs-lg mb-0">{price}</p>
    </div>
  );
}