import React from "react";

function EmployeeCard(props) {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.salary}</td>
            <td>{props.age}</td>
        </tr>
    );
}

export default EmployeeCard;