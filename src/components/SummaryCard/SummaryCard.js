import Proptypes from 'prop-types'
export default function SummaryCard({ title, count }) {
    return (
        <div id="total">
            <h4>{title}</h4>
            <p id="qtd-total">{count}</p>
        </div>
    )
}

