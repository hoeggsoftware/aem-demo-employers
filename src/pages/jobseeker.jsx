import * as React from "react";
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import "./App.css";
import JobSearch from "./assets/job-search";
import LostMyJob from "./assets/lost-my-job";
import Benefits from "../components/job-seeker/jbenefits";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Submenu from "@/components/job-seeker/jsubmenu";

// Should we just create a useEffect and prop for the benefit and use the submenu items as the choice for that?

const endpointMapping = {
  'lost-my-job': 'financial-benefits',
  'job-search': 'services-and-other-opportunities',
}

const JobSeeker = () => {
  const [selectedMenu, setSelectedMenu] = useState('financial-benefits');
  const [endpoint, setEndpoint] = useState(endpointMapping['lost-my-job']);
  const [page, setPage] = useState('financial-benefits');

  const handleMenuChange = (menuItem) => {
    setSelectedMenu(menuItem);
    setEndpoint(endpointMapping[menuItem]);
  }

  return (
    <Layout>
      <Submenu onMenuChange={handleMenuChange} />
      <Benefits state={selectedMenu} endpoint={endpoint} />
    </Layout>
  );
};

export default JobSeeker;
