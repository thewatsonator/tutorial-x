### Creating new versions of objects

It's important to note that if you wish to override a value of an original object you should always start with the original object spread as the first values of the new object.

```javascript
const yeOldeObject = {
  apple: "red",
  banana: "yellow"
};

// new object
const newObject = {
  ...yeOldeObject,'
  // override apple from red to green
  apple: "green"
};
```

### Factory creating default object with overrides

If you'd like to create value objects you can use a factory function which generates a specific type of object where you can override properties of the object using spread operator.

```javascript
const carFactory = (overrides = {}) => ({
  wheels: 4,
  // default is two doors
  doors: 2,
  windows: 2,
  windscreen: 1,
  rearview: 1,
  ...overrides
});

const new2DoorCar = carFactory();
const new4DoorCar = carFactory({ doors: 4, windows 4})
```
