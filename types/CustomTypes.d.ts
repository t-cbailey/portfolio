export interface Project {
  name: string;
  imgURLmp4: string;
  imgURLwebm: string;
  description: string;
  githubFE: string;
  githubBE: string;
  livelink: string;
  stack: string;
}
export interface ProjectRes extends Project {
  id: string;
}

export interface Msg {
  name: string;
  email: string;
  subject: string;
  messageBody: string;
}

export interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}
export interface NavProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
  currentPage: string;
}
export interface AboutProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}
