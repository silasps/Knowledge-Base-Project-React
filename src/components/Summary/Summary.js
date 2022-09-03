import SummaryCard from "../SummaryCard/SummaryCard";

export default function Summary() {
    return (
        <div class="totals">
            <SummaryCard />
            <div id="frontend">
                <h4>FrontEnd</h4>
                <p id="qtd-frontend">0</p>
            </div>
            <div id="backend">
                <h4>BacktEnd</h4>
                <p id="qtd-backend">0</p>
            </div>
            <div id="fullstack">
                <h4>FullStack</h4>
                <p id="qtd-fullstack">0</p>
            </div>
            <div id="softskill">
                <h4>SoftSkill</h4>
                <p id="qtd-softskill">0</p>
            </div>
        </div>
    )
}