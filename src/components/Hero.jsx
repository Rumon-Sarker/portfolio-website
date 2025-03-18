import { motion } from "framer-motion";

import { styles } from "../styles";
import myResume from "../assets/company/Shakib Resume.pdf";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Hero = () => {

  const handleDownload = () => {
    // Replace 'myResumeURL' with the actual URL of your resume
    const myResumeURL = `${myResume}`;
    const link = document.createElement("a");
    link.href = myResumeURL;
    link.setAttribute("target", "_blank");
    link.setAttribute("download", "resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // typeWriter 
  const [text] = useTypewriter({
    words: ["Full Satck Developer", 'Flutter Developer', 'UI/UX Enthusiast', 'Nextjs Developer!'],
    loop: 0,
    typeSpeed: 20,
    deleteSpeed: 30,
    delaySpeed: 1500

  });

  return (
    <section id="home" className={`relative w-full h-screen mx-auto`}>

      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/bg _vedio.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div
        className={`absolute inset-0 lg:top-[120px] md:top-[100px] top-[90px] container mx-auto ${styles.paddingX} flex flex-row items-start md:gap-5 gap-2`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="space-y-8">
          {/* Main Heading */}
          <div className="flex flex-col md:gap-5 gap-2 lg:pt-20 md:pt-8 pt-0">

            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915EFF]">Kazi Shakib</span>
            </h1>
            <h3 className="lg:text-5xl md:text-3xl text-2xl font-bold text-white">
              <span className="">a {text}</span>
              <Cursor cursorColor='#915EFF' />
            </h3>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-4 text-gray-200 md:text-[17px] text-lg max-w-3xl leading-[30px]"
          >
            I am a software engineer with 2.6 years of experience, specializing in mobile app development using Flutter.
            I have built apps for both Android and iOS, focusing on making them fast and easy to use.
            {/* <br className="sm:block hidden" />
            <br className="sm:block hidden" />
            I also have some experience with Native Android development and a strong understanding of Java,
            object-oriented programming, data structures, and algorithms.
            I enjoy solving problems and learning new technologies to improve my skills and deliver high-quality software. */}
          </motion.p>




          {/* Social Media Links with Advanced Animations */}
          <motion.div
            className="flex gap-5 md:mt-5 mt-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {[
              { icon: <FaFacebook />, href: "https://facebook.com", color: "#1877F2" },
              { icon: <FaLinkedin />, href: "https://linkedin.com", color: "#0077B5" },
              { icon: <FaGithub />, href: "https://github.com", color: "#FFFFFF" },
              { icon: <FaTwitter />, href: "https://github.com", color: "#FFFFFF" },

            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200 lg:text-3xl md:text-2xl text-xl hover:text-blue-600"
                whileHover={{
                  scale: 1.3,
                  rotate: 6,
                  textShadow: `0px 0px 10px ${item.color}`,
                  boxShadow: `0px 0px 15px ${item.color}`,
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.icon}
              </motion.a>
            ))}
          </motion.div>


          <div className="flex lg:mt-7 md:mt-4 mt-3 gap-3">
            <motion.div
              className=""
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.button
                className="lg:mt-2 mt-1 p-2 rounded border-2 text-black font-bold relative overflow-hidden bg-white"
                style={{ cursor: "pointer" }}
                whileHover={{
                  scale: 1.1,
                  borderColor: "#00C9FF",
                  boxShadow: "0px 0px 10px #00C9FF",
                }}
                whileTap={{ scale: 0.9 }}
              >
                View Projects
                {/* Border Animation */}
                <motion.span
                  className="absolute inset-0 rounded border-2 border-transparent"
                  animate={{
                    borderColor: ["#00C9FF", "#915EFF", "#FF00FF", "#00C9FF"],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "linear",
                  }}
                />
              </motion.button>
            </motion.div>
            <motion.div
              className=""
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.button
                className="lg:mt-2 mt-1 p-2 rounded border-2 text-black font-bold relative overflow-hidden bg-white"
                style={{ cursor: "pointer" }}
                onClick={handleDownload}
                whileHover={{
                  scale: 1.1,
                  borderColor: "#00C9FF",
                  boxShadow: "0px 0px 10px #00C9FF",
                }}
                whileTap={{ scale: 0.9 }}
              >
                Contact Me
                {/* Border Animation */}
                <motion.span
                  className="absolute inset-0 rounded border-2 border-transparent"
                  animate={{
                    borderColor: ["#00C9FF", "#915EFF", "#FF00FF", "#00C9FF"],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "linear",
                  }}
                />
              </motion.button>
            </motion.div>
          </div>
        </div>

      </div>

      {/* <ComputersCanvas /> */}

      <div className="absolute bottom-10 lg:bottom-32 md:bottom-32  w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
