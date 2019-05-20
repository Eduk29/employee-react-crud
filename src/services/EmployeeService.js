import { URL_API } from "./base";

export const getEmployeeList = async () => {
  const response = await fetch(`${URL_API}/employees`);
  const json = await response.json();
  return json;
};

export const postEmployee = async newEmployee => {
  const myHeaders = new Headers({
    "Content-Type": "application/json; charset=utf-8"
  });
  console.log("Post: ", newEmployee);
  const response = await fetch(`${URL_API}/employees`, {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(newEmployee)
  });
  const json = await response.json();
  return json;
};
