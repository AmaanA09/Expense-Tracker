import React, { useState, useEffect } from "react";
import ReactECharts from "echarts-for-react";

function PieChart({ data }) {
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
      text: "Expense Pie Chart",
      // subtext: "Fake Data",
      left: "center",

    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "horizontal",
      left: "left",
      top : '30px'
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "50%",
        itemStyle :{
          borderColor : '#fff',
            borderWidth : 1,
            borderRadius : 2,
        },
        data: [
          { value: FoodDrinkAmount, name: "Foods & Drinks" },
          { value: groceriesAmount, name: "Groceries" },
          { value: travelAmount, name: "Travel" },
          { value: healthAmount, name: "Health" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  return (
    <div className="piechart" >
      <ReactECharts 
      option={option}
      style={{width:"100%",height:"100%",margin:'10px'}}
      />
    </div>
  );
}
export default PieChart;
