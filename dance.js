let allElves = ['Амариэ', 'Амдир', 'Амрас', 'Амрод', 'Амрот', 'Анайрэ', 'Ангрод', 'Аргон', 'Аредэль', 'Арвен', 'Аэгнор', 'Белег', 'Воронвэ', 'Галадон', 'Галадриэль', 'Галатиль', 'Галдор из Гаваней', 'Галдор из Гондолина', 'Галион', 'Гвиндор', 'Гилдор Инглорион', 'Гил-Галад (Эрейнион)', 'Гимли', 'Глорфиндел', 'Даэрон', 'Дэнетор', 'Дуилин', 'Идриль', 'Имин', 'Иминиэ', 'Ингвион', 'Ингвэ', 'Инглор', 'Индис', 'Иримэ', 'Карантир', 'Квеннар и-Онотимо', 'Келеборн', 'Келебриан', 'Келебримбор', 'Келегорм', 'Кирдан', 'Куруфин', 'Леголас из Гондолина', 'Леголас из Лихолесья', 'Линдир', 'Лютиэн Тинувиэль', 'Маблунг', 'Маглор', 'Махтан', 'Маэглин', 'Маэдрос', 'Мириэль Сериндэ', 'Митреллас', 'Неллас', 'Нерданэль', 'Нимлот', 'Нимродэль', 'Ольвэ', 'Ородрет', 'Орофер', 'Орофин', 'Пенголод', 'Пенлод', 'Рог', 'Румил из Лориэна', 'Румил из Тириона', 'Салгант', 'Саэрос', 'Тата', 'Татиэ', 'Тингол', 'Трандуил', 'Тургон', 'Феанор', 'Финарфин', 'Финвэ', 'Финдис', 'Финдуилас', 'Финголфин', 'Фингон', 'Финрод Фелагунд', 'Халдир', 'Эарвен', 'Эгалмот', 'Эктелион', 'Элеммакил', 'Эленвэ', 'Элу Тингол (Эльвэ)', 'Эльмо', 'Энелиэ', 'Энель', 'Энердил', 'Элладан и Элрохир', 'Элронд', 'Эльдалотэ', 'Эол', 'Эрестор'];
let allGems = ['Алмаз', 'Хризолит', 'Эвклаз', 'Корунд', 'Рубин', 'Сапфир', 'Тааффеит', 'Берилл', 'Аквамарин', 'Изумруд', 'Гелиодор', 'Морганит', 'Хризоберилл', 'Александрит', 'Шпинель', 'Гранаты', 'Демантоид', 'Цаворит', 'Спессартин', 'Пироп', 'Родолит', 'Альмандин', 'Кварц', 'Аметист', 'Цитрин', 'Горный хрусталь', 'Дымчатый кварц', 'Празиолит', 'Аметрин', 'Розовый кварц', 'Турмалин', 'Верделит', 'Индиголит', 'Параиба', 'Опал благородный', 'Опал огненный', 'Топаз', 'Танзанит', 'Циркон', 'Гиацинт', 'Андалузит'];


// здесь реализуйте фигуры, команды

// Движение - это функция, которая принимает в качестве аргумента эльфа
// а возвращает Promise, который будет выполнен тогда, когда эльф выполнит
// указанное движение. Успешно выполненное движение должно зарезолвится снова
// в этого же эльфа с обновленной пастурой.

