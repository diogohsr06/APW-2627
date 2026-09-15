//Object init
const std = {name: "Filipe", number: 12123}

//Function to display an object's properties one by one, with a for loop iteration
function showProps(obj)
{
  for(let p in obj) {
    console.log(p + ": " + obj[p])
  }
}

//Calls function
showProps(std)


