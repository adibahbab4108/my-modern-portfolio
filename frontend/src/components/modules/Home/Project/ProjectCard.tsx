import { ProjectType } from "@/type";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";

export default function ProjectCard({
  id,
  title,
  description,
  image,
  techStack,
  live,
  frontend,
  backend,
  className,
}: ProjectType) {
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden ${className}`}
    >
      <div className="p-4 relative">
        <Image
          src={image}
          alt={title}
          width={400}
          height={200}
          className="w-full h-60 md:h-80 object-cover rounded-lg "
        />
        <div className="absolute  inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6 m-6 rounded-lg">
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-justify">
            {description}
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between m-4">
        <div className=" my-2">
          <h2 className="text-2xl font-bold mb-2 text-start">{title}</h2>
        </div>
        <div className="text-start border-b border-gray-700 pb-4">
          {techStack.map((tech) => (
            <Image
              key={tech}
              alt={tech}
              width={25}
              height={25}
              className="inline-block rounded-full -m-0.5 hover:mr-2 transition-all duration-500 dark:bg-gray-700 bg-gray-200 p-1 "
              src={tech.toLowerCase()}
            />
          ))}
        </div>

        <div className="flex justify-between items-center mt-8 text-sm">
          {live && (
            <div className="flex gap-2 text-primary cursor-pointer">
              <a href={live} target="_blank" rel="noopener noreferrer">
                Live
              </a>
              <Image src={"/arrow.svg"} alt="Arrow" width={10} height={10} />
            </div>
          )}

          {frontend && backend && (
            <div className="flex justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-primary cursor-pointer">
                <BsGithub />
                <a href={frontend} target="_blank" rel="noopener noreferrer">
                  Frontend
                </a>
                <Image src={"/arrow.svg"} alt="Arrow" width={10} height={10} />
              </div>
              {" | "}
              <div className="flex items-center gap-2 text-primary cursor-pointer">
                <BsGithub />
                <a href={backend} target="_blank" rel="noopener noreferrer">
                  Backend
                </a>
                <Image src={"/arrow.svg"} alt="Arrow" width={10} height={10} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
