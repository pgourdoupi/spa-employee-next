import {updateEmployee} from '/lib/queries'

export default async function editEmployee(req, res) {
    console.log("API data", JSON.parse(JSON.stringify(req.body)));
    const employeeInfos = await updateEmployee(JSON.parse(JSON.stringify(req.body)));
    res.json(employeeInfos);
}
