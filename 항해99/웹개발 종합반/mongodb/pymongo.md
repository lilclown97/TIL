## Save

```python
db.users.insert_one({'name':'bobby','age':21}) # 1

doc = {'name':'bobby','age':21} # 2
db.users.insert_one(doc)
```

## Find

```python
all_users = list(db.users.find({},{'_id':False})) # find all

user = db.users.find_one({'name':'bobby'}) # find one
```

## Update

```python
db.users.update_one({'name':'bobby'},{'$set':{'age':19}})
```

## Delete

```python
db.users.delete_one({'name':'bobby'})
```