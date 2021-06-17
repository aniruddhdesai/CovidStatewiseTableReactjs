import React, { useState, useEffect } from 'react';
import './table.css'

const Content = () => {

  const [data, setData] = useState([]);

  const getCovid = async () => {
    const aa = await fetch('https://api.covid19india.org/data.json');
    const ad = await aa.json();
    console.log(ad.statewise)
    setData(ad.statewise);
  }

  useEffect(() => {
    getCovid();
    document.title=`Covid Overview`;
  }, [])
  return (
    <>
      <h1 className='mb-3 mt-3 text-center position-relative text-dark'>Indian Covid-19 Cases</h1>
      <div className="table-responsive mx-4 mb-3">
        <table className="table table-hover">

          <thead className="thead-dark position-static">
            <tr className="text-white text-center bg-dark">
              <th>State</th>
              <th>Active</th>
              <th>Confirmed</th>
              <th>Recovered</th>
              <th>Deaths</th>
              <th>Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((val,ind) => {
                return (
                  <tr key={ind}>
              <td className="font-weight-bold text-dark ">{val.state}</td>
              <td className="text-center hover">{val.active}</td>
              <td className="text-center hover">{val.confirmed}</td>
              <td className="text-center text-success hover">{val.recovered}</td>
              <td className="text-center text-danger hover">{val.deaths}</td>
              <td className="text-center hover">{val.lastupdatedtime}</td>
            </tr>
            )
              })
            }
          </tbody>

        </table>
      </div>
      <footer className='bg-dark'>
        <h3 className="float-right mr-2 text-info">Aniii</h3>
      </footer>
    </>
  );
}

export default Content;




