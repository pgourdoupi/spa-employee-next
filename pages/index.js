import {  Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;
import Link from 'next/link'
import Image from 'next/image'
import CoffeeLogo from '../public/images/Coffee_Island_logo.jpg'

export default function Employee() {
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
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <div className="site-layout-background" style={{ padding: 150, minHeight: 500 }}>
            <paragraph>
                <b>
                    Πρόκειται για μια εφαρμογή σε next.js όπου υλοποιείται crud (create, read, update and delete),
                    σε ένα πίνακα με υπαλλήλους για την συγκεκριμένη εταιρεία. Πατώντας το menu item "οι υπάλληλοί μας"
                    εμανίζονται οι υπάλληλοι που υπάρχουν στην εταιρεία και εκεί υλοποιείται το crud.
                </b>
            </paragraph>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Created and Developed By Panagiw</Footer>
    </Layout>
  )
}