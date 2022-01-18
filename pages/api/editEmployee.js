import {updateEmployee} from '/lib/queries'

export default async function editEmployee(req, res) {
    // console.log("API data", JSON.parse(req.body).id);
    const employeeInfo = await updateEmployee(JSON.parse(req.body).id);
    res.json(employeeInfo);
}
