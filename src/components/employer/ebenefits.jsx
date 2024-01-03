import * as React from "react";
import { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";

const fetchUrl = process.env.REACT_APP_FETCH_URL;

const Benefits = ({ state, endpoint }) => {
  const [benefits, setBenefits] = useState([]);
  const [page, setPage] = useState("finding-employees");

  const fetchBenefits = (e) => {
    fetch(
      `https://publish-p127513-e1240269.adobeaemcloud.com/graphql/execute.json/aem-demo-employers/content-box-by-path;path=/content/dam/aem-demo-employers/en/employers-and-partners/${e}`
    )
      .then((res) => {
        return res.json();
      })
      .then((d) => {
        setBenefits(d.data.contentBoxList.items);
      });

    console.log(benefits);
  };

  useEffect(() => {
    fetchBenefits(endpoint);
  }, [endpoint]);

  return (
    <div className="container">
      <h2 className="benefits-header">Benefits</h2>
      <div className="accordion-container">
        {benefits.map((benefit) => (
          <Accordion key={benefit.title}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{benefit.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{benefit.text.plaintext}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