function leftHandUp(elf) {
  return new Promise((resolve) => {
    setTimeout(() => {
      elf.stance = [1, elf.stance[1], elf.stance[2],elf.stance[3]];
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function leftHandDown(elf) {
  return new Promise((resolve) => {
    setTimeout(() => {
      elf.stance = [0, elf.stance[1], elf.stance[2],elf.stance[3]];
      resolve(elf);
    }, elf.danceSpeed);
  });
}

function rightHandUp(elf) {
  return new Promise((resolve) => {
    setTimeout(() => {
      elf.stance=[elf.stance[0], 1, elf.stance[2],elf.stance[3]];
      resolve(elf);
    }, elf.danceSpeed);
  });
}
function rightHandDown(elf) {
    return new Promise((resolve) => {
        setTimeout(() => {
            elf.stance=[elf.stance[0], 0, elf.stance[2],elf.stance[3]];
            resolve(elf);
        }, elf.danceSpeed);
    });
}
function rightLegUp(elf) {
    return new Promise((resolve) => {
        setTimeout(() => {
            elf.stance=[elf.stance[0], elf.stance[1], elf.stance[2],1];
            resolve(elf);
        }, elf.danceSpeed);
    });
}
function rightLegDown(elf) {
    return new Promise((resolve) => {
        setTimeout(() => {
            elf.stance=[elf.stance[0], elf.stance[1], elf.stance[2],0];
            resolve(elf);
        }, elf.danceSpeed);
    });
}
function leftLegUp(elf) {
    return new Promise((resolve) => {
        setTimeout(() => {
            elf.stance=[elf.stance[0], elf.stance[1], 1, elf.stance[3]];
            resolve(elf);
        }, elf.danceSpeed);
    });
}
function leftLegDown(elf) {
    return new Promise((resolve) => {
        setTimeout(() => {
            elf.stance=[elf.stance[0], elf.stance[1], 0, elf.stance[3]];
            resolve(elf);
        }, elf.danceSpeed);
    });
}

function random(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1)
  rand = Math.round(rand);
  return rand;
}
function allHandUp(elf) {
   // console.log(elf);
    return new Promise((resolve) => {
        setTimeout(() => {
            elf.stance=[1, 1, elf.stance[2],elf.stance[3]];
            resolve(elf);
        }, elf.danceSpeed);
    });
}
function allLegDown(elf) {
    return new Promise((resolve) => {
        setTimeout(() => {
            elf.stance=[elf.stance[0], elf.stance[1], 0, 0];
            resolve(elf);
        }, elf.danceSpeed);
    });
}
function allLegUp(elf) {
    return new Promise((resolve) => {
        setTimeout(() => {
            elf.stance=[elf.stance[0], elf.stance[1], 1, 1];
            resolve(elf);
        }, elf.danceSpeed);
    });
}

function allHandDown(elf) {
    return new Promise((resolve) => {
        setTimeout(() => {
            elf.stance=[0, 0, elf.stance[2],elf.stance[3]];
            resolve(elf);
        }, elf.danceSpeed);
    });
}
function start(elf) {
    return new Promise((resolve) => {
        setTimeout(() => {
            elf.stance=[0, 0, 1,1];
            resolve(elf);
        }, elf.danceSpeed);
    });
}
function finish(elf) {
    return new Promise((resolve) => {
        setTimeout(() => {
            elf.stance=[1,1,0,0];
            resolve(elf);
        }, elf.danceSpeed);
    });
}
function leftSplit(elf) {
    return new Promise((resolve) => {
        setTimeout(() => {
            elf.stance=[1,elf.stance[1],1,elf.stance[3]];
            resolve(elf);
        }, elf.danceSpeed);
    });
}
function rightSplit(elf) {
    return new Promise((resolve) => {
        setTimeout(() => {
            elf.stance=[elf.stance[0],1,elf.stance[2],1];
            resolve(elf);
        }, elf.danceSpeed);
    });
}
function revers1(elf) {
    return new Promise((resolve) => {
        setTimeout(() => {
            elf.stance=[1,1,0,0];
            resolve(elf);
        }, elf.danceSpeed);
    });
}
function revers2(elf) {
    return new Promise((resolve) => {
        setTimeout(() => {
            elf.stance=[0,0,1,1];
            resolve(elf);
        }, elf.danceSpeed);
    });
}
// Эта функция принимает в качестве аргумента эльфа и драгоценность, которая
// сейчас демонстрируется всем эльфам. Здесь нужно дать команду эльфу выполнить
// какую-то фигуру или команду и вернуть Promise
function displayGemToElf(elf, gem) {
    //console.log(elf.danceSpeed);
   
  let arr=[rightHandUp,leftHandDown,leftHandUp,rightHandDown,rightLegUp,rightLegDown,leftLegUp,leftLegDown,allHandDown,allLegUp,allLegDown,allHandUp];
  //return arr[random(0,arr.length-1)](elf).then(arr[random(0,arr.length-1)]);
  if(elf.favouriteGems.indexOf( gem ) != -1){
     return allHandUp(elf);
 }
 if(elf.dislikedGems.indexOf( gem ) != -1){
    return allHandDown(elf);      
 } 
    switch (gem) {
        case "Алмаз":        
        return allHandUp(elf).then(allHandDown);                    
 break;       
         case "Цитрин":        
               return allHandUp(elf).then(allHandDown).then(allHandUp).then(allHandDown);                     
        break;
        case "Аметист":
         return   leftHandUp(elf).then(rightHandUp).then(leftHandDown).then(rightHandDown);                     
        break;
        case "Кварц":
         return  allLegUp(elf).then(allLegDown);                       
        break;
        case "Альмандин":
         return  leftSplit(elf);
            
        case "Родолит":
         return  rightSplit(elf);
          
        case "Спессартин":
         return leftLegUp(elf).then(leftHandUp).then(rightHandUp).then(rightLegUp);
          break;
          //особые
        case 'Андалузит':
            return start(elf);                  
                break;           
        case 'Гиацинт':
            return  finish(elf);             
                break;               
        case "Пироп":
        return revers1(elf).then(revers2);                 
        break;
        case 'Топаз':
        return new Promise((resolve) => {
            setTimeout(() => {
                elf.danceSpeed=elf.danceSpeed/2;
                resolve(elf);
            }, elf.danceSpeed);
        });
        break;
        case 'Циркон':
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(elf);
                }, elf.danceSpeed);
            });
            break;
        case 'Танзанит':
            return new Promise((resolve) => {
                setTimeout(() => {
                    elf.danceSpeed=elf.danceSpeed*2;
                    resolve(elf);
                }, elf.danceSpeed);
            });
        break;  

        default:      
        //console.log(random(0,arr.length-1));  
            return arr[random(0,arr.length-1)](elf).then(arr[random(0,arr.length-1)]);
    }
   
}
// Эта функция принимает в качестве аргумента танец всех эльфов - массив их Promis'ов,
// и драгоценность, которая сейчас демонстрируется всем эльфам.
// Возвращает также танец всех эльфов - массив их Promis'ов
function continueDance(elvesPromises, gem) {
    //gem="Параиба";
    if(gem=="Параиба"){
        console.log("параиба");
       // alert("параиба");
        let promise=Promise.all(elvesPromises);
        console.log(promise);
        return elvesPromises.map((elfprom)=>{
           // console.log(elfprom);
           return elfprom.then(promise.then(elfprom));
        });
        //return elvesPromises;
        // Promise.all(elvesPromises).then((elves)=>{
        //    // console.log(elves);
        //    return elves.map((elf)=>{
        //    console.log(elf);
        //    }        // elves.forEach(function(elf) {            
        //     console.log(elf);
        //     return Promise.resolve(elf);
        //   });
      // });
    //   return elfPromise.then(elf => { 
       // return displayGemToElf(elf, gem); 
        //return leftHandUp(elf);        
                  //});
    } 
       
   return elvesPromises.map((elfPromise) => {
    return elfPromise.then(elf => { 
      return displayGemToElf(elf, gem); 
      //return leftHandUp(elf);
      
                })
            })
        
}
