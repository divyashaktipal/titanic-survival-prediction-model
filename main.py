from fastapi import FastAPI
from pydantic import BaseModel
import numpy as np
import pickle

app = FastAPI(title="Titanic Survival Prediction API")

# Load model
with open("titanic.pkl", "rb") as f:
    model = pickle.load(f)


# Input schema
class Passenger(BaseModel):
    Pclass: int
    Sex: int          # 0 = female, 1 = male (must match training)
    Age: float
    SibSp: int
    Parch: int
    Fare: float
    Embarked: int     # 0 = C, 1 = Q, 2 = S (must match training)


@app.get("/")
def home():
    return {"message": "Titanic Prediction API is running"}


@app.post("/predict")
def predict_survival(data: Passenger):
    features = np.array([
        data.Pclass,
        data.Sex,
        data.Age,
        data.SibSp,
        data.Parch,
        data.Fare,
        data.Embarked
    ]).reshape(1, -1)

    prediction = model.predict(features)[0]
    probability = model.predict_proba(features)[0][1]

    return {
        "survived": bool(prediction),
        "survival_probability": float(probability)
    }
