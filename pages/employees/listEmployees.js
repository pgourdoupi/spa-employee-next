import React from 'react';
import { Layout, Menu, Space, Button, notification, Table } from 'antd';
const { Header, Content, Footer } = Layout;
import Link from 'next/link'
import Image from 'next/image'
import CoffeeLogo from "../../public/images/Coffee_Island_logo.jpg";
import {useRouter} from 'next/router';
import {useState} from 'react';

export async function getServerSideProps() {
    try {
        const res = await fetch(`http://localhost:3000/api/readEmployees`, {method: 'GET',
            headers:{
                'Accept':'application/json',
                'Content-type':'application/json'
            },
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
        console.log(e);
        const error = true
        return {
            props:{
                error,
            },
        }
    }
}

export default function Employees(props) {
    const router = useRouter();


    async function deleteEmployee(id){
        console.log("from client", id)
        try{
            const res = await fetch(`http://localhost:3000/api/delEmployee`, {method: 'POST',
                body: JSON.stringify({
                    id,
                })
            });
            router.reload();
        }catch(e){
            console.log(e)
        }
    }

    const [ data, setData ] = useState(props.data);


    const openNotification = (id) => {
        const key = `open${Date.now()}`;
        const btn = (
            <Button type="primary" size="large" onClick={() => {notification.close(key);deleteEmployee(id)}}>
                Διαγραφή
            </Button>
        );
        notification.open({
            message: 'Διαγραφή Υπαλλήλου',
            description: 'Είστε σίγουρος/η ότι θέλετε να διαγράψετε τον υπάλληλο; ',
            btn,
            key,
            onClose: close,
        });
    };

    const columns = [
        {
            title: 'Κωδικός',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: 'Επώνυμο',
            dataIndex: 'last_name',
            key: 'last_name',
        },
        {
            title: 'Όνομα',
            dataIndex: 'first_name',
            key: 'first_name',
        },
        {
            title: 'Κατάσταση',
            dataIndex: 'is_active',
            key: 'is_active',
            render: text => <a>{text.toString()}</a>,
        },
        {
            title: 'Ημερομηνία Γέννησης',
            dataIndex: 'date_of_birth',
            key: 'date_of_birth',
        },
        {
            title: 'Επιλογές',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <Button size="large" type="primary" onClick={()=> router.push('/employees/' + text.id)}>
                        Ενημέρωση
                    </Button>
                    <Button size="large" type="alert" onClick={()=>openNotification(text.id)}>
                        Διαγραφή
                    </Button>
                </Space>
            ),
        },
    ];
    return (
        <Layout>
            <Header style={{position: "dynamic", padding: 15, width: '100%'}}>
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
                        <Link href="/employees/createEmployee">
                            <a> Εισαγωγή Υπαλλήλου </a>
                        </Link>
                    </Menu.Item>
                </Menu>
            </Header>
            <Content className="site-layout" style={{padding: '0 50px', marginTop: 50}}>
                <div className="site-layout-background" style={{padding: 100, minHeight: 100}}>
                    <div>
                        <p>Παρακάτω φαίνονται οι υπάλληλοι της εταιρείας</p>{' '}
                    </div>

                    <div className="site-layout-content">
                        <Table columns={columns} dataSource={data}/>
                    </div>
                </div>
            </Content>
            <Footer style={{textAlign: 'center'}}>Created and Developed By Panagiw</Footer>
        </Layout>
    )

}