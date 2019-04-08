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
// Эта функция принимает в качестве аргумента эльфа и драгоценность, которая
// сейчас демонстрируется всем эльфам. Здесь нужно дать команду эльфу выполнить
// какую-то фигуру или команду и вернуть Promise
function displayGemToElf(elf, gem) {
  let r=random(0,10);
 // console.log(elf.favouriteGems.toString());
 // console.log(gem);
  let arr=[rightHandUp,leftHandDown,leftHandUp,rightHandDown,rightLegUp,rightLegDown,leftLegUp,leftLegDown];
   //return allHandUp(elf).then(allHandDown);
    switch (gem) {
        case elf.favouriteGems.toString():
             //return arr[0](elf),arr[2](elf);
            //return allHandUp(elf).then(allHandUp);
           return allHandUp(elf).then(allHandUp);
            break;
        case elf.dislikedGems.toString():
            return allHandDown(elf).then(allHandDown);
            break;
        case 'Андалузит':
                return start(elf).then(start);
            break;
        case "Цитрин":
            return
        break;
        // case 'Гиацинт':
        //     for (let i = 0; i < elves.count(); i++) {
        //         elves[i].stance=[1, 1, 0, 0];
        //     }
        //     break;

        default:
            return arr[random(0,arr.length-1)](elf).then(arr[random(0,arr.length-1)]);
    }
   // console.log(Promise.all([leftHandUp(elf).then(leftHandDown),rightHandUp(elf).then(rightHandDown)]));

     //return Promise.all([leftHandUp(elf).then(leftHandDown),rightHandUp(elf).then(rightHandDown)]);
    //return ([leftHandUp(elf).then(leftHandDown)]);
  //console.log(random(0,3));

    //return leftLegUp(elf).then(leftLegDown);
}
// Эта функция принимает в качестве аргумента танец всех эльфов - массив их Promis'ов,
// и драгоценность, которая сейчас демонстрируется всем эльфам.
// Возвращает также танец всех эльфов - массив их Promis'ов
function continueDance(elvesPromises, gem) {
    //console.log(elf.stance);
  return elvesPromises.map((elfPromise) => {
    return elfPromise.then(elf => {
        console.log(elf.stance);
      return displayGemToElf(elf, gem)
    })
  })
}
