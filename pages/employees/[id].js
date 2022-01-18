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

 async function getServerSideProps(context) {
    try {
        const res = await fetch(`http://localhost:3000/employees/${context.params.id}`, {method: 'GET'});
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

    const data = props.data;
    console.log("ta data einai", data)
    const [body, setBody] = useState({Last:data.last_name, First:data.first_name, Act:data.is_active, Date:data.date_of_birth});
    const dateFormat = 'yyyy/mm/dd';


    async function updateEmployee(props){
        try{
            const res = await fetch(`http://localhost:3000/api/editEmployee/${props.id}`, {method: 'PUT',
                headers:{
                    'Accept':'application/json',
                    'Content-type':'application/json'
                },
                body: JSON.stringify({
                    last_name:props.Last,
                    first_name:props.First,
                    is_active:props.Act,
                    date_of_birth:props.Date
                })
            });
            router.push("/employees/listEmployees")
        }catch(e){
            console.log(e)
        }
    }


    function changeActivity(value) {
        setBody({...body,Act:value});
    }
    function changeDate(date, dateString) {
        setBody({...body,Date:dateString});
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
                                <Input defaultValue ={data.last_name} onChange={(e)=>setBody({...body,Last:e.target.value})}/>
                            </Form.Item>
                            <Form.Item label="Όνομα">
                                <Input defaultValue ={data.first_name} onChange={(e)=>setBody({...body,First:e.target.value})}/>
                            </Form.Item>
                            <Form.Item label="Κατάσταση">
                                <Select defaultValue={data.is_active} onChange={changeActivity}>
                                    <Option value="true" >Ενεργός</Option>
                                    <Option value="false">Ανενεργός</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item label="Ημ/νια Γεν">
                                <DatePicker defaultValue={moment(data.date_of_birth, dateFormat)} format={dateFormat} onChange={changeDate} />
                            </Form.Item>
                        </Form>
                    </div>
                    <Button size="large" type="primary" disabled = {!body.Last||!body.First||!body.Act||!body.Date} onClick={()=>updateEmployee(body)}>
                        Ενημέρωση
                    </Button>
                </div>
            </Content>
            <Footer style={{textAlign: 'center'}}>Created and Developed By Panagiw</Footer>
        </Layout>
    )
}
