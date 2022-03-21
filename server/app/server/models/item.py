from typing import Optional

from pydantic import BaseModel, EmailStr, Field


class ItemSchema(BaseModel):
    name: str = Field(...)
    description: str = Field(...)
    price: float = Field(...)
    imageUrl: str = Field(...)

    class Config:
        schema_extra = {
            "example": {
                "name": "Cadeira Gamer",
                "description": "Uma cadeira gamer bem confortável",
                "price": 200,
                "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png",
            }
        }


class UpdateItemModel(BaseModel):
    name: Optional[str]
    description: Optional[str]
    price: Optional[float]
    imageUrl: Optional[str]

    class Config:
        schema_extra = {
            "example": {
                "name": "Cadeira Gamer",
                "description": "Uma cadeira gamer bem confortável",
                "price": 200,
                "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png",
            }
        }


def ResponseModel(data, message):
    return {
        "data": [data],
        "code": 200,
        "message": message,
    }


def ErrorResponseModel(error, code, message):
    return {"error": error, "code": code, "message": message}