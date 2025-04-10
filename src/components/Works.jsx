import { useState } from "react";
import { projects } from "../constants";
import { styles } from "../styles";
import { FaList, FaTh } from "react-icons/fa";
import ProjectCard from "./ProjectCard";

const Works = () => {
  const [filter, setFilter] = useState("All");
  const [viewMode, setViewMode] = useState("grid");

  const filteredProjects = projects.filter((project) => {
    if (filter === "All") return true;
    return project.category === filter;
  });

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="container mx-auto px-6 py-16">
        {/* Header */}
        <div>
          <p className={`${styles.sectionSubText} text-black dark:text-gray-200`}>My work</p>
          <h2 className={`${styles.sectionHeadText} text-black dark:text-white`}>Projects</h2>
        </div>

        {/* Description */}
        <div className="w-full flex">
          <p className="mt-3 text-gray-600 text-[17px] max-w-3xl leading-[30px] dark:text-gray-300">
            Following projects showcase my skills and experience through
            real-world examples of my work. Each project is briefly described with
            links to code repositories and live demos. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-8 flex flex-wrap gap-4">
          {["All", "Mobile Apps", "Websites", "Other"].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                filter === category
                  ? "bg-blue-500 text-white dark:bg-blue-600"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* View Mode Toggle */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 rounded-lg mr-2 ${
              viewMode === "grid"
                ? "bg-blue-500 text-white dark:bg-blue-600"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
            }`}
          >
            <FaTh className="text-lg" />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`p-2 rounded-lg ${
              viewMode === "list"
                ? "bg-blue-500 text-white dark:bg-blue-600"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
            }`}
          >
            <FaList className="text-lg" />
          </button>
        </div>

        {/* Project Display */}
        <div
          className={`mt-8 ${
            viewMode === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              : "space-y-6"
          }`}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;