import { FETCH_CHART, LOADING_CHART, } from "../types";

export const fetchPeriods = (id) => {
    return async(dispatch) => {
        try {
            dispatch({type:LOADING_CHART})
            const response = await fetch(`https://api.coinstats.app/public/v1/charts?period=1m&coinId=${id}`);
            const responseData = await response.json();
            const points = [];
    
            for(const puntos of responseData.chart){
                points.push({
                    fecha: puntos[0],
                    valor: puntos[1] * 19.80
                })
            }

            dispatch({type: FETCH_CHART, payload: points});            
        } catch (e) {
            console.log(e)
        }
    }
}