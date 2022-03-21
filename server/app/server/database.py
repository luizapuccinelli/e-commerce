from bson.objectid import ObjectId
import motor.motor_asyncio
from decouple import config

MONGO_DETAILS = config("MONGO_DETAILS")

client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_DETAILS)

database = client.item

item_collection = database.get_collection("item_collection")

# helpers


def item_helper(item) -> dict:
    return {
        "id": str(item["_id"]),
        "name": item["name"],
        "description": item["description"],
        "price": item["price"],
        "imageUrl": item["imageUrl"],
    }

# Retrieve all items present in the database
async def retrieve_items():
    items = []
    async for item in item_collection.find():
        items.append(item_helper(item))
    return items


# Add a new item into to the database
async def add_item(item_data: dict) -> dict:
    item = await item_collection.insert_one(item_data)
    new_item = await item_collection.find_one({"_id": item.inserted_id})
    return item_helper(new_item)


# Retrieve a item with a matching ID
async def retrieve_item(id: str) -> dict:
    item = await item_collection.find_one({"_id": ObjectId(id)})
    if item:
        return item_helper(item)


# Update a item with a matching ID
async def update_item(id: str, data: dict):
    # Return false if an empty request body is sent.
    if len(data) < 1:
        return False
    item = await item_collection.find_one({"_id": ObjectId(id)})
    if item:
        updated_item = await item_collection.update_one(
            {"_id": ObjectId(id)}, {"$set": data}
        )
        if updated_item:
            return True
        return False


# Delete a item from the database
async def delete_item(id: str):
    item = await item_collection.find_one({"_id": ObjectId(id)})
    if item:
        await item_collection.delete_one({"_id": ObjectId(id)})
        return True