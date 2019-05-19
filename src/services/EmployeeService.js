import { URL_API } from './base';

export const getEmployeeList = async () => {
    const response = await fetch(`${URL_API}/employees`);
    const json = await response.json();
    return json;
}