import * as React from "react";
import Layout from "@/components/Layout";
import "./App.css";
import Benefits from "../components/benefits";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const JobSeeker = () => {
  return (
    <Layout>
      <div className="sub-menu">
        <div className="sub-menu-container">
          <div className="container">
            <h1 className="sub-menu-header">Job Seekers</h1>
            <ul className="sub-list">
              <Card className="sub-list-item">
                <CardContent >
                  <li >
                    Lost My Job
                  </li>
                </CardContent>
              </Card>
              <Card className="sub-list-item">
                <CardContent>
                  <li >
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
