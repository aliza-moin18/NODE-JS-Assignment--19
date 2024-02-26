// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.



let guestArr: string[] = ["Aliza", "Miral", "Aaira"];

let canNotattend: string = "Arooba";

let newGuest: string = "Amal";


guestArr[guestArr.indexOf(canNotattend)] = newGuest;
guestArr.unshift("Daneen");


let middleGuest: string = "Daima";

let middleIndex = guestArr.length / 2;


guestArr.splice(middleIndex, 0, middleGuest);
guestArr.push("Zimal");
console.log(guestArr);


console.log(guestArr.length + " " + "people" + " " + "are invited to dinner");