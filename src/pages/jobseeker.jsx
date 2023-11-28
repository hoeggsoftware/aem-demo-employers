import * as React from "react";
import Layout from "@/components/Layout";
import "./App.css";
import JobSearch from "./assets/job-search";
import LostMyJob from "./assets/lost-my-job";
import Benefits from "../components/benefits";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const JobSeeker = () => {
  return (
    <Layout>
      {/* change sub-menu into a component to make easier to show on lost my job and job search pages */}
      <div className="sub-menu">
        <div className="sub-menu-container">
          <div className="container">
            <h1 className="sub-menu-header">Job Seekers</h1>
            <ul className="sub-list">
              <Card className="sub-list-item">
                <CardContent >
                  <li>
                    <LostMyJob />
                    Lost My Job
                  </li>
                </CardContent>
              </Card>
              <Card className="sub-list-item">
                <CardContent>
                  <li >
                    <JobSearch />
                    Job Search
                  </li>
                </CardContent>
              </Card>
            </ul>
          </div>
        </div>
        <Benefits />
      </div>
    </Layout>
  );
};

export default JobSeeker;
