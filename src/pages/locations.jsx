import { useState, useEffect } from "react";
import "./App.css";
import Layout from "@/components/Layout";
import { Card, CardContent, Typography } from "@mui/material";
import Offices from "@/components/mockups/offices";

const Locations = () => {
  const [activeOffice, setActiveOffice] = useState(Offices);

  const updateOffice = (office, index) => {};

  useEffect(() => {
    updateOffice();
  }, [activeOffice]);

  return (
    <Layout>
      <div className="container">
        <div className="locations-container">
          <div>
            <Card className="location-card">
              <h2 onClick={() => setActiveOffice(Offices)}>Offices</h2>
              <ul>
                {Offices.map((office) => (
                  <li
                    className="location-item"
                    onClick={() => setActiveOffice(office.office)}
                    key={office.phone}
                  >
                    {office.office}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
          <div>
            <Card className="location-info-card">
              {Offices.filter((office) => office.office === activeOffice).map(
                (office, index) => (
                  <div key={index}>
                    <h3 className="location-header">{office.office}</h3>

                    <p className="location-phone">
                      <strong className="location-bold">PHONE:</strong>{" "}
                      {office.phone}
                    </p>
                    <p className="location-email">
                      <strong className="location-bold">EMAIL:</strong>{" "}
                      {office.email}
                    </p>
                    <p className="location-address">
                      <strong className="location-bold">ADDRESS:</strong>{" "}
                      {office.address}
                    </p>
                    <div className="location-hours">
                      <strong className="location-bold">
                        Hours of Operations:
                      </strong>
                      {Object.entries(office.hours[0]).map(
                        ([day, hours], index) => (
                          <p key={index}>
                            {day.toUpperCase()}: {hours}
                          </p>
                        ),
                      )}
                    </div>
                  </div>
                ),
              )}
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Locations;
