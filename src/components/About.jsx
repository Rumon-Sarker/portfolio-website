import React from 'react';
import { motion } from 'framer-motion';
import { FaFire, FaGithub, FaGitAlt, FaFigma, FaFireAlt } from 'react-icons/fa';
import { FaDartLang, FaFlutter } from 'react-icons/fa6';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ResumeButton from './ResumeButton';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all">
      <div className="container mx-auto px-6">

        {/* Header */}
        <motion.div
          className=" mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h2 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400">
            About Me
          </h2>
          <p className="text-lg max-w-4xl">
            I’m a passionate Flutter Developer with expertise in building cross-platform mobile applications. I specialize in Flutter, Dart, and Firebase, and I’m always eager to learn new technologies and create impactful solutions.
          </p>
        </motion.div>

        {/* Two-Column Layout: Experience Timeline and Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Left Column: Experience Timeline */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-3xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400">
              Experience Timeline
            </h3>
            <div className="space-y-6">
              {/* Timeline Item 1 */}
              <div className="relative pl-8 border-l-2 border-blue-500">
                <div className="absolute -left-2.5 top-0 w-5 h-5 bg-blue-500 rounded-full"></div>
                <h4 className="text-xl font-semibold">Flutter Developer</h4>
                <p className="text-gray-600 dark:text-gray-400">ABC Company (2021 - Present)</p>
                <p className="mt-2">
                  Developed cross-platform mobile applications using Flutter and Dart, ensuring high performance and responsiveness.
                </p>
              </div>

              {/* Timeline Item 2 */}
              <div className="relative pl-8 border-l-2 border-blue-500">
                <div className="absolute -left-2.5 top-0 w-5 h-5 bg-blue-500 rounded-full"></div>
                <h4 className="text-xl font-semibold">Junior Developer</h4>
                <p className="text-gray-600 dark:text-gray-400">XYZ Startup (2019 - 2021)</p>
                <p className="mt-2">
                  Worked on small-scale projects, gaining hands-on experience with Flutter, Firebase, and Git.
                </p>
              </div>

              {/* Timeline Item 3 */}
              <div className="relative pl-8 border-l-2 border-blue-500">
                <div className="absolute -left-2.5 top-0 w-5 h-5 bg-blue-500 rounded-full"></div>
                <h4 className="text-xl font-semibold">Intern</h4>
                <p className="text-gray-600 dark:text-gray-400">Tech Solutions (2018 - 2019)</p>
                <p className="mt-2">
                  Assisted in developing mobile applications and learned the basics of Flutter and Dart.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Skills with Progress Bars */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-3xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400">
              Technical Skills
            </h3>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
              {/* Flutter */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl">
              <div className="flex items-center space-x-4 mb-4">
                <FaFlutter className="text-4xl text-blue-500" />
                <div>
                  <h3 className="text-2xl font-semibold">Flutter</h3>
                  <p className="text-gray-600 dark:text-gray-400">90%</p>
                </div>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div
                  className="bg-blue-500 h-2.5 rounded-full"
                  style={{ width: '90%' }}
                ></div>
              </div>
            </div>

            {/* Dart */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl">
              <div className="flex items-center space-x-4 mb-4">
                <FaDartLang className="text-4xl text-green-500" />
                <div>
                  <h3 className="text-2xl font-semibold">Dart</h3>
                  <p className="text-gray-600 dark:text-gray-400">85%</p>
                </div>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div
                  className="bg-green-500 h-2.5 rounded-full"
                  style={{ width: '85%' }}
                ></div>
              </div>
            </div>

            {/* Firebase */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl">
              <div className="flex items-center space-x-4 mb-4">
                <FaFire className="text-4xl text-orange-500" />
                <div>
                  <h3 className="text-2xl font-semibold">Firebase</h3>
                  <p className="text-gray-600 dark:text-gray-400">80%</p>
                </div>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div
                  className="bg-orange-500 h-2.5 rounded-full"
                  style={{ width: '80%' }}
                ></div>
              </div>
            </div>

            {/* Git */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl">
              <div className="flex items-center space-x-4 mb-4">
                <FaGitAlt className="text-4xl text-purple-500" />
                <div>
                  <h3 className="text-2xl font-semibold">Git</h3>
                  <p className="text-gray-600 dark:text-gray-400">75%</p>
                </div>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div
                  className="bg-purple-500 h-2.5 rounded-full"
                  style={{ width: '75%' }}
                ></div>
              </div>
            </div>

            {/* UI/UX Design */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl">
              <div className="flex items-center space-x-4 mb-4">
                <FaFigma className="text-4xl text-red-500" />
                <div>
                  <h3 className="text-2xl font-semibold">UI/UX Design</h3>
                  <p className="text-gray-600 dark:text-gray-400">70%</p>
                </div>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div
                  className="bg-red-500 h-2.5 rounded-full"
                  style={{ width: '70%' }}
                ></div>
              </div>
            </div>
          </div>
          </motion.div>
        </div>

        {/* Resume Download Button */}

        <ResumeButton/>
        
      </div>
    </section>
  );
};

export default About;