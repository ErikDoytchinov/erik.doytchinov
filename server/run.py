from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI()

# Sample data storage
items = {
    1: {"name": "Item 1", "description": "This is item 1"},
    2: {"name": "Item 2", "description": "This is item 2"},
}


# Request model
class Item(BaseModel):
    name: str
    description: str


@app.get("/")
def read_root():
    return {"message": "Welcome to the FastAPI server"}


@app.get("/items/{item_id}")
def read_item(item_id: int):
    if item_id in items:
        return items[item_id]
    else:
        raise HTTPException(status_code=404, detail="Item not found")


@app.post("/items/")
def create_item(item: Item):
    new_id = max(items.keys()) + 1
    items[new_id] = item.dict()
    return {"id": new_id, "item": items[new_id]}


@app.put("/items/{item_id}")
def update_item(item_id: int, item: Item):
    if item_id in items:
        items[item_id] = item.dict()
        return {"message": "Item updated", "item": items[item_id]}
    else:
        raise HTTPException(status_code=404, detail="Item not found")


@app.delete("/items/{item_id}")
def delete_item(item_id: int):
    if item_id in items:
        del items[item_id]
        return {"message": "Item deleted"}
    else:
        raise HTTPException(status_code=404, detail="Item not found")
