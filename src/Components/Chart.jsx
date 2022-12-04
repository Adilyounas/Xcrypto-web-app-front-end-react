import React from 'react'
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Colors,
  BubbleController,
  Legend,
  Tooltip,
  Title

} from 'chart.js'


ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Colors,
  BubbleController,
  Legend,
  Tooltip,
  Title

)




const Chart = ({ arr = [], currency, days }) => {
  const xDate = []
  const yPrices = []

  for (let i = 0; i < arr.length; i++) {
    if(days=== "24h") xDate.push(new Date(arr[i][0]).toLocaleTimeString() );

    else xDate.push(new Date(arr[i][0]).toLocaleDateString() );
    yPrices.push( arr[i][1])
  }




  return (
    <Line
      data={{
        labels: xDate,
        datasets: [{
          label: `Price in ${currency}`,
          data: yPrices,
          borderColor: "rgb(75,0,130) ",
          backgroundColor: "rgba(230,230,250,0.1)",

        }]

      }}
      options={{
        responsive: true,

      }}



    />
  )
}

export default Chart