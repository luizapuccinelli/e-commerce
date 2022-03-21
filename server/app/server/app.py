from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from app.server.routes.item import router as itemRouter


app = FastAPI()

origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(itemRouter, tags=["item"], prefix="/item")


@app.get("/", tags=["Root"])
async def read_root():
    return {"message": "Welcome items API"}