ddict
=====

A simple dictionary data structure written in Javascript.

Dictionary([attributes])
---
The `Dictionary` constructor can accept an optional object to set as its initial attributes. The Dictionary is used to manage instance `attributes` with the following API:

### get(key)
  Returns the attribute associated with `key`.
### set(obj) 
  Supply set with an object to have each `key`, `value` pair set as an attribute. Returns `this`.
### set(key, value)
  Supply set with a `key`, `value` pair for it to be set as an attribute. Returns `this`.
### extend(obj)