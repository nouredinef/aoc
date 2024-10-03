
const fs = require('node:fs');

function readInputFile() {
    return fs.readFileSync('2015_d5.input', 'utf8');
}

const VOWELS = ["a", "e", "i", "o", "u"]
const FORBIDDEN = ["ab", "cd", "pq", "xy"]

function containsForbidden(text) {
    for (const t of FORBIDDEN) {
        if (text.includes(t)) {
            // console.log("forbidden found :", t)
            return true
        }
    }
    // console.log("No forbidden text found !")
    return false
}


function containsSomeVowel(text, number = 1) {
    let lastVowelIndex = Array.from(VOWELS).fill(-1)
    let found = 0
    for (let j = 0; j < VOWELS.length; j++) {
        do {
            lastVowelIndex[j] = text.indexOf(VOWELS[j], lastVowelIndex[j] + 1)
            // console.log(lastVowelIndex)
            if (lastVowelIndex[j] !== -1) {
                // console.log('found vowel :', VOWELS[j])
                found++
            }
        } while (lastVowelIndex.some((v) => v !== -1))
    }
    // console.log('--')
    // console.log('found %d vowels', found)
    return found >= number
}


function containsDoubleLetter(text) {
    let previousLetter = '*';
    let found = false;
    let letters = text.split('');
    // for (const letter of letters) {
    //     if (letter == previousLetter) {
    //         // console.log('double letter found : ', letter)
    //         found = true;
    //         break
    //     }
    //     previousLetter = letter
    // }
    text.split('').forEach((letter) => {
        if (letter == previousLetter) {
            console.log('douvle letter found : ', letter)
            found = true;
        }
        previousLetter = letter
    })
    return found
}


function res(i) {
    let niceCount = 0
    let naughtyCount = 0
    let stringArray = i.split('\n')
    stringArray.forEach((string) => {
        if (containsForbidden(string) || !containsSomeVowel(string, 3) || !containsDoubleLetter(string)) {
            naughtyCount++;
        } else {
            niceCount++
        }

    })

    console.log("naughty count,", naughtyCount)
    console.log("nice count,", niceCount)
    console.log("total :", stringArray.length)
    return niceCount
}


// containsForbidden("qdqzadpqahfdsjtz")

// containsSomeVowel("hlkjfadsaaausdqlkjnfdsqlkjhoeziuheziufhiulqhrizuepoiqufjqlkzmoijvmoiuozerpqqisijijiqd")
// containsSomeVowel("aeiou")


containsDoubleLetter("asdrrrgqqsd")

// console.log("ugknbfddgicrmopn, nice (1)")
// res("ugknbfddgicrmopn")

// console.log("aaa, nice (1)")
// res("aaa")

// console.log("jchzalrnumimnmhp, naughty (0)")
// res("jchzalrnumimnmhp")

// console.log("haegwjzuvuyypxyu, naughty (0)")
// res("jchzalrnumimnmhp")

// console.log("dvszwmarrgswjxmb, naughty (0)")
// res("jchzalrnumimnmhp")

// console.log("input :")
// res(readInputFile())