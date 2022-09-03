import './index.css'
import SideBar from '../components/SideBar/SideBar';
import MainContent from '../components/MainContent/MainContent';

export default function Home() {

    return (
        <body>
            <main>
                <SideBar />
                <MainContent />
            </main>
        </body>
    )
}