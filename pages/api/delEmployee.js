import {deleteEmployee} from '/lib/queries'

export default async function delEmployee(req, res) {
    const deleteAnEmployee = await deleteEmployee(JSON.parse(req.body).id);
    res.json(deleteAnEmployee);
}