import server from "./Api";
import { Msg } from "./types/CustomTypes";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "./Firebase";

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

export const getFile = (fileName: string) => {
  return getDownloadURL(ref(storage, fileName))
    .then((url) => {
      return url;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getFileRefs = (folderName: string) => {
  const listRef = ref(storage, folderName);
  const linkArr: string[] = [];
  return listAll(listRef)
    .then((res) => {
      res.items.forEach((itemRef) => {
        linkArr.push(itemRef.fullPath);
      });
      return linkArr;
    })
    .catch((error) => {
      console.log(error);
    });
};
