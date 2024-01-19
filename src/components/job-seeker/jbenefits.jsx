import { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import { useLanguage } from "../LanguageContext";

const fetchUrl = process.env.REACT_APP_FETCH_URL;

const extMapping = {
  docx: "Word Document",
  pdf: "PDF Document",
  csv: "Excel Document",
  rtf: "Rich Text Format",
};

const url = process.env.NEXT_PUBLIC_FETCH_URL;

const Benefits = ({ state, endpoint }) => {
  const { selectedLang } = useLanguage();
  const [benefits, setBenefits] = useState([]);
  const [page, setPage] = useState("financial-benefits");

  const setFinancialBenefits = () => {
    setPage("financial-benefits");
  };

  const setServicesBenefits = () => {
    setPage("services-and-other-opportunities");
  };

  const fetchBenefits = (e) => {
    fetch(
      `${url}benefits;path=/content/dam/aem-demo-employers/${selectedLang}/job-seekers/benefits/${e}`
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

  useEffect(() => {
    fetchBenefits(endpoint);
  }, [selectedLang]);

  // IN AN ACTUAL APP WE WOULD CACHE THE RESULTS.

  return (
    console.log(`language: ${selectedLang}`),
    (
      <div className="container">
        <h2 className="benefits-header">Benefits</h2>
        <h2>{selectedLang}</h2>
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
                <ul className="file-list">
                  {benefit.files.map((f) => (
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
    )
  );
};

export default Benefits;
