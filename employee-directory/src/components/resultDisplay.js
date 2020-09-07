import api from "../utils/api";
import React, { Component } from "react";
import EmployeeCard from "./employeeCard";
import SearchBar from "./searchBar";

class ResultDisplay extends Component {
    state = {
        result: [],
        filter: "",
        filterBy: "Name",
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

    searchEmployee = (searchkey) => {
        if (!searchkey){
            this.setState({
            result:this.employees
            })
        } else {
            const filterResult = this.employees.filter(person => person.name === searchkey)
            this.setState({
            result:filterResult
            })
        }
    }

    inputFieldChange = event => {
        event.preventDefault();
        const id = event.target.id; 
        const value = event.target.value;
        this.setState({[id]:value});
    };

    searchEvent = event => {
        event.preventDefault();
        this.searchEmployee(this.state.search)
    }

    salaryFilter = () =>{
        const employeeList = this.employees;
        const minSalary = this.state.minSalary;
        const maxSalary = this.state.maxSalary;
        let salaryArr = [];
        if (!minSalary || !maxSalary){
            for (const employee of employeeList) { 
                salaryArr.push(employee)
            }
        }else{
            for (const employee of employeeList) {
                if (employee.salary >= minSalary && employee.salary <= maxSalary) {
                    salaryArr.push(employee)
                }
            }
        }
        this.setState({
            result: salaryArr 
        })
    }

    filterEvent = event => {
        event.preventDefault();
        this.salaryFilter();
    }

    sortName = event => {
        event.preventDefault();
        const sortResult = (this.state.result).sort((a,b) => (a.name > b.name) ? 1 : -1)
        this.setState({
            result:sortResult 
        })
    }

    sortSalary = event => {
        event.preventDefault();
        const sortResult = (this.state.result).sort((a,b) => (a.salary > b.salary) ? 1 : -1)
        this.setState({
            result:sortResult 
        })
    }

    sortAge = event => {
        event.preventDefault();
        const sortResult = (this.state.result).sort((a,b) => (a.age > b.age) ? 1 : -1)
        this.setState({
            result:sortResult 
        })
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <h1 className="display-4 my-5">Employee Directory</h1>
                </div>
                <div className="row my-2">
                    <SearchBar
                        searchEvent={this.searchEvent} 
                        inputFieldChange={this.inputFieldChange}  
                        filterEvent={this.filterEvent} 
                    />
                </div>
                <div className="row">
                    <table className="table">
                        <thead>
                            <tr>
                                <th onClick={this.sortName}>Name</th>
                                <th onClick={this.sortSalary}>Salary</th>
                                <th onClick={this.sortAge}>Age</th>
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