import { useState, useEffect } from "react";
import "./App.css";
import Layout from "@/components/Layout";
import { Card, CardContent, Typography } from "@mui/material";
import Offices from "@/components/mockups/offices";

const Locations = () => {


  const [activeOffice, setActiveOffice] = useState("General")


  const updateOffice = (office, index) => {
    
  }


useEffect(() => {
  updateOffice();
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
                <li className="location-item" onClick={() => setActiveOffice(office.office)} key={office.phone}>{office.office}</li>
              ))}
            </ul>
          </Card>
        </div>
        <div>
          <Card className="location-info-card">
              <h2>{Offices.office}</h2>
              <h2>{activeOffice}</h2>
          </Card>
        </div>
      </div>
      </div>
    </Layout>
  );
};

export default Locations;
