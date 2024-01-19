import * as React from "react";
import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import JobSeekerImage from "@/pages/assets/jobseeker-svg";
import EmployerImage from "@/pages/assets/employer-svg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Link from "next/link";
import { useLanguage } from "./LanguageContext";

const navMapping = {
  "Employers and Partners": "/employers",
  "Job Seekers": "/jobseeker",
  Locations: "/locations",
};

const langMapping = {
  "ENGLISH": "en",
  "SPANISH": "es",
  "RUSSIAN": "ru"
}

const Navbar = () => {
  const { selectedLang, handleLangChange } = useLanguage();
  const [lang, setLang] = useState(langMapping["ENGLISH"]);
  const [displayLang, setDisplayLang] = useState("ENGLISH")
  const [navItems, setNavItems] = useState([]);

  const url = process.env.NEXT_PUBLIC_FETCH_URL;

  const handleChange = (event) => {
    const selectedLang = event.target.value
    setLang(selectedLang);
    handleLangChange(selectedLang);
    setDisplayLang(selectedLang);
  };
  const fetchNavItems = () => {
    fetch(
      `${url}nav-items`
    )
      .then((res) => {
        return res.json();
      })
      .then((d) => {
        setNavItems(d.data.navigationElementList.items);
      });
  };

  useEffect(() => {
    fetchNavItems();
  }, []);

  const findImageUrlByTitle = (title) => {
    const item = navItems.find((i) => i.title === title);
    return item ? item.image._publishUrl : "";
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/" className="link-dec logo-link">
              <span className="t-underline">C</span>o
              <span className="t-underline">U</span>
            </Link>
          </Typography>
          <FormControl className="language-selector">
            <InputLabel>Language</InputLabel>
            <Select
              labelId="language-selector"
              id="demo-simple-select"
              value={displayLang}
              label="LANGUAGE"
              onChange={handleChange}
              variant="standard"
            >
              <MenuItem value={"ENGLISH"}>ENGLISH</MenuItem>
              <MenuItem value={"SPANISH"}>SPANISH</MenuItem>
            </Select>
          </FormControl>
        </Toolbar>
      </AppBar>
      {/* <nav>
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link className="nav-link link-dec" href="/jobseeker">
              <img src={findImageUrlByTitle("Job Seekers")} alt="Job Seekers" />
              JOB SEEKERS
            </Link>
          </li>
          <li className="nav-list-item">
            <Link className="nav-link link-dec" href="/employers">
              <img
                src={findImageUrlByTitle("Employers and Partners")}
                alt="Employers"
              />
              EMPLOYERS
            </Link>
          </li>
          <li className="nav-list-item">
            <Link className="nav-link link-dec" href="/locations">
              <EmployerImage />
              LOCATIONS
            </Link>
          </li>
        </ul>
      </nav> */}
      <nav className="nav-list">
        {navItems.map((item) => (
          <li key={navItems.title} className="nav-list-item">
            <Link className="nav-link link-dec" href={navMapping[item.title]}>
              <img src={item.image._publishUrl} />
              {item.title.toUpperCase()}
            </Link>
          </li>
        ))}
      </nav>
    </Box>
  );
};

export default Navbar;
