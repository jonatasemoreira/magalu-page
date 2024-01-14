
import './Home.css';

import NavBar from '../components/navbar/NavBar';
import SlideShow from '../components/slide/Slide';

export default function Home() {
    const imagens = [
        "https://s.mlcdn.com.br/banner/campanhas/Desk_MediumDesk_1_Campanha_Todas_Todas_26-12-2023_botaforav2.png"
    ]
    return (
        <>
            <div className="Home">
                <NavBar />
                <SlideShow />
                <div className='cartaz-magalu'>
                    <img src={imagens[0]} alt="" />
                </div>
            </div>
        </>
    )
}