import { useState, useEffect } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useLanguage } from "../LanguageContext";

const locationContent = {
  en: {
    phoneLabel: "PHONE",
    emailLabel: "EMAIL",
    addressLabel: "ADDRESS",
    hoursLabel: "Hours of Operations",
    contactsHeader: "Contacts",
  },
  es: {
    phoneLabel: "TELÉFONO",
    emailLabel: "CORREO ELECTRÓNICO",
    addressLabel: "DIRECCIÓN",
    hoursLabel: "Horario de operaciones",
    contactsHeader: "Contactos",
  },
};

const LocationCards = () => {
  const { selectedLang } = useLanguage();
  const [offices, setOffices] = useState([]);
  const [activeOffice, setActiveOffice] = useState("Office Name");

  const url = process.env.NEXT_PUBLIC_FETCH_URL;

  const fetchOffices = () => {
    fetch(`${url}offices`)
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

  const translate = (key) => {
    return locationContent[selectedLang][key] || key;
  };

  const setContactPhone = (contact) => {
    return contact.phone == null ? (
      ""
    ) : (
      <Typography>
        <strong>{translate("phoneLabel")}:</strong> {contact.phone}
      </Typography>
    );
  };
  {
    translate("");
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
                  className={`location-item ${
                    activeOffice == office.name ? "location-item-active" : ""
                  }`}
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
                <div className="location-info-container" key={index}>
                  <div className="location-contact-info">
                    <h2 className="location-header">{office.name}</h2>

                    <p className="location-phone">
                      <strong className="location-bold">
                        {translate("phoneLabel")}:{" "}
                      </strong>{" "}
                      {office.phone}
                    </p>
                    <p className="location-email">
                      <strong className="location-bold">
                        {translate("emailLabel")}:
                      </strong>{" "}
                      {office.email}
                    </p>
                    <p className="location-address">
                      <strong className="location-bold">
                        {translate("addressLabel")}:
                      </strong>{" "}
                      {office.address}
                    </p>
                    <p className="location-hours">
                      <strong className="location-bold">
                        {translate("hoursLabel")}:
                      </strong>{" "}
                      {office.openingHours.markdown}
                    </p>
                  </div>
                  <h2 className="contacts-header">Contacts</h2>
                  <div className="accordion-container">
                    {office.contacts.map((contact) => (
                      <Accordion key={contact.name}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography>
                            {contact.name} {"("}
                            <strong>
                              <em>{contact.position}</em>
                            </strong>
                            {")"}
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          {setContactPhone(contact)}
                          {/* <Typography><strong>PHONE:</strong>{" "}{contact.phone}</Typography> */}
                          {/* contact.phone ? <Typography><strong>PHONE:</strong>{" "}{contact.phone}</Typography> : " " */}
                          <Typography>
                            <strong>{translate("emailLabel")}:</strong>{" "}
                            {contact.email}
                          </Typography>
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
