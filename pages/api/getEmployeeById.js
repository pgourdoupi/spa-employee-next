import {getEmployeeById} from '/lib/queries'

export default async function getEmployeeDataById(req, res) {
    const employeeInfoById = await getEmployeeById(JSON.parse(req.body).id);
    res.json(employeeInfoById);
}