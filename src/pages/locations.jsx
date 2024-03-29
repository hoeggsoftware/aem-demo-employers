import { useState, useEffect } from "react";
import "./App.css";
import LocationCards from "@/components/location/location-cards";
import Layout from "@/components/Layout";
import { Card, CardContent, Typography } from "@mui/material";

const Locations = () => {
  return (
    <Layout>
      <LocationCards />
    </Layout>
  );
};

export default Locations;
