import { useState } from "react";
import { predictSurvival } from "../api/prediction";

const PassengerForm = ({ setResult }) => {
  const [form, setForm] = useState({
    Pclass: 3,
    Sex: 1,
    Age: 22,
    SibSp: 0,
    Parch: 0,
    Fare: 7.25,
    Embarked: 2,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: Number(e.target.value) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = await predictSurvival(form);
      setResult(data);
    } catch (err) {
      alert("Error connecting to server");
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-2xl shadow-sm border space-y-4"
    >
      <div className="grid grid-cols-2 gap-4">
        <input name="Age" type="number" placeholder="Age" onChange={handleChange} className="input" />
        <input name="Fare" type="number" placeholder="Fare" onChange={handleChange} className="input" />

        <select name="Pclass" onChange={handleChange} className="input">
          <option value={1}>Class 1</option>
          <option value={2}>Class 2</option>
          <option value={3}>Class 3</option>
        </select>

        <select name="Sex" onChange={handleChange} className="input">
          <option value={1}>Male</option>
          <option value={0}>Female</option>
        </select>

        <input name="SibSp" type="number" placeholder="Siblings/Spouse" onChange={handleChange} className="input" />
        <input name="Parch" type="number" placeholder="Parents/Children" onChange={handleChange} className="input" />

        <select name="Embarked" onChange={handleChange} className="input col-span-2">
          <option value={0}>Cherbourg</option>
          <option value={1}>Queenstown</option>
          <option value={2}>Southampton</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-accent text-white py-3 rounded-xl hover:opacity-90 transition"
      >
        {loading ? "Predicting..." : "Predict Survival"}
      </button>
    </form>
  );
};

export default PassengerForm;
