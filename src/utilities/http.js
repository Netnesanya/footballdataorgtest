import * as axios from "axios";

const instance = axios.create({

    baseURL: `https://api.football-data.org/v2/`,
    headers: {'X-Auth-Token': process.env.REACT_APP_API_KEY, "Content-Type": "application/json, text/plain, */*, charset=UTF-8"}
})

export const competitionsAPI = {
    competitionsList() {
        return instance.get(`/competitions/`)
            .then(response => {
                return response.data})
            .catch(err=> console.log(err))
    },
    getCompetition(compId) {
        debugger
        return instance.get(`/competitions/${compId}`)
            .then(response => {
                debugger
                return response.data})
            .catch(err=> console.log(err))
    },
    competitionsSearch(areas, plan) {
        return instance.get(`/competitions?areas=${areas}&plan=${plan}`,
            {
                params: {
                    areas: "AREAS",
                    plan: "PLAN"
                }
            }).then(response => {
            return response.data
        })
    }

}


export const teamsAPI = {
    teamsList() {
return instance.get(`/teams/`)
    .then(response => {
        console.log(response.data.teams)
        return response.data.teams

    })

    }
}


export const matchesAPI = {}

export const areasAPI = {}
export const playersAPI = {}

