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
            stance: [1, 0, 0, 0],
        }
        rightHandUp(elf).then((elf) => {
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
        leftLegUp(elf).then((elf) => {
            expect(elf.stance).toEqual([0, 0, 1, 1]);
            done();
        })
    });
});
