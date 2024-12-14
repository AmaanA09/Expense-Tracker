import ReactECharts from "echarts-for-react";
import React, { useState, useEffect } from "react";

function LineChart({data}) {

  // const [dates, setDates] = useState([]);
  // const [amount, setAmount] = useState([]);

  // const dataDate = data.map((item) => {
  //   return item.Date.split("-").reverse().join("-").slice(0,5)
  // });

  // const dataAmount = data.map((item) => {
  //   return  item.Amount
  // });

  // useEffect(() => {     
  //   setDates([...dataDate]);
  //   setAmount([...dataAmount])
  // },[data]);


  const [FoodDrinkAmount, setFoodDrinksAmount] = useState(0);
  const [groceriesAmount, setGroceriesAmount] = useState(0);
  const [travelAmount, setTravelAmount] = useState(0);
  const [healthAmount, setHealthAmount] = useState(0);

  // food
  const foodData = data.filter((item) => {
    return item.Category == "Food & Drinks";
  });

  const totalFoodAmount = foodData.reduce((acc, item) => {
    return acc + item.Amount;
  }, 0);

  useEffect(() => {
    setFoodDrinksAmount(totalFoodAmount);
  });

  // groceires

  const groceriesdata = data.filter((item) => {
    return item.Category == "Groceries";
  });

  const totalGroceriesAmount = groceriesdata.reduce((acc, item) => {
    return acc + item.Amount;
  }, 0);

  useEffect(() => {
    setGroceriesAmount(totalGroceriesAmount);
  });
  // Travel

  const traveldata = data.filter((item) => {
    return item.Category == "Travel";
  });

  const totalTravelAmount = traveldata.reduce((acc, item) => {
    return acc + item.Amount;
  }, 0);

  useEffect(() => {
    setTravelAmount(totalTravelAmount);
  });

  // Health

  const healthdata = data.filter((item) => {
    return item.Category == "Health";
  });

  const totalHealthAmount = healthdata.reduce((acc, item) => {
    return acc + item.Amount;
  }, 0);

  useEffect(() => {
    setHealthAmount(totalHealthAmount);
  });
  


  const option = {
    title: {
      text: "Expense Bar Chart",
      // subtext: "Fake Data",
      left: "center",
    },
    xAxis: {
      type: 'category',
      data: ['Foods & Drinks', 'Groceries', 'Travel' , 'Health']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [FoodDrinkAmount , groceriesAmount, travelAmount, healthAmount],
        type: 'bar'
      }
    ]
  };
  return (
    <div className="bar-chart" style={{ width: "100%", height: "480px" }}>
      <ReactECharts 
      option={option}
      style={{width:"100%",height:"100%"}}
       opts={{ renderer: "canvas" }}  
      />
    </div>
  );
}
export default LineChart
