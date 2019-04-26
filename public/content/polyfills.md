Tools like Babel can recompile modern javascript syntax to ES5 however modern javascript also has new functions, objects, and methods.

For example `Array.from` is a new static method for the Array object and `find` is a new method for an array. These methods are not available in old browsers like IE11 so you must provide a polyfill for these.

https://polyfill.io provides an easy to use service to provide polyfills. It will load polyfills only if required by the users browser.

```html
<script src="https://polyfill.io/v3/polyfill.min.js?features=Array.from%2CArray.prototype.find"></script>
```
