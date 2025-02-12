import React from "react";

export const ArrayDemo6 = () => {
    var CITY = [
        {
            id: 9001,
            cityname: "adi",
            population: 60000,
            AQI: 400,
        },
        {
            id: 9002,
            cityname: "val",
            population: 20000,
            AQI: 150,
        },
        {
            id: 9003,
            cityname: "nav",
            population: 180000,
            AQI: 200,
        },
        {
            id: 9004,
            cityname: "vapi",
            population: 8000,
            AQI: 500,
        },
    ];
    
    return (
        <div style={{ textAlign: "center"}}>
            <h1>ArrayDemo6</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>CITYNAME</th>
                        <th>POPULATION</th>
                        <th>AQI</th>
                    </tr>
                </thead>
                <tbody>
                    {CITY.map((emp) => {
                        return (
                            <tr key={emp.id}>
                                <td>{emp.id}</td>
                                <td>
                                    <span>{emp.cityname}</span>
                                </td>
                                <td>
                                    <span style={{ color: emp.population >= 20000 ? "red" : "black" }}>
                                        {emp.population}
                                    </span>
                                </td>
                                <td style={{ color: emp.AQI >= 300 ? "red" : emp.AQI <= 200 ? "green" : "black" }}>
                                    {emp.AQI}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};