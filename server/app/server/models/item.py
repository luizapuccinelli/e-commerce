from typing import Optional

from pydantic import BaseModel, EmailStr, Field


class ItemSchema(BaseModel):
    name: str = Field(...)
    description: str = Field(...)
    price: float = Field(...)
    imageUrl: list = Field(...)

    class Config:
        schema_extra = {
            "example": {
                "name": "Cadeira Gamer",
                "description": "Uma cadeira gamer bem confortável",
                "price": 200,
                "imageUrl": ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png","https://s2.glbimg.com/QAGIEFy-ZKnxA2e7-ee-NUl7NtY=/0x0:680x680/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/k/V/SxEBZlSZi41rYAkI5DOQ/cgbj0ga-huiaoaqraaantg8ow7g750.png680x680.jpg"],
            }
        }


class UpdateItemModel(BaseModel):
    name: Optional[str]
    description: Optional[str]
    price: Optional[float]
    imageUrl: Optional[list]

    class Config:
        schema_extra = {
            "example": {
                "name": "Cadeira Gamer",
                "description": "Uma cadeira gamer bem confortável",
                "price": 200,
                "imageUrl": ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png","https://s2.glbimg.com/QAGIEFy-ZKnxA2e7-ee-NUl7NtY=/0x0:680x680/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/k/V/SxEBZlSZi41rYAkI5DOQ/cgbj0ga-huiaoaqraaantg8ow7g750.png680x680.jpg"],
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