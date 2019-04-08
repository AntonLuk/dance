describe("Эльф должен делать простые движения", function() {
	it("поднять левую руку", function(done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 0],
		}

		leftHandUp(elf).then((elf) => {
			expect(elf.stance).toEqual([1, 0, 0, 0]);
			done();
		})
	});

	it("поднять правую руку", function(done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 0],
		}
		rightHandUp(elf).then((elf) => {
			expect(elf.stance).toEqual([0, 1, 0, 0]);
			done();
		})
	});
	it("Работать обеими руками", function(done) {
        let elf = {
            danceSpeed: 10,
            stance: [0, 0, 0, 0],
        }
        allHandUp(elf).then((elf) => {
            expect(elf.stance).toEqual([1, 1, 0, 0]);
            done();
        })
    });
    it("Работать правой ногой", function(done) {
        let elf = {
            danceSpeed: 10,
            stance: [0, 0, 0, 0],
        }
        rightLegUp(elf).then((elf) => {
            expect(elf.stance).toEqual([0, 0, 0, 1]);
            done();
        })
    });
    it("Работать левой ногой", function(done) {
        let elf = {
            danceSpeed: 10,
            stance: [0, 0, 0, 0],
        }
        leftLegUp(elf).then((elf) => {
            expect(elf.stance).toEqual([0, 0, 1, 0]);
            done();
        })
    });
    it("Работать обеими ногами", function(done) {
        let elf = {
            danceSpeed: 10,
            stance: [0, 0, 0, 1],
        }
        allLegUp(elf).then((elf) => {
            expect(elf.stance).toEqual([0, 0, 1, 1]);
            done();
        })
    });

});
describe("Эльф должен делать движения завищасие от драгоценностей", function() {
    it("При показе любимой драгоценности должны поднимать руки", function(done) {
        let elf = {
            danceSpeed: 10,
            stance: [0, 0, 0, 0],
            favouriteGems:[allGems[1]],
            dislikedGems:[allGems[1]]
        };
        let gem=allGems[1];
        //console.log(elf.favouriteGems);


        displayGemToElf(elf,gem).then((elf) => {
            expect(elf.stance).toEqual([1, 1, 0, 0]);
            done();
        })
    });
    it("При показе НЕ любимой драгоценности должны опускать руки", function(done) {
        let elf = {
            danceSpeed: 10,
            stance: [1, 1, 0, 0],
            favouriteGems:[allGems[2]],
            dislikedGems:[allGems[1]]
        };
        let gem=allGems[1];
        console.log(elf.dislikedGems);
        displayGemToElf(elf,gem).then((elf) => {
            expect(elf.stance).toEqual([0,0, 0, 0]);
            done();
        })
    });
    it("При показе Андалузита должны принимать изначальную позицию", function(done) {
        let elf = {
            danceSpeed: 10,
            stance: [0, 0, 0, 0],
            favouriteGems:[allGems[5]],
            dislikedGems:[allGems[6]]
        };
        let gem='Андалузит';
        // console.log(elf.favouriteGems);
        // console.log(elf.dislikedGems);
        displayGemToElf(elf,gem).then((elf) => {
            expect(elf.stance).toEqual([0,0, 1, 1]);
            done();
        })
    });
});
