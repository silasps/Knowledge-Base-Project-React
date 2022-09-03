import search from '../../images/search.png'
import erase from '../../images/erase.png'

import { useState } from 'react'
import { useTips } from '../../contexts/tipsContext'


export default function Filter() {

    const { tipList, setTipList } = useTips()

    const [ filter, setFilter ] = useState(undefined)

    // ===== Barra de busca ===== //
    function searchCard() {
        var cards = tipList
        var searchInputValue = filter;
        console.log(searchInputValue, cards);

        var searchResult = cards.find((card) => card.titulo === searchInputValue);
        console.log(searchResult);
        if (searchResult != null) {
            // inserir o volar do filtro para setTipList
            setTipList(searchResult);
        } else {
            window.alert(
                "O ítem que você está procurando não está na base de dados.\n\nConfira o texto digitado e tente novamente."
            );
        }
    }

    return (
        <div class="search">
            <input value={filter} onChange={(e) => setFilter(e.target.value)} id="searchBar" class="searchBar" name="searchBar" placeholder="Digite um título para buscar..."
                type="input"></input>

            <button id="lupa" onClick={searchCard}><img src={search} alt="lupa"></img></button>

            <button id="erase" name='erase' onclick="limparSearchBar()"><img src={erase}
                alt="lupa"></img></button>
        </div>
    )
}