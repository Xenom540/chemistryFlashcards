class vector2 {
    constructor (x = 1, y = 1) {
        this.x = x;
        this.y = y;
    }

    set (vector) {
        this.x = vector.x;
        this.y = vector.y;
    }
}

class flashcard{}

class compound extends flashcard {
    constructor (srs, cmclFmla, saturated) {
        this.series = srs;
        this.chemicalFormula.set(cmclFmla);
        this.saturated = saturated;
    }
}

class prefix extends flashcard {
    constructor (prfx, noCrbns) {
        this.prefix = prfx;
        this.numCarbons = noCrbns;
    }
}

const alkanes = [];
const alkenes = [];
const cycloalkanes = [];
const cycloalkenes = [];

function pickRand() {

}
