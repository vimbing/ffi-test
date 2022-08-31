const ffi = require('ffi-napi');
const path = require('path');

const cffiName = "./helloworld.dll";

var golibrary = ffi.Library(
    path.join(__dirname, cffiName),
    {
        "Add": ["int", ["int", "int"]]
    },
    ffi.DynamicLibrary(
        path.join(__dirname, cffiName),
        ffi.DynamicLibrary.FLAGS.RTLD_NOW | ffi.DynamicLibrary.FLAGS.RTLD_GLOBAL
    )
);

console.log(golibrary.Add(1, 5));