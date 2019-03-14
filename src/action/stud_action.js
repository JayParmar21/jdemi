import {getData} from '../reducer/stud_reducer'
import * as service from '../service/service'

export const getDataAction = () =>{
    return(dispatch)=>{
            service.getData().then((response) => {
                if(response.status === 200){
                    dispatch(
                        {
                            type : getData,
                            studData : response.data
                        }
                    );
                }
            })
            .catch((error) => {
                console.log("error::",error);
            })
    }
}