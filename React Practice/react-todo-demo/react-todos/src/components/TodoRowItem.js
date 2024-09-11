function ToDoRowItem(){

    const rowNumber = 1;
    const rowDescription = 'Feed dog';
    const rowAssigned = 'Eric';

    // JSX Expressions returns only one element.
    return(
        <tr>
            <th scope='row'>{rowNumber}</th>
            <td>{rowDescription}</td>
            <td>{rowAssigned}</td>
        </tr>
    )
}

export default ToDoRowItem