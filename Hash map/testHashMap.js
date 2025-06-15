import HashMap from "./HashMap.js";

const map = new HashMap();
map.set("abba", "1");
map.set("bob", "2");
map.set("calob", "3");
map.set("david", "4");
map.set("evin", "5");
map.set("frank", "6");
map.set("gabriel", "7");
map.set("harvid", "8");
map.set("ian", "9");
map.set("json", "10");
map.set("kiss", "11");
map.set("leon", "12");
map.set("mira", "13");
map.set("niko", "14");
map.set("olaf", "15");
map.set("peter", "16");
map.set("quent", "17");
map.set("rose", "18");
map.set("sven", "19");
map.set("tina", "20");

console.log("length: ", map.length());
console.log("getting abba: ", map.get("abba"));
console.log("-------------LOG--------------------------");

console.log("getting keys: ", map.keys());
console.log("getting values: ", map.values());
console.log("-------------LOG--------------------------");

console.log("getting entries: ", map.entries());
console.log("-------------LOG--------------------------");

console.log("has hello: ", map.has("hello"));
console.log("-------------LOG--------------------------");

console.log(map.remove("tina"));
console.log(map.remove("ian"));

map.log();

map.clear();
map.log();
