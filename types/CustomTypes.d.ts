export interface Project {
  name: string;
  imgURL: string;
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
