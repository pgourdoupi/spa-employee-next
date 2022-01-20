const {Pool,Client} = require('pg');
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '12345',
    port: 5432,
})

const getEmployees = async () => {
    const client = await pool.connect();
    let results;
    try {
        results = await client.query('SELECT * FROM Employee ORDER BY id ASC');
    } catch (e) {
        console.log(e);
    }finally{
    client.release();
    }
    return results.rows;
}

const getEmployeeById = async (id) => {
    const timi = id;
    const client = await pool.connect();
    let result;
    try {
        result = await client.query('SELECT * FROM Employee WHERE id = $1', [timi]);
    } catch (e) {
        console.log(e);
    }finally{
        client.release();
    }
    return result.rows;
}

const createEmployee = async (data) => {
    const client = await pool.connect();
    const values = [
                    data.last_name === undefined? '' : data.last_name,
                    data.first_name === undefined? '' : data.first_name,
                    data.is_active === undefined? '' : data.is_active,
                    data.date_of_birth === undefined? '' : data.date_of_birth
                ]
    console.log("Edw einai ta values", values);
    let result;
    try{
        result = await client.query('INSERT INTO Employee (last_name ,first_name , is_active , date_of_birth ) VALUES ($1,$2,$3,$4)', [data.last_name, data.first_name, data.is_active, data.date_of_birth]);

    }catch (e) {
        console.log(e);
    }finally{
        client.release();
    }
    console.log(result);
    return result;
     }


const updateEmployee = async (data) => {
    const client = await pool.connect();
    const values = [
                    data.last_name === undefined? '' : data.last_name,
                    data.first_name === undefined? '' : data.first_name,
                    data.is_active === undefined? '' : data.is_active,
                    data.date_of_birth === undefined? '' : data.date_of_birth
                ]
    console.log("Edw einai ta values", values);
    let results;
    try {
        results = await client.query('UPDATE Employee SET last_name = $1, first_name = $2, is_active = $3, date_of_birth = $4 WHERE id = $5',
            [data.last_name, data.first_name, data.is_active, data.date_of_birth, data.id]);
    }catch (e) {
        console.log(e);
    }finally{
        client.release();
    }
    console.log(results);
    return results;
}

const deleteEmployee = async (data) => {
    const value = data;
    console.log(value);
    const client = await pool.connect();
    let result;
    try{
         result = await client.query('DELETE FROM Employee WHERE id = $1', [value]);
    }catch(e){
        console.log(e);
    }finally{
        client.release();
    }
    console.log(result);
    return result;
}

module.exports = {
    getEmployees,
    getEmployeeById,
    createEmployee,
    updateEmployee,
    deleteEmployee,
}