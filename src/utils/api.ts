import {
  education,
  experience,
  general,
  project,
  skill,
} from "./../components/types.d";
import axios from "axios";

const endpoint = !!(process.env.NODE_ENV === "production")
  ? "https://evve.herokuapp.com/api/notion/rohan"
  : "https://evve.herokuapp.com/api/notion/rohan";

export async function getGeneral() {
  const { data } = await axios.get(endpoint + "/general");
  return data as general;
}
export async function getProjects() {
  const { data } = await axios.get(endpoint + "/projects");
  return data as project[];
}
export async function getExperience() {
  const { data } = await axios.get(endpoint + "/experience");
  return data.reverse() as experience[];
}
export async function getSkills() {
  const { data } = await axios.get(endpoint + "/skills");
  return data as skill[];
}
export async function getEducation() {
  const { data } = await axios.get(endpoint + "/education");
  return data as education[];
}
export async function wakeupServer() {
  return Number(!!(await axios.get("https://evve.herokuapp.com/api/notion/")));
}
