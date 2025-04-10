import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import { useState } from "react";

const ResumeButton = () => {
  const [particles, setParticles] = useState([]);

  // Function to create random sparks
  const createParticles = (event) => {
    const newParticles = Array.from({ length: 8 }).map(() => ({
      id: Math.random(),
      x: event.clientX,
      y: event.clientY,
      size: Math.random() * 6 + 4,
      duration: Math.random() * 0.8 + 0.3,
    }));
    setParticles([...particles, ...newParticles]);

    setTimeout(() => {
      setParticles([]);
    }, 800);
  };

  return (
    <div className="relative flex">
      {/* Sparks Effect */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bg-white rounded-full"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
          }}
          initial={{ opacity: 1, scale: 1 }}
          animate={{
            opacity: 0,
            scale: 2,
            x: (Math.random() - 0.5) * 50,
            y: (Math.random() - 0.5) * 50,
          }}
          transition={{ duration: p.duration, ease: "easeOut" }}
        />
      ))}

      {/* Resume Download Button */}
      <motion.a
        href="/resume.pdf"
        download
        className="flex items-center gap-3 px-6 py-3 text-xl font-semibold text-white bg-gradient-to-r from-blue-500 to-teal-500 rounded-full shadow-lg transition-all duration-300 relative overflow-hidden"
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 0px 20px rgba(0, 201, 255, 0.9)",
          textShadow: "0px 0px 12px rgba(255,255,255,0.9)",
        }}
        whileTap={{ scale: 0.9 }}
        onClick={createParticles}
      >
        <motion.span
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 0.6 }}
          className="text-2xl"
        >
          <FaDownload />
        </motion.span>
        Download Resume
      </motion.a>
    </div>
  );
};

export default ResumeButton;
