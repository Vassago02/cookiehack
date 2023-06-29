setInterval(() => {
let buildingGains = Game.ObjectsById.map((building, index) => {
    if (building.getPrice() > Game.cookies * 4 && index != 0) {
        return 0;
    }
    let oldCookiesPs = 0;
    for(let j = 0; j < Game.ObjectsById.length; j++){ oldCookiesPs += Game.ObjectsById[j].cps(Game.ObjectsById[j])*Game.ObjectsById[j].amount; }
    Game.ObjectsById[index].amount++;
    let newCookiesPs = 0;
    for(let j = 0; j < Game.ObjectsById.length; j++){ newCookiesPs += Game.ObjectsById[j].cps(Game.ObjectsById[j])*Game.ObjectsById[j].amount; }
    Game.ObjectsById[index].amount--;
    return (newCookiesPs - oldCookiesPs)/building.getPrice();
});

let bestBuilding = -1;
let bestBuildingId = -1;

for (let i = 0; i < Game.ObjectsById.length; ++i) {
    if (buildingGains[i] > bestBuilding) {
        bestBuilding = buildingGains[i]
        bestBuildingId = i;
    }
}

let upgradeGains = Game.UpgradesInStore.map((upgrade, index) => {
    if (upgrade.getPrice() > Game.cookies * 4 && index != 0) {
        return 0;
    }
    let oldCookiesPs = 0;
    for(let j = 0; j < Game.ObjectsById.length; j++){ oldCookiesPs += Game.ObjectsById[j].cps(Game.ObjectsById[j])*Game.ObjectsById[j].amount; }
    Game.UpgradesInStore[index].bought = 1;
    let newCookiesPs = 0;
    for(let j = 0; j < Game.ObjectsById.length; j++){ newCookiesPs += Game.ObjectsById[j].cps(Game.ObjectsById[j])*Game.ObjectsById[j].amount; }
    Game.UpgradesInStore[index].bought = 0;
    return (newCookiesPs - oldCookiesPs)/upgrade.getPrice();
});

let bestUpgrade = -1;
let bestUpgradeId = -1;

for (let i = 0; i < Game.UpgradesInStore.length; ++i) {
    if (upgradeGains[i] > bestUpgrade) {
        bestUpgrade = upgradeGains[i]
        bestUpgradeId = i;
    }
}

if (bestUpgrade > bestBuilding) {
    console.log("Trying to buy..." + Game.UpgradesInStore[bestUpgradeId].name + " (" + bestUpgrade + ")");
    Game.UpgradesInStore[bestUpgradeId].buy();
} else {
    console.log("Trying to buy... " + Game.ObjectsById[bestBuildingId].name + " (" + bestBuilding + ")")
Game.ObjectsById[bestBuildingId].buy();
}
if (Game.shimmers.length) {
    Game.shimmers[0].pop()
}
}, 500);

setInterval(() => {
    if (Object.keys(Game.buffs).includes("Click frenzy")) {
        Game.ClickCookie()
    }
},50)

setInterval(() => {
Game.ObjectsById.reduce((a, e) => {
    if ((e.cps(e)*e.amount)/(e.level + 1) > (a.cps(a)*a.amount)/(a.level+1)) {
setInterval(() => {
Game.ObjectsById.reduce((a, e) => {
    if ((e.cps(e)*e.amount)/(e.level + 1) > (a.cps(a)*a.amount)/(a.level+1) && !a.level == 0) {
        return e;
    } else {
        return a;
    }
}, Game.ObjectsById[0]).levelUp()
}, 6*60*60*1000)

