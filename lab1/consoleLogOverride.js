const originalLog = console.log

console.log = function (message) {
    originalLog(new Date() + " - " + message)
}

console.log("Hello World")
