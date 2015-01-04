ddict
=====

A lightweight and extendible dictionary object written in Javascript.

Dictionary([attributes])
---
The `Dictionary` constructor can accept an optional object to set as its initial attributes. The Dictionary is used to manage instance `attributes` with the following API:

### has(key)
  Returns a boolean value for the existence of `key` in the dictionary.
  
### get(key)
  Returns the value associated with `key`.
  
### set(obj) 
  Supply `set` with an object to have each `{key: value} pair inserted in the dictionary. Returns `this`.
  
### set(key, value)
  Supply `set` with a `key, value` pair for it to be inserted in the dictionary. Returns `this`.
  
## delete(key)
  Removes the the key, value pair associated with `key`. Returns `this`.
	
### extend(obj)
