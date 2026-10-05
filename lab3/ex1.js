const fs = require("node:fs");

async function readAndFilter() {
  const data = await fs.promises.readFile("liga.json", "utf8");
  const teams = JSON.parse(data);
  const result = teams.filter((team) => team.goals > 10);
  console.log(result);
  return result;
}

async function saveResult(filteredTeams) {
  const data = JSON.stringify(filteredTeams);
  await fs.promises.writeFile("10Teams.json", data);
}

async function main() {
  const filteredTeams = await readAndFilter();
  await saveResult(filteredTeams);
}

main();
