import { useRouter } from "next/router";
import React from "react";
import { projects } from "~/utils/config";
const ProjectsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  if (projects[parseInt(id?.toString()!) - 1] === undefined) return <>poo</>;
  return <p>Post: {id}</p>;
};

export default ProjectsPage;
