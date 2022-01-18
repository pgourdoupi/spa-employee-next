import {createEmployee} from '/lib/queries'

export default async function insertEmployee(req, res) {
    const employeeInfo = await createEmployee(req.body);
    res.send({data: "true"});
}
