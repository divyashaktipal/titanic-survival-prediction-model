import { useState } from "react";
import Layout from "../components/Layout";
import PassengerForm from "../components/PassengerForm";
import ResultCard from "../components/ResultCard";

const Home = () => {
  const [result, setResult] = useState(null);

  return (
    <Layout>
      <PassengerForm setResult={setResult} />
      <ResultCard result={result} />
    </Layout>
  );
};

export default Home;
