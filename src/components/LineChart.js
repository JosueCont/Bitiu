import React from "react";
import { Dimensions } from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import { getFontSize } from "../constants/textResponsive";

const Chart = ({data}) => {

    const showDays = () => {
        const days =[]
        for(let day=1; day<=data.length; day++){
             days.push(day);
        }
        return days;
    }
    return(
        <>
            <LineChart 
                data={{
                    labels: showDays(),
                    datasets: [
                      {
                        data: data.map(item => {
                            return item.valor
                        })
                      }
                    ]
                  }}
                  width={Dimensions.get('window').width/1.1} // from react-native
                  height={220}
                  yAxisLabel="$"
                  yAxisSuffix="k"
                  yAxisInterval={1} // optional, defaults to 1
                  chartConfig={{
                    propsForLabels:{
                        fontSize:getFontSize(5)
                    },
                    backgroundColor: "#0B040D",
                    backgroundGradientFrom: "#0B040D",
                    backgroundGradientTo: "#0B040D",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(244, 67, 20, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    propsForDots: {
                      r: "2",
                      strokeWidth: "2",
                      stroke: "#ffa726"
                    }
                    
                  }}
                  bezier
                  style={{
                    marginVertical: 8,
                  }}
            />
        </>
    )
};

export default Chart;