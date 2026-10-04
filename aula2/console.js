const oldConsoleLog = console.log

function changeConsoleLog() {
  console.log = function(p) {
    const d = Date()
    oldConsoleLog(d,p)
  }
}

changeConsoleLog()

console.log("Hello World")
