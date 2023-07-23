export interface Project {
  name: string;
  imgURL: string;
  description: string;
}
export interface ProjectRes extends Project {
  id: string;
}
