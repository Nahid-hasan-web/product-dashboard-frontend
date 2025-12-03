import api from "./axiosApiConfig"


const dashboardApi = {
    getNoReport:()=>{
        return api.get('/dashboard/dashborad-report-no')
    }
}

export default dashboardApi