import * as React from "react";
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

const Navbar = () => {
  const [language, setLanguage] = React.useState("ENGLISH");

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Unemployment
          </Typography>
          <FormControl>
            <Select
              labelId="language-selector"
              id="demo-simple-select"
              value={language}
              label="LANGUAGE"
              onChange={handleChange}
            >
              <MenuItem value={"ENGLISH"}>ENGLISH</MenuItem>
              <MenuItem value={"SPANISH"}>SPANISH</MenuItem>
              <MenuItem value={"RUSSIAN"}>RUSSIAN</MenuItem>
            </Select>
          </FormControl>
        </Toolbar>
      </AppBar>
      <nav>
        <ul className="nav-list">
          <li className="nav-list-item">
            {/* <Card>
              <CardContent> */}
                <Link className="nav-link" href="/jobseeker">
                  <JobSeekerImage />
                  JOB SEEKERS
                </Link>
              {/* </CardContent>
            </Card> */}
          </li>
          <li className="nav-list-item">
            <Card>
              <CardContent>
                <Link href="/employers">
                  <EmployerImage />
                  EMPLOYERS
                </Link>
              </CardContent>
            </Card>
          </li>
        </ul>
      </nav>
    </Box>
  );
};

export default Navbar;
