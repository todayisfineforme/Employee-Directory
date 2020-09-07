import api from "../utils/api";
import React, { Component } from "react";
import EmployeeCard from "./employeeCard";
import SearchBar from "./searchBar";

class ResultDisplay extends Component {
    state = {
        result: [],
        filter: "",
        filterBy: "lastName",
        currentSort: "default",
        sortField: ""
    };
    employees = []
    
    componentDidMount() {
        api.search().then(res => {
            console.log(res)
            this.setState({
                result: res.data.data.map((e, i) => ({
                    name: e.employee_name,
                    salary: e.employee_salary,
                    age: e.employee_age,
                    key: i
                }))
            });
            this.employees = this.state.result;
        }).catch(err => console.log(err));
    }


    render(){
        return(
            <div className="container">
                <div className="row">
                    <h1>Employee Directory</h1>
                </div>
                <div className="row">
                    <SearchBar/>
                </div>
                <div className="row">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Salary</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[...this.state.result].map((employee) => 
                            <EmployeeCard
                                name={employee.name}
                                salary={employee.salary}
                                age={employee.age}
                                key={employee.key}
                            />
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default ResultDisplay