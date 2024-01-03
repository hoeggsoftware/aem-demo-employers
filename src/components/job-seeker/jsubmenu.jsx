import { useEffect, useState } from "react";
import JobSearch from "@/pages/assets/job-search";
import LostMyJob from "@/pages/assets/lost-my-job";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const Submenu = ({ onMenuChange }) => {
  const [active, setActive] = useState("lost-my-job");

  const handleMenuChange = (menuItem) => {
    setActive(menuItem);
    onMenuChange(menuItem);
  };

  return (
    <div className="sub-menu">
      <div className="sub-menu-container">
        <div className="container">
          <h1 className="sub-menu-header">Job Seekers</h1>
          <ul className="sub-list">
            <Card
              className={`sub-list-item hover ${
                active === "lost-my-job" ? "sub-list-active" : ""
              }`}
              onClick={() => handleMenuChange("lost-my-job")}
            >
              <CardContent>
                <li>
                  <LostMyJob />
                  Lost My Job
                </li>
              </CardContent>
            </Card>
            <Card
              className={`sub-list-item hover ${
                active === "job-search" ? "sub-list-active" : ""
              }`}
              onClick={() => handleMenuChange("job-search")}
            >
              <CardContent>
                <li>
                  <JobSearch />
                  Job Search
                </li>
              </CardContent>
            </Card>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Submenu;
