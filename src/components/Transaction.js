export const Transaction = () => {
    const sign = '+'
    return (
        <li className="plus">
            salary 
            <span>
                {sign}$1000
            </span>
            <button className="delete-btn">X</button>
        </li>
    )
}