import api from "../utils/api";
import React, { Component } from "react";

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
                    employee_name: e.employee_name,
                    employee_salary: e.employee_salary,
                    employee_age: e.employee_age,
                    key: i
                }))
            });
            this.allEmpl = this.state.result;
        }).catch(err => console.log(err));
    }


    render(){
        return(
            <div className="container">
                <div className="row">
                    <h1>Employee Directory</h1>
                </div>
            </div>
        )
    }
}
export default ResultDisplay