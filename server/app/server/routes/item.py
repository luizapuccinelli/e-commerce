from fastapi import APIRouter, Body
from fastapi.encoders import jsonable_encoder

from app.server.database import (
    add_item,
    delete_item,
    retrieve_item,
    retrieve_items,
    update_item,
)
from app.server.models.item import (
    ErrorResponseModel,
    ResponseModel,
    ItemSchema,
    UpdateItemModel,
)

router = APIRouter()

@router.post("/", response_description="item data added into the database")
async def add_item_data(item: ItemSchema = Body(...)):
    item = jsonable_encoder(item)
    new_item = await add_item(item)
    return ResponseModel(new_item, "item added successfully")

@router.get("/", response_description="items retrieved")
async def get_items():
    items = await retrieve_items()
    if items:
        return ResponseModel(items, "items data retrieved successfully")
    return ResponseModel(items, "Empty list returned")