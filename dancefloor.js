// Это ваш танец: через какой промежуток времени показать какую драгоценность
// let dance = [
//   [1000, allGems[24]],
//   [1000, allGems[37]],    //Танзанит  
//   [1000, allGems[40]],    //Андалузит
//   [1000, allGems[33]],
//   [1000, allGems[38]],
//   [1000, allGems[18]],
//   [1000, allGems[19]],
//   [1000, allGems[22]],
//   [1000, allGems[21]],
//   [1000, allGems[36]],
//   [1000, allGems[0]],     //Алмаз
//   [1000, allGems[1]],     //Хризолит
//   [100, allGems[23]],
//   [1000, allGems[2]],     //Эвклаз
//   [1000, allGems[3]],     //Корунд
//   [1000, allGems[4]],     //Рубин
//   [1000, allGems[0]],
//   [1000, allGems[1]],
//   [1000, allGems[2]],
//   [1000, allGems[3]],
//   [1000, allGems[39]],    //Гиацинт
// ];
let dance = [
  [500, allGems[0]], 
  [500, allGems[0]], 
  [500, allGems[0]], 
  [500, allGems[0]], 
  [500, allGems[0]], 
  [500, allGems[33]],
  [500, allGems[0]], 
  [500, allGems[0]], 
  [500, allGems[0]], 
  [500, allGems[0]], 
  [500, allGems[0]], 
  ];
//let elves=[];
function random(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}
let allfaces=['(·_·)','(o_o)','(o_O)','(-_-)','(._.)','(---)','(!-!)','(|-|)'];
// for (let i = 0; i < 2; i++) {
//     let elv={
//         name: allElves[random(1,allElves.length-1)],

//         head: allfaces[random(1,allfaces.length)-1],
//         danceSpeed: random(5,500),
//         stance: [0, 0, 1, 1],
//         favouriteGems: [allGems[random(1,allGems.length)-1]],
//         dislikedGems: [allGems[random(1,allGems.length)-1]]
//     };
//     elves[i]=elv;
// }

// // Это ваша танцевальная группа
let elves = [{
  name: allElves[0],
  head: '(·_·)',
  danceSpeed: 500,
  stance: [0, 0, 1, 1],
  favouriteGems: [],
  dislikedGems: [allGems[1]]
},
{
  name: allElves[1],
  head: '(o_o)',
  danceSpeed: 1000,
  stance: [0, 0, 1, 1],
  favouriteGems: [],
  dislikedGems: [allGems[1]]
}];
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