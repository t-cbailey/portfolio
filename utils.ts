import server from "./Api";
import { Msg } from "./types/CustomTypes";

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

export const postMessage = (msg: Msg) => {
  return server
    .post("/contact", msg)
    .then((result) => {
      return result.data;
    })
    .catch((err) => {
      return err;
    });
};
