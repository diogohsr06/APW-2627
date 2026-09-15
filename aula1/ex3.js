const std = {name: "Filipe", number: 12123}

function showProps(obj)
{
  for(let p in obj) {
    console.log(p + ": " + obj[p])
  }
}

console.log(std)


