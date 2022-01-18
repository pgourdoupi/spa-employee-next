import Link from 'next/link';
import { Typography, Divider  } from 'antd';
import Image from "next/image";
import CoffeeLogo from "../public/images/Coffee_Island_logo.jpg";
import Coffee from "../public/images/paragwgi_coffee.jpg";
import Employee from "../public/images/employees.jpg";
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

export default function AboutUs(){
    return(
        <Layout>
            <Header style={{ position: "dynamic", padding:15, width: '100%' }}>
                <div className="logo">
                    <a><Image src={CoffeeLogo} height={40} width={40} alt="coffee logo"/> Coffee Island</a>
                </div>
            </Header>
            <Content>
                <div>
                    <div className="description" style={{padding:20}}>
                        <Title>Σχετικά με εταιρεία μας</Title>
                        <a><Image src={Coffee} height={250} width={500} alt="Coffee"/></a>
                        <Paragraph>
                            <b>Η Coffee Island είναι πολυεθνική αλυσίδα καφεκοπτείων με παραγωγή και πώληση καφέ</b> που ιδρύθηκε το 1999,
                            στην πόλη της Πάτρας στην Ελλάδα. <br/> Σήμερα, το δίκτυο της αριθμεί περισσότερα από 489 καφεκοπτεία στην Ελλάδα,
                            την Κύπρο, το Ηνωμένο Βασίλειο, τον Καναδά και την Ελβετία και πλέον και την Ρουμανία, ενώ έχει
                            δημιουργήσει τις δικές της μονάδες παραγωγής για τη μεταποίηση του καφέ.<br/>
                            Το 2009, η Coffee Island εισήγαγε υπηρεσίες takeaway
                            (Coffee on-the-go) υιοθετώντας το σημερινό concept που συνδυάζει το παραδοσιακό καφεκοπτείο
                            με το μοντέρνο espresso bar.
                        </Paragraph>
                    </div>
                </div>
                <div className="description" style={{padding:20}}>
                    <h2>Σχετικά με την εφαρμογή Crud που υλοποιούμε</h2>
                    <a><Image src={Employee} height={250} width={500} alt="employees"/></a>
                    <Paragraph>
                        Στην συγκεκριμένη εφαρμογή, φτιάξαμε ενα project σε next.js, όπου φτιάξαμε ενα crud δηλαδή υλοποιούμε
                        τις εξής λειτουργίες: create, read, update, delete για τον πίνακα employee μιας βάσης δεδομένων.<br/>
                        Μπορούμε να εισάγουμε έναν νέο υπάλληλο στην εταιρεία (create), μπορούμε να βλέπουμε τον πίνακα με
                        τους υπαλλήλους που υπάρχουν ήδη στην εταιρεία (read), μπορούμε να ενημερώνουμε τα στοιχεία ενός
                        ήδη υπάρχοντος υπαλλήλου της εταιρείας (update) καθώς και μπορούμε να διαγράφουμε έναν υπάλληλο σε
                        περίπτωση που δνε ανήκει πλέον στην εταιρεία (delete). <br/> Σε περίπτωση που συμβεί κάποιο σφάλμα υπάρχει
                        αντίστοιχο page που θα οδηγείται η εφαρμογή.<br/>
                        <i><b>ΣΗΜΕΙΩΣΕΙΣ!!</b></i><br/>
                        <b> Όταν πάμε να εισάγουμε έναν υπάλληλο δεν μπορούμε να αφήσουμε κάποιο πεδίο κενό.</b><br/>
                        <b> Όταν είμαστε στη λειτουργία read όπου θα βλέπουμε το δυναμικό της εταιρείας, θα έχουμε τη δυνατότητα
                        να κάνουμε κάποιο update στα στοιχεία του υπάλλήλου καθώς και να τον διαγράψουμε.</b>
                    </Paragraph>
                </div>
            </Content>

            <Link href="/">
                <a> Πίσω στην αρχική σελίδα</a>
            </Link>
            <Footer style={{ textAlign: 'center' }}>Created and Developed By Panagiw</Footer>
        </Layout>
    )
}