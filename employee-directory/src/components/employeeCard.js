import React from "react";

function EmployeeCard(props) {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.age}</td>
            <td>{props.salary}</td>
        </tr>
    );
}

export default EmployeeCard;