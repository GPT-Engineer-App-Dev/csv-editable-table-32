import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl mb-4">Welcome to the CSV Tool</h1>
      <p className="mb-4">Upload, edit, and download your CSV files with ease.</p>
      <Link to="/csv-tool">
        <Button>Get Started</Button>
      </Link>
    </div>
  );
};

export default Index;