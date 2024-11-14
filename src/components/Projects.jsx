import { forwardRef } from "react";
import { projectList } from "../utilities/ProjectList";

const Projects = forwardRef((_, ref) => {
  return (
    <section
      ref={ref}
      className=" text-darkSlateGreen max-w-7xl mx-auto px-4 min-h-dvh  flex flex-col gap-4 justify-center"
    >
      <h1 className="text-3xl text-deepBlue font-bold mb-6 lg:mb-10 lg:text-5xl text-deepCyan pt-20">
        Projects
      </h1>
      <div className="flex flex-col lg:flex-row flex-wrap gap-4">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="border-2 border-deepCyan rounded-lg basis-[calc(50%-8px)]"
          >
            <img
              src={project.image}
              alt={project.name}
              className="rounded-t-md"
            />
            <div className="p-5">
              <div className="flex border-b border-b-deepCyan mb-2 items-center justify-between">
                <h2 className="text-xl font-bold mb-2 lg:text-2xl ">
                  {project.name}
                </h2>
                <a
                  href={project.openLink.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="open project link"
                >
                  {project.openLink.icon}
                </a>
              </div>

              <p className="text-xs md:text-lg mb-4 sm:text-sm text-justify lg:min-h-44">
                {project.description}
              </p>
              <div className="flex flex-row justify-between items-center flex-wrap gap-6">
                <div className="flex gap-2">
                  {project.techsUsed.techNames.map((tech, idx) => (
                    <div
                      key={idx}
                      className="flex items-center border border-deepCyan p-2 rounded-lg text-sm"
                    >
                      <div className="mr-1">
                        {project.techsUsed.techIcons[idx]}
                      </div>
                      <p>{tech}</p>
                    </div>
                  ))}
                </div>
                <a
                  className="cursor-pointer flex gap-2 border border-deepCyan p-2 rounded-lg text-sm items-center bg-deepCyan text-black"
                  href={project.github.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source Code {project.github.icon}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Projects;
