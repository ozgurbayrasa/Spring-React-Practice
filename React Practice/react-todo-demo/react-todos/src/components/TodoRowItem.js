function ToDoRowItem(props){
    // JSX Expressions returns only one element.
    return(
        <tr>
            <th scope='row'>{props.rowNumber}</th>
            <td>{props.rowDescription}</td>
            <td>{props.rowAssigned}</td>
        </tr>
    )
}

export default ToDoRowItem