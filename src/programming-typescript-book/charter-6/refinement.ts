// a union of string literals
type Unit = 'cm' | 'px' | '%';

// Enumerate the units
let units: Unit[] = ['cm', 'px', '%'];

// Check each unit, and return null if there is no match
function parseUnit(value: string): Unit | null {
    for (let unit of units) {
        if (value.endsWith(unit)) {
            return unit;
        }
    }
    return null;
}

type Width = {
    unit: Unit;
    value: number;
}

function parseWidth(width: number |string | null | undefined): Width | null {
    if (width == null) { //1
        return null;
    }
    
    // typeof queries a value at runtime to see what its type is.
    // TS take advantage of this at compile time to to refine the type
    if (typeof width === 'number') { //2
        return { unit: 'px', value: width };
    }
    
    let unit = parseUnit(width);

    if (unit) { //3
        return { unit, value: parseFloat(width) };
    }

    return null; //4
}