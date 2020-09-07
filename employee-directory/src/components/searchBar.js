import React from "react";

function SearchBar(props) {
    return (
        <form>
            <div className="form-row">
                <div className="form-check-inline">
                    <h6>Search for Employee:</h6>
                </div>
                <div className="form-check-inline">
                    <input type="text" onChange={props.inputFieldChange} id="search" placeholder="Employee Name"/>
                </div>
                <div className="form-check-inline">
                    <button type="button" onClick={props.searchEvent} className="btn btn-secondary btn-sm">search</button>
                </div>
                <div className="form-check-inline">
                    <h6>Filter By Salary:</h6>
                </div>
                <div className="form-check-inline">
                    <input type="text" onChange={props.inputFieldChange} id="minSalary" placeholder="Minimum Salary"/>
                </div>
                <div className="form-check-inline">
                    <input type="text" onChange={props.inputFieldChange} id="maxSalary" placeholder="Maximum Salary"/>
                </div>
                <div className="form-check-inline">
                    <button type="button" onClick={props.filterEvent} className="btn btn-secondary btn-sm">filter</button>
                </div>
            </div>
        </form>
    );
}

export default SearchBar;