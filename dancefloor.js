// Это ваш танец: через какой промежуток времени показать какую драгоценность
let dance = [
  [200, allGems[0]],
  [200, allGems[1]],
  [200, allGems[2]],
  [200, allGems[3]],
  [200, allGems[4]],
  [200, allGems[0]],
  [200, allGems[1]],
  [3000, allGems[2]],
  [200, allGems[3]],
  [200, allGems[4]],
];
let elves=[];
function random(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}
let allfaces=['(·_·)','(o_o)','(o_O)','(-_-)','(._.)','(---)','(!-!)','(|-|)'];
for (let i = 0; i < 1; i++) {
    let elv={
        name: allElves[random(1,allElves.length-1)],

        head: allfaces[random(1,allfaces.length)-1],
        danceSpeed: 200,
        stance: [0, 0, 1, 1],
        favouriteGems: [allGems[random(1,allGems.length)-1]],
        dislikedGems: [allGems[random(1,allGems.length)-1]]
    };
    elves[i]=elv;
}

// // Это ваша танцевальная группа
// let elves = [{
//   name: allElves[0],
//   head: '(·_·)',
//   danceSpeed: 200,
//   stance: [0, 0, 1, 1],
//   favouriteGems: [allGems[0]],
//   dislikedGems: [allGems[1]]
// },
// {
//   name: allElves[1],
//   head: '(o_o)',
//   danceSpeed: 200,
//   stance: [0, 0, 1, 1],
//   favouriteGems: [allGems[1]],
//   dislikedGems: [allGems[0]]
// },
// {
//   name: allElves[2],
//   head: '(o_O)',
//   danceSpeed: 200,
//   stance: [0, 0, 1, 1],
//   favouriteGems: [allGems[1]],
//   dislikedGems: [allGems[0]]
// },
// {
//   name: allElves[3],
//   head: '(-_-)',
//   danceSpeed: 200,
//   stance: [0, 0, 1, 1],
//   favouriteGems: [allGems[1]],
//   dislikedGems: [allGems[0]]
// },
// {
//   name: allElves[4],
//   head: '(._.)',
//   danceSpeed: 200,
//   stance: [0, 0, 1, 1],
//   favouriteGems: [allGems[1]],
//   dislikedGems: [allGems[0]]
// },
//     {
//         name: allElves[5],
//         head: '(---)',
//         danceSpeed: 200,
//         stance: [0, 0, 1, 1],
//         favouriteGems: [allGems[2]],
//         dislikedGems: [allGems[1]]
//     }];

// Эта функция должна вернуть список эльфов для отрисовки
function getElves() {
  return elves;
}

// Эта функция должна вернуть танец для отрисовки
function getDance() {
  return dance;
}