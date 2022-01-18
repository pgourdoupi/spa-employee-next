import {getEmployees} from '/lib/queries'

export default async function readEmployees(req, res) {
    const employeeInfo = await getEmployees();
    res.json(employeeInfo);
}







