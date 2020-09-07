import axios from "axios";

const URL = "https://dummy.restapiexample.com/api/v1/employees";

export default {
    search: function() {
        return axios.get(URL);
    }
};