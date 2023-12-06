import { useState, useEffect } from "react";
import "./App.css";
import Layout from "@/components/Layout";
import { Card, CardContent, Typography } from "@mui/material";
import Offices from "@/components/mockups/offices";

const Locations = () => {


  const [activeOffice, isActiveOffice] = useState("")


  const theFunc = () => {

  }


useEffect(() => {
  theFunc();
}, [activeOffice]);


  return (
    <Layout>
      <div className="container">
      <div className="locations-container">
        <div>
          <Card className="location-card">

            <h2>Offices</h2>
            <ul>
              {Offices.map((office) => (
                <li key={office.phone}>{office.office}</li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
      </div>
    </Layout>
  );
};

export default Locations;
