import {deleteEmployee} from '/lib/queries'

export default async function delEmployee(req, res) {
    // console.log("from API", JSON.parse(req.body).id);
    const deleteAnEmployee = await deleteEmployee(JSON.parse(req.body).id);
    res.json(deleteAnEmployee);
}