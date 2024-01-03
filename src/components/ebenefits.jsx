import * as React from "react";
import { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";

const fetchUrl = process.env.REACT_APP_FETCH_URL;

const Benefits = (props) => {
  /* 
  Maybe use the classname of parent component to set usestate? / create use state in parent component to set the prop (give them IDs) and use document.querySelector('ID') / hardcode it (not very flexible)

const [benefits, setBenefits] = React.useState(props)
*/

  const [benefits, setBenefits] = useState([]);

  const fetchBenefits = () => {
    fetch(
      `https://publish-p127513-e1240269.adobeaemcloud.com/graphql/execute.json/aem-demo-employers/content-box-by-path;path=/content/dam/aem-demo-employers/en/employers-and-partners`,
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
    fetchBenefits();
  }, []);

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
        {/* <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Unemployment Insurance Benefit </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Unemployment Allowance</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              The European Union and Unemployment Insurance
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Redundancy Benefit</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Insolvency Benefit</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion> */}
      </div>
    </div>
  );
};

export default Benefits;
