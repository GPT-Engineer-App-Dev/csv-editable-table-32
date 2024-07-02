import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to the CSV Tool</h1>
      <p className="mb-4">Upload, edit, and download CSV files with ease.</p>
      <Button onClick={() => navigate("/csv-tool")}>Get Started</Button>
    </div>
  );
};

export default Index;
