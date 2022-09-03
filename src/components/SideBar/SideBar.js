import KnowledgeBook from '../../images/KnowledgeBook.png'
import { useState } from 'react'
import { useTips } from '../../contexts/tipsContext'


export default function SideBar() {

    const { tipList, setTipList } = useTips()

    const [tip, setTip] = useState({
        id: Math.random(),
        titulo: '',
        skill: '',
        categoria: '',
        descricao: '',
        video: ''
    })

    // function Limpar(){
    //     {
    //         id: '',
    //     titulo: '',
    //     skill: '',
    //     categoria: '',
    //     descricao: '',
    //     video: ''
    // }
    // }

    function displayCard() {
        const tipWithId={
            ...tip,
            id: Math.random()
        }
        setTipList([
            ...tipList,
            tipWithId
        ])

        //Mensagem de Sucesso
        window.alert(`SUCESSO!\n\nDica de título "${tip.titulo}" cadastrada na base do conhecimento.`)
    }

    return (
        <div className="left-container">
            <div className="header">
                <div className="logo-image">
                    <img src={KnowledgeBook} alt="Knowledge Book"></img>
                </div>
                <h1 className="devin">DEVin</h1>
                <div className="title-desc">
                    <h1 className="knowldg">Knowledge</h1>
                    <p>Learn, Code and Save</p>
                </div>

            </div>
            <div className="form">
                <form className="main-form">
                    <span for="title-input">Título</span>

                    <input value={tip.titulo} onChange={(e) => setTip({
                        ...tip,
                        titulo: e.target.value
                    })} id="title-input" type="input" placeholder="Digite um título" minlength="8" maxlength="64"
                        required></input>

                    <span for="skill-input">Linguagem/Skill</span>
                    <input value={tip.skill} onChange={(e) => setTip({
                        ...tip,
                        skill: e.target.value
                    })} id="skill-input" type="input" placeholder="Digite uma linguagem ou skill" minlength="4"
                        maxlength="16" required></input>

                    <span for="category-input">Categoria</span>
                    <select value={tip.categoria} onChange={(e) => setTip({
                        ...tip,
                        categoria: e.target.value
                    })} id="category-input" name="category-input" required>
                        <option value="FrontEnd">FrontEnd</option>
                        <option value="BackEnd">BackEnd</option>
                        <option value="FullStack">FullStack</option>
                        <option value="SoftSkill">Comportamental/SoftSkill</option>
                    </select>

                    <span for="description-input">Descrição</span>
                    <textarea value={tip.descricao} onChange={(e) => setTip({
                        ...tip,
                        descricao: e.target.value
                    })} id="description-input" name="Descrição-da-dica" cols="30" rows="10" minlength="32"
                        maxlength="512" required>
                    </textarea>

                    <span className="video">Video do YouTube</span>
                    <input value={tip.video} onChange={(e) => setTip({
                        ...tip,
                        video: e.target.value
                    })} id="video-input" type="url" placeholder="https://suaurl.com"></input>

                    <div id="buttons">
                        <button className="btn-erase" type="reset">Limpar</button>
                        <button onClick={displayCard} id="btn-save1" className="btn-save" type="button">Salvar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}