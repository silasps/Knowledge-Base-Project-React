import Editar from '../../images/edit.png'
import Bin from '../../images/bin.png'
import Video from '../../images/video.png'

export default function TipCard({ titulo, skill, categoria, descricao, video }) {
    return (
        <div id="data">
            <h3>{titulo}</h3>
            <p><strong>Linguagem/Skill:</strong> {skill}</p>
            <p><strong>Categoria:</strong> {categoria}</p>
            <textarea cols="30" rows="10">
                {descricao}
            </textarea>
            <div id="card-botton">
                <button id="bin" type="button" onclick="deleteCard(${index})"><img src={Bin} alt="Remover"></img></button>
                <button id="edit" type="button" onclick="editCard(${index})"><img src={Editar} alt="Editar"></img></button>
                <a href={video} target="_blank">
                    <button id="video" type="button">
                        <img src={Video} alt="Remover"></img>
                    </button>
                </a>
            </div>
        </div>
    )
}