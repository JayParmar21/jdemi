// const INIT = {
//     student :{
//         studData : [],
//         err : ""
//     },
//     studData : []
// }

const INITIAL_STATE = {
    studData: [],
    error_msg: ""
}
export const getData= "getData"

export default (state = INITIAL_STATE, action) =>{
    switch(action.type){

        case getData : {
            //debugger
            //console.log("data::",action.studData)
            return Object.assign({},state,{studData : action.studData})
        }

        default : 
             return state
    }
}