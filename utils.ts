import server from "./Api";

export const getProjects = () => {
  return server
    .get(`projects`)
    .then((result) => {
      return result;
    })
    .catch((err) => err);
};

export const getSingleProject = (project_id: string | undefined) => {
  return server
    .get(`projects/${project_id}`)
    .then((result) => {
      return result.data;
    })
    .catch((err) => err);
};
