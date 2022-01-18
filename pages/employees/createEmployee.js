import { useRouter } from 'next/router';
import Link from 'next/link';
import { Form, Select, Input, Button, Layout, Menu, Breadcrumb, DatePicker,} from 'antd';
import {useState} from 'react';
import Image from "next/image";
import CoffeeLogo from "../../public/images/Coffee_Island_logo.jpg";
const { Header, Footer, Content } = Layout;
const FormItem = Form.Item;
const Option = Select.Option;

export default function create(props) {
    const router = useRouter();
    const [body, setBody ] = useState({Last:'',First:'',Act:'',Date:''});

    async function creatEmployee(props){
        try{
            const res = await fetch(`http://localhost:3000/api/insertEmployee`, {method: 'POST',
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

    function activityChange(value) {
        setBody({...body,Act:value});
    }
    function changeDate(date, dateString) {
        setBody({...body,Date:dateString});
    }

    return (
          <Layout>
                <Header style={{ position: "dynamic", padding:15, width: '100%' }}>
                    <div className="logo">
                        <a><Image src={CoffeeLogo} height={40} width={40} alt="coffee logo"/> Coffee Island</a>
                    </div>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Link href="/aboutUs">
                                <a> Σχετικά με εμάς </a>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link href="/employees/listEmployees">
                                <a> Οι υπάλληλοί μας </a>
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Header>
                <Content className="site-layout" style={{ padding: '0 50px', marginTop: 50 }}>
                    <div className="site-layout-background" style={{ padding: 100, minHeight: 100 }}>
                        <Breadcrumb style={{ margin: '16px 0' }}/>
                        <div className="site-layout-content">
                            <Form labelCol={{ span: 2 }} wrapperCol={{ span: 10 }} layout="horizontal">
                                <Form.Item label="Επώνυμο">
                                    <Input onChange={(e)=>setBody({...body,Last:e.target.value})}/>
                                </Form.Item>
                                <Form.Item label="Όνομα">
                                    <Input onChange={(e)=>setBody({...body,First:e.target.value})}/>
                                </Form.Item>
                                <Form.Item label="Κατάσταση">
                                    <Select onChange={activityChange}>
                                        <Option value="true" >Ενεργός</Option>
                                        <Option value="false">Ανενεργός</Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item label="Ημ/νια γέν">
                                    <DatePicker onChange={changeDate} />
                                </Form.Item>
                            </Form>
                        <Button size="large" type="primary" disabled = {!body.Last||!body.First||!body.Act||!body.Date} onClick={()=>creatEmployee(body)}>
                               Εισαγωγή Υπαλλήλου
                        </Button>
                        </div>
                    </div>
                </Content>
              <Footer style={{ textAlign: 'center' }}>Created and Developed By Panagiw</Footer>
          </Layout>
    )
}
