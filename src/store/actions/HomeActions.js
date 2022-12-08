import {CHOOSE_DETAIL, FETCH_CRYPTO, FETCH_LOADING} from '../types';
import {Action} from 'redux';

export const fetchCrypto = () => {
    return async(dispatch) => {
        try {
            dispatch({type:FETCH_LOADING});
            const coins = ['BTC','ETH','XRP','DOGE'];
            const response = await fetch('https://api.coinstats.app/public/v1/coins?skip=0&limit=20&currency=USD');
            const responseData = await response.json();
            const myCoins =[];

            coins.forEach(coin => {
                const data = responseData.coins.find(co => co.symbol === coin)

                myCoins.push(data); 
            });

            dispatch({
                type: FETCH_CRYPTO,
                payload: myCoins
            });

        } catch (e) {
            console.log(e);
        }
    }
};

export const chooseDetail = (index) => {
    return{
        type: CHOOSE_DETAIL, payload:index
    }
}

