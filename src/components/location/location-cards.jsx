import { useState, useEffect } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import Offices from "@/components/mockups/offices";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const LocationCards = () => {
  const [offices, setOffices] = useState([]);
  const [activeOffice, setActiveOffice] = useState("Office Name");
  const fetchOffices = () => {
    fetch(
      "https://publish-p127513-e1240269.adobeaemcloud.com/graphql/execute.json/aem-demo-employers/office-locations"
    )
      .then((res) => {
        return res.json();
        console.log(res.json());
      })
      .then((d) => {
        setOffices(d.data.officeBuildingList.items);
        console.log(offices);
      });
  };

  const updateOffice = (office, index) => {};

  useEffect(() => {
    fetchOffices();
  }, []);

  useEffect(() => {
    updateOffice();
  }, [activeOffice]);

  const setContactPhone = (contact) => {
    return contact.phone == null ? "" : <Typography><strong>PHONE:</strong>{" "}{contact.phone}</Typography>
  }

  return (
    <div className="container">
      <div className="locations-container">
        <div>
          <Card className="location-card">
            <h2 onClick={() => setActiveOffice(Offices)}>Offices</h2>
            <ul>
              {offices.map((office) => (
                <li
                  className="location-item"
                  onClick={() => setActiveOffice(office.name)}
                  key={office.phone}
                  >
                  {office.name}
                </li>
              ))}
            </ul>
          </Card>
        </div>
        <div>
          <Card className="location-info-card">
            {offices
              .filter((office) => office.name === activeOffice)
              .map((office, index) => (
                  <div key={index}>
                  <h3 className="location-header">{office.name}</h3>

                  <p className="location-phone">
                    <strong className="location-bold">PHONE: </strong>{" "}
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
                  <p className="location-hours">
                    <strong className="location-bold">
                      Hours of Operations:
                    </strong>{" "}
                    {office.openingHours.markdown}
                  </p>
               
                <h2 className="contacts-header">Contacts</h2>
                <div className="accordion-container">
                  {office.contacts.map((contact) => (
                      <Accordion key={contact.name}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>{contact.name}{" "}{'('}<strong><em>{contact.position}</em></strong>{')'}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        {setContactPhone(contact)}
                        {/* <Typography><strong>PHONE:</strong>{" "}{contact.phone}</Typography> */}
                        {/* contact.phone ? <Typography><strong>PHONE:</strong>{" "}{contact.phone}</Typography> : " " */}
                        <Typography><strong>EMAIL:</strong>{" "}{contact.email}</Typography>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </div>
              </div>
              ))}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LocationCards;
