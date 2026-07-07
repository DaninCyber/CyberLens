from fastapi import FastAPI

app = FastAPI(title="CyberLens  API")

@app.get("/")
def home():
    return{

 "message: Welcome to CyberLens!"
}