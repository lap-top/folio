import Image from "next/image";
import React from "react";
import { ProjectCardItem } from "~/utils/config";
const ProjectCard: React.FC<ProjectCardItem> = (item) => {
  return (
    <div className="grid grid-flow-col  space-x-2 overflow-hidden rounded-xl border border-blue-800">
      <Image
        className="h-48 w-48  border border-blue-800 object-cover"
        src={item.image}
        alt={item.name}
        width={100}
        height={100}
      />
      <div className="w-80 space-y-4 p-4 font-OpenSans">
        <h2 className=" text-4xl leading-none">{item.name}</h2>
        <p>{item.desc}</p>
        <p className="text-sm font-semibold ">{item.tech}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
