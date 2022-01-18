import Link from 'next/link';
import { Typography } from 'antd';
const { Title, Paragraph} = Typography;

export default function Error(){
    return(
        <div>
            <Title>Σφάλμα</Title>
            <Paragraph>
                <b>Εάν βρίσκεστε σε αυτή τη σελίδα, σημαίνει ότι κάποιο λάθος συνέβη.</b>
            </Paragraph>
            <Link href="/">
                <a> Επιστροφή στην αρχική σελίδα</a>
            </Link>
        </div>
    )
}