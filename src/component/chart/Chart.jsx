import { useEffect, useState } from "react";
import "./Chart.css";
import { PieChart } from "react-minimal-pie-chart";

const Chart = () => {
  const [loading, setLoading] = useState(true);
  const [maleCount, setMaleCount] = useState(0);
  const [googleMailCount, setGoogleMailCount] = useState(0);
  const [data, setData] = useState([]);

  const calculateMalePercentage = (data) => {
    const maleCount = data.filter((person) => person.gender === "male").length;
    setMaleCount(maleCount);
    const googleCount= data.filter((person)=> person.email.includes("@gmail.com")).length;
    setGoogleMailCount(googleCount);
  };

  const malePercent=(((maleCount)/data.length)*100).toFixed(1)
  const femalePercent=(100-malePercent).toFixed(1);
  const googlePercent= ((googleMailCount/data.length)*100).toFixed(1)
  const othersPercent=(100-googlePercent).toFixed(1);

  useEffect(() => {
    fetch("https://fakerapi.it/api/v1/persons?_quantity=500")
    .then((res)=>res.json())
    .then((people)=>{
      setData(people.data)
      calculateMalePercentage(people.data)
      setLoading(false)
    })
  }, []);

  return (
    <div className="chart-container">
      <h1>KEY PERFORMANCE INDICATORS</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <div className="parameter-indicators">
          <h4 className="parameter-title">Gender</h4>
          <div className="pie-chart">
            <PieChart
              data={[
                {
                  title: "Male- "+malePercent+"%",
                  value: maleCount,
                  color: "green",
                },
                {
                  title: "Female- "+femalePercent+"%",
                  value: data.length - maleCount,
                  color: "blue",
                },
              ]}
              label={(data) => data.dataEntry.title}
              labelPosition={35}
              labelStyle={{color:"black",fontSize:"10px",fontWeight:"700"}}
              radius={50}
              animate={true}
              animationDuration={1500}
              animationEasing="ease-out"
            />
          </div>
          <div className="parameter-details">
            <h5>Total users-{data.length}</h5>
            <h5>Male-{maleCount}</h5>
            <h5>Female-{data.length - maleCount}</h5>
          </div>
        </div>
        <hr className="divider" />
        <div className="parameter-indicators">
          <h4 className="parameter-title">Gmail Holders</h4>
          <div className="pie-chart">
            <PieChart
              data={[
                {
                  title: "gmail- "+googlePercent+"%",
                  value: googleMailCount,
                  color: "crimson",
                },
                {
                  title: "others- "+othersPercent+"%",
                  value: data.length - googleMailCount,
                  color: "gray",
                },
              ]}
              label={(data) => data.dataEntry.title}
              labelPosition={35}
              labelStyle={{color:"black",fontSize:"10px",fontWeight:"700"}}
              radius={50}
              animate={true}
              animationDuration={1500}
              animationEasing="ease-out"
            />
          </div>
          <div className="parameter-details">
            <h5>Total users-{data.length}</h5>
            <h5>Gmail Account Holders -{googlePercent}</h5>
            <h5>Others-{data.length - googlePercent}</h5>
          </div>
        </div>
        </div>
       
      )}
    </div>
  );
};

export default Chart;
