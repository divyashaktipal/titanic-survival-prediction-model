const ResultCard = ({ result }) => {
  if (!result) return null;

  return (
    <div className="mt-6 p-6 bg-white rounded-2xl shadow-sm border">
      <h2 className="text-lg font-medium mb-2">Prediction Result</h2>

      <p className="text-xl font-semibold">
        {result.survived ? "Passenger Survived" : "Passenger Did Not Survive"}
      </p>

      <p className="text-sm text-slate-500 mt-2">
        Survival Probability: {(result.survival_probability * 100).toFixed(2)}%
      </p>
    </div>
  );
};

export default ResultCard;
