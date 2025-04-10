import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { github } from "../assets";

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
}) => {
  return (
    <div className="cursor-pointer bg-white p-5 rounded-2xl  w-full shadow-lg dark:bg-gray-900 dark:shadow-xl overflow-hidden">
      {/* Image Container with Scroll Effect */}
      <div className="relative w-full h-[230px] overflow-hidden rounded-2xl">
        <img
          src={image}
          alt="project_image"
          className="w-full h-full object-cover rounded-2xl transition-transform duration-500 hover:translate-y-[-50%]"
        />

        {/* GitHub Link */}
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer dark:bg-gray-800"
          >
            <img
              src={github}
              alt="source code"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="mt-5">
        <h3 className="text-gray-900 font-bold text-[24px] dark:text-white">{name}</h3>
        <p className="mt-2 text-gray-600 text-[14px] dark:text-gray-300">{description}</p>
      </div>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p
            key={`${name}-${tag.name}`}
            className={`text-[14px] ${tag.color} dark:text-gray-400`}
          >
            #{tag.name}
          </p>
        ))}
      </div>

      {/* View Details Button */}
      <div className="mt-4 flex justify-between items-center">
        <a
          href={live_demo_link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-blue-500 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600 transition-all dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          <FaExternalLinkAlt className="text-sm" />
          View Details
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;