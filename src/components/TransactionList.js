import { Transaction } from "./Transaction"

export const TransactionList = () => {
    return (
        <div>
            <h3>History</h3>
            <ul id="list" className="list">
                <Transaction/>
            </ul>
        </div>
    )
}