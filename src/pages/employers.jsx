import { useState } from "react";
import Layout from "@/components/Layout";
import "./App.css";
import Submenu from "@/components/employer/esubmenu";
import Benefits from "../components/employer/ebenefits";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const endpointMapping = {
  "finding-employees": "finding-employees",
  partners: "start-training",
};

const Employer = () => {
  const [selectedMenu, setSelectedMenu] = useState("finding-employees");
  const [endpoint, setEndpoint] = useState(
    endpointMapping["finding-employees"]
  );

  const handleMenuChange = (menuItem) => {
    setSelectedMenu(menuItem);
    setEndpoint(endpointMapping[menuItem]);
  };

  return (
    <Layout>
      <Submenu onMenuChange={handleMenuChange} />
      <Benefits state={selectedMenu} endpoint={endpoint} />
    </Layout>
  );
};

export default Employer;
