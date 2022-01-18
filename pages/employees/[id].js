import { Form, Select, Input, Button, Layout, Menu, Breadcrumb, DatePicker } from 'antd';
import Link from 'next/link';
import {useState} from 'react';
import Image from "next/image";
import CoffeeLogo from "../../public/images/Coffee_Island_logo.jpg";
const { Header, Footer, Content } = Layout;
const Option = Select.Option;
import moment from 'moment';
import {useRouter} from 'next/router';
const FormItem = Form.Item;

 export async function getServerSideProps(context) {
    try {
        const res = await fetch(`http://localhost:3000/api/getEmployeeById`, {method: 'POST',
            body: JSON.stringify({
                id: context.params.id
            })
        })
        const data = await res.json();
        if(!data)
            return {
                notFound: true,
            }
        return {
            props:{
                data,
            },
        }}catch(e) {
        console.log(e)
    }
}

export default function update(props) {
    const router = useRouter();

    const data = props.data[0];

    const [Last, setLast] = useState(data.last_name);
    const [First, setFirst] = useState(data.first_name);
    const [Act, setAct] = useState(data.is_active);
    const [date, setDate] = useState(data.date_of_birth);
    const [id] = useState(data.id);
    const dateFormat = 'YYYY/MM/DD';


    async function updateEmployee(){
        try{
            const res = await fetch(`http://localhost:3000/api/editEmployee`, {method: 'PUT',
                headers:{
                    'Accept':'application/json',
                    'Content-type':'application/json'
                },
                body: JSON.stringify({
                    last_name:Last,
                    first_name:First,
                    is_active:data.is_active,
                    date_of_birth:date,
                    id:id
                })
            });
            router.push("/employees/listEmployees")
        }catch(e){
            console.log(e)
        }
    }

    function changeActivity(value) {
        setAct({...Act,Act:value});
    }
    function changeDate(date, dateString) {
        setDate({...date,Date:dateString});
    }
    return (
        <Layout>
            <Header style={{position: "dynamic", padding: 15, width: '100%'}}>
                <div className="logo">
                    <a><Image src={CoffeeLogo} height={40} width={40} alt="coffee logo"/> Coffee Island</a>
                </div>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="2">
                        <Link href="/aboutUs">
                            Σχετικά με εμάς
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link href="/employees">
                            Οι υπάλληλοί μας
                        </Link>
                    </Menu.Item>
                </Menu>
            </Header>
            <Content className="site-layout" style={{padding: '0 50px', marginTop: 50}}>
                <div className="site-layout-background" style={{padding: 100, minHeight: 100}}>
                    <Breadcrumb style={{ margin: '16px 0' }}/>
                    <div className="site-layout-content">
                        <Form labelCol={{ span: 2 }} wrapperCol={{ span: 10 }} layout="horizontal">
                            <Form.Item label="Επώνυμο">
                                <Input defaultValue ={Last} onChange={(e)=>setLast(e.target.value)}/>
                            </Form.Item>
                            <Form.Item label="Όνομα">
                                <Input defaultValue ={First} onChange={(e)=>setFirst(e.target.value)}/>
                            </Form.Item>
                            <Form.Item label="Κατάσταση">
                                <Select defaultValue={`${Act}`} onChange={changeActivity}>
                                    <Option value="true">Ενεργός</Option>
                                    <Option value="false">Ανενεργός</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item label="Ημ/νια Γεν">
                                <DatePicker defaultValue={moment(date)} format={dateFormat} onChange={changeDate}/>
                            </Form.Item>
                        </Form>
                    </div>
                    <Button size="large" type="primary" disabled = {!Last||!First||!Act||!date} onClick={()=>updateEmployee()}>
                        Ενημέρωση
                    </Button>
                </div>
            </Content>
            <Footer style={{textAlign: 'center'}}>Created and Developed By Panagiw</Footer>
        </Layout>
    )
}
