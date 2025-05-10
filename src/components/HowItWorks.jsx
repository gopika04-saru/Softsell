import React from "react";
import { motion } from "framer-motion";
import { FaUpload, FaDollarSign, FaMoneyCheck } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const stepsData = [
  {
    icon: <FaUpload size={30} />,
    title: "Upload License",
    description: "Upload your software license details through our secure portal.",
    stepNumber: 1,
  },
  {
    icon: <FaDollarSign size={30} />,
    title: "Get Valuation",
    description: "Our AI-powered system provides an instant market valuation for your license.",
    stepNumber: 2,
  },
  {
    icon: <FaMoneyCheck size={30} />,
    title: "Get Paid",
    description: "Accept the offer and receive payment within 48 hours via your preferred method.",
    stepNumber: 3,
  },
];

const HowItWorks = () => (
  <section id="how-it-works" className="py-5 text-center" style={{ backgroundColor: "#f8fefb" }}>
    <div className="container">
      <h2 className="h3 fw-bold mb-4" style={{ color: "#008080" }}>
        How It Works
      </h2>
      <p className="lead mb-5" style={{ color: "#008080" }}>
        Our streamlined process makes selling your unused software licenses quick and hassle-free.
      </p>

      <div className="row justify-content-center g-4">
        {stepsData.map((step, index) => (
          <motion.div key={index} className="col-md-4" whileHover={{ scale: 1.05 }}>
            <div
              className="position-relative rounded shadow-lg p-4 d-flex flex-column align-items-center"
              style={{
                backgroundColor: "#ffffff",
                borderTop: "4px solid #20c997",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
              }}
            >
              <div
                className="rounded-circle p-3 mb-3 d-flex align-items-center justify-content-center"
                style={{
                  backgroundColor: "#d6f5e7",
                  color: "#006d77",
                }}
              >
                {step.icon}
              </div>
              <h3 className="h6 fw-semibold mb-2" style={{ color: "#004d4d" }}>
                {step.title}
              </h3>
              <p className="small text-center mb-4" style={{ color: "#336666" }}>
                {step.description}
              </p>

              <div
                className="rounded-circle d-flex align-items-center justify-content-center mt-auto"
                style={{
                  width: "36px",
                  height: "36px",
                  backgroundColor: "#20c997",
                  color: "#ffffff",
                  fontWeight: "bold",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.25)",
                }}
              >
                {step.stepNumber}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Final badge-style message */}
      <div
        className="mt-5 px-4 py-3 rounded-4 shadow-sm d-inline-block fw-medium"
        style={{
          backgroundColor: "#d6f5e7",
          color: "#0f5132",
          fontSize: "1rem",
          whiteSpace: "nowrap",
        }}
      >
        Most licenses are valued and sold within{" "}
        <span style={{ fontWeight: "bold" }}>7 days</span>. Our platform supports all major software vendors.
      </div>
    </div>
  </section>
);

export default HowItWorks;
