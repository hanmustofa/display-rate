import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
// import { useParams } from "react";
import "./api.css";

const Exchange = () => {
  const [rates, setRates] = useState({});

  // mendefinisikan Api
  const BASE_URL =
    "http://api.exchangeratesapi.io/v1/latest?access_key=83a6e2f0ee2056936f61c8c329ee4dad&format=1&symbols=USD,IDR,CHF,CAD,JPY";

  let RandomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min) + min);
  let Sell = (rates, random) => rates - (random / 100) * rates;
  let Buy = (rates, random) => rates + (random / 100) * rates;

  const randomNum = RandomNumber(2, 5);
  // const [currencyBuy, setCurrencyBuy] = useState({});
  // const [currencySell, setCurrencySell] = useState({});

  // memanggil API
  useEffect(() => {
    axios.get(BASE_URL).then((res) => {
      console.log(res.data.rates);
      setRates(res.data.rates);
    });
  }, []);

  // function Webuy() {
  //   return <div></div>;
  // }

  return (
    <div className="container">
      <h2 style={{ marginBottom: "30px" }}>Digital Rate Currency</h2>
      <table border="1" className="tbl-exchange">
        <thead>
          <tr>
            <th rowspan="1">Rates</th>
            <th>We Buy</th>
            <th>Exchange Rate</th>
            <th>We Sell</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>CAD</td>
            <td>{Buy(rates.CAD, randomNum)}</td>
            <td>{rates.CAD}</td>
            <td>{Sell(rates.CAD, randomNum)}</td>
          </tr>
          <tr>
            <td>IDR</td>
            <td>{Buy(rates.IDR, randomNum)}</td>
            <td>{rates.IDR}</td>
            <td>{Sell(rates.IDR, randomNum)}</td>
          </tr>
          <tr>
            <td>JPY</td>
            <td>{Buy(rates.JPY, randomNum)}</td>
            <td>{rates.JPY}</td>
            <td>{Sell(rates.JPY, randomNum)}</td>
          </tr>
          <tr>
            <td>CHF</td>
            <td>{Buy(rates.CHF, randomNum)}</td>
            <td>{rates.CHF}</td>
            <td>{Sell(rates.CHF, randomNum)}</td>
          </tr>

          <tr>
            <td>USD</td>
            <td>{Buy(rates.USD, randomNum)}</td>
            <td>{rates.USD}</td>
            <td>{Sell(rates.USD, randomNum)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Exchange;
