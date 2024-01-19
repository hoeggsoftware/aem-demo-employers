import * as React from "react";
import { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";

const fetchUrl = process.env.REACT_APP_FETCH_URL;

const Benefits = ({ state, endpoint, lang }) => {
  const [benefits, setBenefits] = useState([]);
  const [page, setPage] = useState("finding-employees");

  const url = process.env.NEXT_PUBLIC_FETCH_URL;

  const fetchBenefits = (e) => {
    fetch(
      `${url}benefits;path=/content/dam/aem-demo-employers/en/employers-and-partners/${e}`
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
        {benefits.map((benefit, index) => (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{benefit.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{benefit.text.plaintext}</Typography>
              <ul className="file-list">
                {benefit.files.map((f) => (
                  console.log(f),
                  <li key={f._path}>
                    {f.file && (
                      <a
                        className="file-list-item"
                        href={f.file._publishUrl}
                        target="_blank"
                      >
                        {f.fileName}
                        {" ("}
                        {f.extension}
                        {", "}
                        {f.size}
                        {")"}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
