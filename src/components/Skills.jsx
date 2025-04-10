import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaFire, FaDatabase, FaGitAlt, FaDocker, FaAws, FaUsers, FaComments, FaLightbulb, FaClock } from "react-icons/fa";
import { SiFlutter, SiAdobe, SiFigma } from "react-icons/si";

const Skills = () => {
    const [selectedCategory, setSelectedCategory] = useState("Frontend");

    const skills = {
        Frontend: [
            { name: "React", progress: 90, icon: <FaReact className="text-4xl text-blue-500" /> },
            { name: "Flutter", progress: 85, icon: <SiFlutter className="text-4xl text-blue-400" /> },
            { name: "HTML", progress: 95, icon: <FaHtml5 className="text-4xl text-orange-500" /> },
            { name: "CSS", progress: 90, icon: <FaCss3Alt className="text-4xl text-blue-600" /> },
            { name: "JavaScript", progress: 90, icon: <FaJsSquare className="text-4xl text-yellow-400" /> },
        ],
        Backend: [
            { name: "Node.js", progress: 85, icon: <FaNodeJs className="text-4xl text-green-600" /> },
            { name: "Firebase", progress: 80, icon: <FaFire className="text-4xl text-yellow-500" /> },
            { name: "MongoDB", progress: 70, icon: <FaDatabase className="text-4xl text-green-500" /> },
        ],
        "DevOps / Tools": [
            { name: "Docker", progress: 70, icon: <FaDocker className="text-4xl text-blue-500" /> },
            { name: "AWS", progress: 65, icon: <FaAws className="text-4xl text-orange-500" /> },
            { name: "Git", progress: 90, icon: <FaGitAlt className="text-4xl text-red-500" /> },
        ],
        "UI/UX": [
            { name: "Figma", progress: 85, icon: <SiFigma className="text-4xl text-purple-500" /> },
            { name: "Adobe XD", progress: 75, icon: <SiAdobe className="text-4xl text-pink-500" /> },
        ],
    };

    return (
        <section id="skills" className="bg-white dark:bg-gray-900 py-16">
            <div className="container mx-auto px-6">
                <div className="text-center">
                    <h2 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400">
                        Skills
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                        A showcase of my technical and soft skills with a dynamic UI.
                    </p>
                </div>
                <div className="mt-12 flex flex-wrap justify-center gap-4">
                    {Object.keys(skills).map((category) => (
                        <motion.button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-6 py-3 rounded-full text-sm font-semibold transition-all ${selectedCategory === category
                                ? "bg-blue-500 text-white dark:bg-blue-600 shadow-lg"
                                : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"}
                                `}
                        >
                            {category}
                        </motion.button>
                    ))}
                </div>
                <motion.div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skills[selectedCategory].map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-4">
                                    {skill.icon}
                                    <span className="text-lg font-medium text-gray-900 dark:text-white">
                                        {skill.name}
                                    </span>
                                </div>
                                {/* Percentage Number */}
                                <span className="text-lg font-semibold text-gray-900 dark:text-white">
                                    {skill.progress}%
                                </span>
                            </div>
                            <div className="relative w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${skill.progress}%` }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                    className="absolute h-3 rounded-full bg-gradient-to-r from-blue-500 to-teal-400"
                                ></motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;