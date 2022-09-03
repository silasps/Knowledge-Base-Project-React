import CardList from "../CardList/CardList";
import Filter from "../Filter/Filter";
import Summary from "../Summary/Summary";
import TipCard from "../TipCard/TipCard";
import { useTips, TipProvider } from '../../contexts/tipsContext'


export default function MainContent() {

    const { tipList } = useTips()

    return (
        <div class="right-container">
            <Summary />
            <Filter />
            <CardList>
                <div class="info">
                    <div id="cards">
                        {tipList.map(tip => {
                            return (
                                <TipCard 
                                    key={tip.id}
                                    id={tip.id}
                                    titulo= {tip.titulo}
                                    skill={tip.skill}
                                    categoria={tip.categoria}
                                    descricao={tip.descricao}
                                    video={tip.video}
                        />
                            )
                        })}
                        
                    </div>
                </div>
            </CardList>
        </div>
    )
}