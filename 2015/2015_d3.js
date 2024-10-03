
/* First part
function res(i) {
    let posx = 0
    let posy = 0
    let posList = [[posx,posy]]
    i.split('').forEach((mov) => {
        switch (mov) {
            case '>':
                posx++
                break;
            case '<':
                posx--
                break;
            case '^':
                posy++
                break;
            case 'v':
                posy--
                break;
            default:
                console.log('Unknown movement :', mov)
                break;
        }
        posList.push([posx,posy])
    })
    // console.log(posList)

    let uniqpos = new Set(posList.map(JSON.stringify))
    let uniqposList = [...uniqpos].map(JSON.parse)
    console.log(uniqposList)
    console.log(uniqposList.length);
    
    return uniqposList.length
}

res(">") // 2houses
res("^>v<") //4houses
res("^v^v^v^v^v") //2 houses
//res("^^<<v<<v><v^^<><>^^<v<v^>>^^^><^>v^>v><><><<vv^^<^>^^<v^>v>v^v>>>^<>v<^<v^><^>>>>><<v>>^>>^>v^>><<^>v>v<>^v^v^vvv><>^^>v><v<><>^><^^<vv^v<v>^v>>^v^>v><>v^<vv>^><<v^>vv^<<>v>>><<<>>^<vv<^<>^^vv>>>^><<<<vv^v^>>><><^>v<>^>v<v^v<^vv><^v^><<<<>^<>v>^v>v<v<v<<>v<^<<<v>>>>>^^v>vv^^<>^<>^^^^<^^^v<v^^>v<^^v^^>v>^v^^^^>><<v<>v<>^v^<v<>><>^^><<^^<^^>vv<>v^<^v<vv<<<>^>^^>^<>v^^vv<>>v><<<>vvv<>v<>><^<^v<>^vv>^^v<v<v><^<>>vv<^>>^>>vv^v<vv^vv<^<<>>^v^<>^>>>>vv>^^>v>vv>v><^vv^<<v>^<<^^<v<v>vv<v^^<>^^v>^>>v><^<<vv<<v^vv^^^v>>v<<v^><vv^><vv<^vv<<vv^v<<^v<^^v>><<v^>>^^<>v>><<v<>>^^<v>>^^>>vvv^><<<<<^<^vv<^<><v<<>^^^<<<^>^^^<v<<vv>vv<>^<>v<^v>^<<<v<v<v>>^v<>>v<<^<<v<<>^<<<><><>^>>>>^>v^v<<v<v<<>>vv<^vvv^^^^<vv>vv>^v^^v^<v^v><^vv<^vv>v<^>vv<>>^>^><vv<><^>v>^v>vvv<>^>^v<><>vv>><^v^<><><v>>v^v^><^<^>vv>v<^>vvv>v<<<<<^<v<<vv<^^^<<>>^v<vv<^<>v>^<v<>><><>^<<v>v^>^<vv>><><>>^>^>><^<v>^^>^^>^^v^^<^v^^>v^^>>><<><v<v<<v^vv<><><>^<v>^<<^^v^>v>><>^^^><^vvv<^^^^^v><<><v<^^v><><>>^>vv<vvvv<<>>><v<^^^^v<<^><v>^vv<v^^v^vv<^^>^^<v>><<v^>v<^^>^<^<v<^^v>^<<v>^>>>^v<>v<^^^>vvv^v<<^><>>><vvv^<^^^<^>>v>>><v>^^vvv^vvv<^^^^v^v^<vv^<v>^<<^>v^v^<<><>><^v><v<><<>><<<>^v>v<>^<v^v>^vv>>^<>v^^<<v><^v>>v<>>^v^^>><^>v^<^v^^>><>v^>^v^v<<<v^<v^^v<^>v<><>vv>>>>^>v<>v<<<>^^>vv^v<><v^<>^<<<<>>^^>^v<v^v<<><>^v<>>^v^<<^<^>>>^vv<><v<^^<>v^>>v<^^v<v>>>^>><<><<<>><vv<v>>^v>><^<v><vv>^vv<v<>>><>v^><>vv<^^v^^^v<>><^vvv<<^<>v>>>v>><v><>>><>><v^><v^v<v>^v>v<v>>^^<^>^>v><>vv>^v><<>>>>>>>^<<^vv^^vvvv<^^><<<v<<>vvv<>^><<v<v^v^<<v>v<>>^<vv^<v<v>^<<^^vv>v>^<vv<<>v<v^<>v>>^v^^vvvv>^^>>v^v^^><<^>v>>^^>^<^^<>v<v>vv^vv>v<v>>^v<><^vv^<vv<v^^^v<^v^>>^v>>>^^<^<^>^v^>^>>>^v>^>^^^>>^<>v^^<>^v<<^^>^^<vv<>v<^v^>><^v^>^<>>^vv^vv^>v^<vvvvvv^>><^^<^v<^<v^<<^^<<v^<^>><>v><^v^v^^^v>v^<>^<<v<^^vvv<v>^^>^v^^<><vv^v^>v^<<>>vv<>>>>v>v<>^>>>v<>^^><v<v^^^<>^<^><>^><<v>><>^<<>>><<^<vvv<^><v>>^vv^v>><v<>vv^<<^^<<><v><<^<v<vv<<^v^vv>v^>>>v<<<<v<<>v>^vv<^v><v<v>v<^>^^vv>v><v>><<v<<v^v>>><>^<>><><<^<<^v^v<<v>v>v<v<^^>vv<^v^^^<v^<<<v<>v^><^v>^<^<v>>^<<<v>>v^<><>>^v<>vvv<vvvvv<^^><^>><^^>^>^v^vv<^><<^v>><^^v>^v<>^>vvvv><^>^<<v^^vv<v^^<><>v>^>>^<^<<<^v^^^>^>>^>><><<^>v^^<v>>v<<<<vvv<vvvv^<^<v^^<>^>vvv^<vv^v^v>^<<><v><^v^v^^^>^^>^vv<>v>>v^>vv^vv>v<^v^^>>^v^v<>>^^><<v<<>><>>>^>^<>^^v^^><^<>><<^<vv^^^^^>>vv^<v^<^>>>>v<<><<^>vv>vvv>^<><>>>>vv><<v^v<^^^<<^^^vv^<v<><><<<<>><<v^<>v>v^><>v^v^^><>v>v>^^v<^v<>>^^^^^<v>><v^>^^<v>><v^^>v<^<^>>>^><^^>><<>>^><>^^^>v^^^>^^v^<>^^><^>>><><^>>v<v^>v<^><v<v^<>v<^v>v^<^vv^^><<<><><^v^<v<^^>v>v^>>^^vv^<v>^v>^<^v<>^>^><^<v>^v><^<^<>v^^>^><>>><<v><<><>v<<^v^^<^><>^<><><v>v<^^<v<v>>^^<<>>^<v>><^><^<^>^^v<>v>>><><<>^>v><><<<<v^^^^v<>>^^^v>><<^v>^>>><vv^>>^vv<^<>>^<^^<^v>v<v<<<<<>^<<^<<<<<^<^>>^><<>><>v^v>^<^>v^<><vvv^>^v^v^v><^<v<>vv<<^<>^^^<>^v>^<v^^<v^v>v<>>^>v<<>v<>v^v>v<<<>>v>vv>>v<<>v<>v<^>^>^<v>>v>^>^^^<vv>v<<>>><v>^vvv^^>^^<^vv^^^^>v>^v^>v^^v^>>^v>^vv>^^v^<<<<>^<><^<^<<^^>v^^^v<>>vvv<v>>vv><v<v>^<^v>>^v<vv^<<v<vv><^^v^v>v<>^v<<<^^v^^^<^v>v^v^v>><vvv<<>v<>^v>vv^v>vv<<^v<v>^v>v>><^v<v<>v>>>><<<><vv><>^v^<^vvv>v<>><^v>^>><v>vv<><><>v><>>><^>vv>>^<>v^>>^><<<^><<>^v^>>><><>vv>^<>^>^v^^><^>>><<>v^<^vv>^<^vv>><v<>vv<v><><<^><>v<^^<^>vv^^^^vv<<v><>vv<><v>v<>>>>^><v><>^<><>v<>><<>^^vvv>^^^<><>>vvv^v>><>vv<vv>^^^v^<<>^^v<><<^^v<>^^>^<^^v>>v^v^^>>v>>>^<<^<>^>^^v>>>><vv<<>^v<<vv><<^^vv><^>vv<>>v<v>v^>v>>v^<vv<<<v><v^>vvv^^>vv^<<v>v^>>v^<>>><><<^^<^v>^>>>v>v>^v<>vv><vv<vvv<<v>v>^v<<<>><<><><>v^>>>v^>v^>>vv^^<v>^<>>><^>v^<>^^><v>v<><<<><v^v<<<v<v^>v^v>^>v<^<>v>v^^>>v>vv^v<>>^^^^<>v^>>>>>>>><v<^<<vvv<^v^>^v<^<<>>><<<^<<^>^>v^<>^<<<>v>><^vv^>^>^>>>^<vv><v^^^<v^<v<><v^vvv<>v<vvv^vv<<<v^<^<^vvvv^<<vv<^v><<>^>^<v^v^<^>v^><>>v^>v^>^>>v<>vv^v<<>^^>>vv<>vv>>^v<^vv>^v>v<v^vvv^<<^><>v^<><vv><>v^^><<<><>^>^v^<>><vv<^>v^v>v<>><v<<^>^<vv<^v>^<<v><^<^^vv^<>><v^>^vv^<>>^^^^v>v><^^^v^<<<>^<^<<>><>>v<<^v^>><><v^>>^vv^v>vv>>>>>>^^<<>v^>v^v>^^>>><vv^^^v>^v>>^^^<>><>v^<<<v<vv^^<v^<<<>v>v^^^<vv<>>^v>^v<^<<><>vv>^^^<^^vv<v<<vv>^^>vv>v<<^>^vv><^><v>^^^^v<<vv>v^<<^^>>^^vvvv^v^>vv>>v^<v>vvv<>>^><>>v^^>>^<>>vvvv^>><v^v<^^<^vv>>v<<^<<^><v^^><v^>v^>><<<v>v>v^>^v<v^vv<^^^v<^<vvvvv<<vvv>><>v<v<v<<^v<><<>vv>><v>><^>>^^v>^>><>vv^><<>>vv<<<^<^^>^<<^>>>><v<^v<<<>>v>vv<^>^v><>>v<v^v<>v^vvvv>v^>>v><<^<v>^^v>>vv^^>v>^v>^v^^>^<^vv<v<<^>vv<<^>>^<<^^>>^<^>v^><^vv>^^v><v^>>><>v^v>^v<^><<<>vv><v>v<><>>v^<>^^>^<>^<<^>>vv^><^<v<^^vvv>>v^>>v^>v>vv><>>v<^>><<<v<<vv><v<v<v>v<v>vv^vvv^vv^>^>v><vv<v^^<>>>>vv^>^<>v<^>^<^v>vv<^<<>>^<^<vv><^^<>^<<v^v^>v<<><v>v>><^v<<^vvv>v>v<<^^<^^>v<vv<v<v^v>^^^>^>vv<v<<^^v^<v<^>^^^vv>v<>>>vv>><><^><><<<vvv<<^^v^<v^<<^>>vv>vv^v^>>><v><<v^v>>v>>vv>^^vvv^>^^>^>^>^v<<^vv^>vvv^^vv><^>^v^>^><>v<^^vv<v><v^<><^<>><v>^^v^v>v^vv<>><^v>^<^v>^<>^v>>>><<vv^^^vv^>>><vv^v>>v><^v^vv><<^v<<>^^<v><^v>vvv<><^^><<^v><>^<^v<^^<^vvvv^^>>>>vv>v>>>v<v^><<<<v>>v^><v>>vv^v<vv<>vv<>vvv>>>><>>><>^v<v^v><vvv<<v^^v^v<>>><>>^vv<<v<><<vv<v^>^^vv><^v^v<v^vvv^v>v^^^vv>^><^vvv<<>^vvv^<v<v^v>>>>^<<<><<<<<^v<^^>>>>^>^<v^^^v<vvv<vv^<>v<<<^<^>>v^<v><<><<^^vvv^>v<>>^^>v>^v>>v<v><v>>>>^<^<^>v^v<vv<>^>><>^<<^vvv^^<>^<vvv<>v^>^^<<^>^vv><vvv>>v^v^>v><v>^<^^<>^>^>>>^^vvv^<<>v^<<>><>v<^<^>v^>^vv><v<^<<<^v>^>>^<^v^<<<<^v^><v^v>v^><<v<><<v^<<^<<v<<v><v><><^^^^>v>^^<v>>v<vvv<<<>><>>^><<><^<>>^^>vv<^><^v^><vvv>>>vvv<<vv^<^^^<^>^<>>^>>^v^<^^v>^<v<<>^^v<^vv^><vvv>>^v><<^<v^<><><>>^>vv<<>^^^v^^<v<>><>>vv>v^>vvv^^v<vv<^<^>>^>>^>>v^<<<v^>v^<^v^vv^><^<^v<<v<<>v>^v^<<<v^vv<v<<>^^<v>>>^<v<^>^^v<v>>>><vv<^^<<>><<v<v>^^v^>>^^>>^v^<^v>v^v^v^v^>v^vv<><>^^<>^><^^^<<<^<v>v<<>^<^^^^^v^<^<<^^>^vv<>v^>><>>^>v>v<>^>v<v^>>><>^<><v>>>^>^>>v^><v<>v><^vv^>v<<v>v<><<vv<<v>^><^<v^>v<<v^v<<><v><>v<v><>^^<v<>><<>v>vv<<v>^v<v>vv><><>vv^<<>^>^<^>>>^v>v<^v^^^vv<>>>^<<^>>><<^^v^>v^<^v>vvv>v^^vv>^^>>v<>^<<>^<><^^v^>><>^>v>>^^^<<^^v<>^^>^<>^>><^>^vvv><^>^<^>^>>vv<^>>^v>>^<>>^^>>>v^<v>>v<<v<^>>v^^vv>v><^v^^><vv^v<^>v<<>v^^<><>^>vvv><^^^>^v^>v>>^vvv<^vv>^^>^>>v<>><<^v<<v^>^><>vv^<<^^vv><v>>^<^><^<v>^v<v>^<<>^v^^>v^>>^^^<^vv>v^>>>vv<<>v>>>^>v^^<v^v^^v^>>v<v<<v>^<<>>vv<<^v>v<<vv<<^<^v<^<><^^>v>>v>v^>><vv<^v<^>^>>v>^><<^<<>^v<v>>><^^<^<<<v^^>^>vv<<>^<>^<v^<<^v>vv>^^^v<^v><v<<<<<vv>vv>^^^^>v>v><<^<<<^vv><^<<<><v>><v^v>v<<v^^<v^>v>^v^v^<^<^vv>vvv<^^v<>v<<<<>v<v^<vvv^^^<<^<^<<>^<<><<<>v<^>^^v<^^v^>vv>vvv>v><v^^<<>>^><^>>v<<vv>v<<^^^v<<^v^^><><<<><<>v>^<<>v<<<^v>><v^v<^v<v^vv>v>><<^<><^v^^v<v>^>^>vvvv<<><<>>^<vv>^^><v<>v>v<v^^>^><>>><^><<><<<^<>v^><vv^^^^>>^v^>v^<>>v>^^><^<^v^<v^>>v>^vvv<>>v<v^v><>^vvvv<v^<<v^<<^^vv>><<<<<<v><<<v<v^v^^<v^^<>v<<<<^v<<><<v^<^><v<vv<v^v^<v^^vv<v^v<<<>^<<>vv<v<^>^<<><vv<<vv<v<^<^<>><^^<<>>>vv>>>>>>^v<v<>>v^v^^<v^<<<<>><<^v^^^<>^<vv>>>><>v^v^vvv^>>v>><v^v<<<^v>>^^<<^^vv><<<^^^<<<v><^^>>>>vvv^v<^>^^>v<^<><vv<v<>v>>>^vv<<^<v>^v^>^>^v>v>v^v^>v<<v>><>><v^^<<^>>>><<^v^<>^v<vv><>vvv^>v>v<v<v^>^<><><>^>>><v<<<v^vv><>^>^^<<v^>>v^^>^<v>><>><>v^v^^v>>>>vv>>^v<<^v^<>^>v^^>^^<<vvvvvvv>^<v^<<^<<>><<<^^^v^^^^v<^<>v<^^<>vv^^v^<>^<<^>>v>v<<<^^^^vvv^<^<><>v<<v^<^<>>><<><<<v<v<v><vv>^^<vv<<vv<<<v<^>^^vv<v<>><<>>>^v<<>^>>>v^>v>^^<>^<vv<><^>v>^>>>><>^^>v^^v>^vv^^v^><<<>>v<>v<vv<vv^v^v<^v^<^^><<<><vv^^>^<^<<>v>>>>^<<v>v<v>vv<^><^<v><<^>v>>v><<v<<^v^<>>^>>>^v^v>v^^vv^>^<^^>>^><^vv^^vv^<>>^^^^<^^><><v<>>^>>^><vv^>^vvv<^<<v^^<<<>^><>>>^^<><v<v<><<v^^^^^<^<^<<>><<>>>>^<<>>>^<^v^>><<^>>>^<<v>^>><>^<v>^<><v>^v^^vv<><^>vv^^v^<^^^v^vvv^>><>>v<<vv<>>^<^vvv<<^^><vvv^^<v<>vv^^<<>><v>><^^vvv<<<^>^<><^>vv^><^<<>vv<<v>>vv>v>v^<vv><vv><<>^^^^v^^^^<v>^<<^><><^^v^>v>^>><^><<>v^<v>>>^vvv>>^<^<>^^v^vv^^v><<vv^<>>>v<<<>v>^<>v<<>v^>^<<><<><v<v<v<>v^>v<><^^>^<^v^^><^>vv>^>vv<v<^v>vv>^^><<>vv^>^v<<^<<^<<>v<v<^<v>v>>^><v^^v^v>>>><v^v^<<<vv<<^^<>>v^v<^v>v>^^^v<v><v^^^vv<>v^v<^<>v><><v^<>>vv>v><>v>^v<><<<<<<v<>>v^vv<<<<v<<v><^<>^>><>^^vv>^<^<<>vv>>vv<vvv>><><v<>><^<v>^><^<<v>><v><v>^<v>><>v^^^^v<v^^v<>^^vv<>v<>v>^vv^><v^<<^<>^<>^^^>v^>>>v><<^>>v<^v<>^^<v<><v^v<v>v<><v<vv><<>v<^<^>v<>v^>v>^^<<<^^vv^<><<<>>v>^^<>v>>>><v<v<^^^v<v<v^><<>v^v<>v>><<<<v^<><^<<^>^<vvv<v^^v>>v^vv^><^v^^<>^^><<v^>>vv>^<v^vv<^^v<>>vvv<^v^>>^<v<v>>^>^^<<^>^>^v><>>^<^^v>^>>^^<><>>>^^>^^vvv>v<^^<>v^v^^<v<<^<v^v^<<>v^v<v<<v<>>><<^^^>>v>^vv>^>^^v<>^^<>v^^<><v<v<vvv^<vv<<>v^><<><v<>vv<<^vvvv><<<v>v>v^>v^<>v^>^<v<vvv^>^<>^>^^v<>><<<><v<^^>^v<v>^^v^v<<<^v^<>^<>v>^^>v<v<v>v>^^<<<><<^>v<v<^vv^v><^^<<vv>^<<v><>^>>>>><v^v<<<^>^v^v<<v<>vvv<<>v>v>>^v^v^>><<<<>v^<v<><<>>>^>>^>><<v>")

*/

function rres(i) {
    let step = 0;
    let posx = 0
    let posy = 0
    let posList = [[posx,posy]]
    let robot_posx = 0
    let robot_posy = 0
    let robot_posList = [[robot_posx, robot_posy]]
    i.split('').forEach((mov) => {
        step++
        switch (mov) {
            case '>':
                step %2 == 0 ? posx++ : robot_posx++
                break;
            case '<':
                step %2 == 0 ? posx-- : robot_posx--
                break;
            case '^':
                step %2 == 0 ? posy++ : robot_posy++
                break;
            case 'v':
                step %2 == 0 ? posy-- : robot_posy--
                break;
            default:
                console.log('Unknown movement :', mov)
                break;
        }
        // step % 2 == 0 ? posList.push([posx,posy]) : robot_posList.push([posx,posy]);
        posList.push([posx,posy])
        robot_posList.push([robot_posx,robot_posy])
    })
    // console.log(posList)

    // let uniqpos = new Set(posList.map(JSON.stringify))
    // let uniqposList = [...uniqpos].map(JSON.parse)
    // console.log(uniqposList)
    // console.log(uniqposList.length);
    
    // let uniqRobotPos = new Set(robot_posList.map(JSON.stringify))
    // let uniqRobotposList = [...uniqRobotPos].map(JSON.parse)
    // console.log(uniqRobotposList)
    // console.log(uniqRobotposList.length);

    let completeList = [...posList, ...robot_posList]

    let uniqCompletePos = new Set(completeList.map(JSON.stringify))
    let uniqCompletePosList = [...uniqCompletePos].map(JSON.parse)
    // console.log(uniqCompletePosList)
    console.log(uniqCompletePosList.length);

    return uniqCompletePosList.length
}

console.log("^v, 3");
rres("^v") // 3houses
console.log("------");

console.log("^>v<, 3");
rres("^>v<") //3houses
console.log("------");

console.log("^v^v^v^v^v, 11");
rres("^v^v^v^v^v") //11 houses
console.log("------");

console.log("input : ")
rres("^^<<v<<v><v^^<><>^^<v<v^>>^^^><^>v^>v><><><<vv^^<^>^^<v^>v>v^v>>>^<>v<^<v^><^>>>>><<v>>^>>^>v^>><<^>v>v<>^v^v^vvv><>^^>v><v<><>^><^^<vv^v<v>^v>>^v^>v><>v^<vv>^><<v^>vv^<<>v>>><<<>>^<vv<^<>^^vv>>>^><<<<vv^v^>>><><^>v<>^>v<v^v<^vv><^v^><<<<>^<>v>^v>v<v<v<<>v<^<<<v>>>>>^^v>vv^^<>^<>^^^^<^^^v<v^^>v<^^v^^>v>^v^^^^>><<v<>v<>^v^<v<>><>^^><<^^<^^>vv<>v^<^v<vv<<<>^>^^>^<>v^^vv<>>v><<<>vvv<>v<>><^<^v<>^vv>^^v<v<v><^<>>vv<^>>^>>vv^v<vv^vv<^<<>>^v^<>^>>>>vv>^^>v>vv>v><^vv^<<v>^<<^^<v<v>vv<v^^<>^^v>^>>v><^<<vv<<v^vv^^^v>>v<<v^><vv^><vv<^vv<<vv^v<<^v<^^v>><<v^>>^^<>v>><<v<>>^^<v>>^^>>vvv^><<<<<^<^vv<^<><v<<>^^^<<<^>^^^<v<<vv>vv<>^<>v<^v>^<<<v<v<v>>^v<>>v<<^<<v<<>^<<<><><>^>>>>^>v^v<<v<v<<>>vv<^vvv^^^^<vv>vv>^v^^v^<v^v><^vv<^vv>v<^>vv<>>^>^><vv<><^>v>^v>vvv<>^>^v<><>vv>><^v^<><><v>>v^v^><^<^>vv>v<^>vvv>v<<<<<^<v<<vv<^^^<<>>^v<vv<^<>v>^<v<>><><>^<<v>v^>^<vv>><><>>^>^>><^<v>^^>^^>^^v^^<^v^^>v^^>>><<><v<v<<v^vv<><><>^<v>^<<^^v^>v>><>^^^><^vvv<^^^^^v><<><v<^^v><><>>^>vv<vvvv<<>>><v<^^^^v<<^><v>^vv<v^^v^vv<^^>^^<v>><<v^>v<^^>^<^<v<^^v>^<<v>^>>>^v<>v<^^^>vvv^v<<^><>>><vvv^<^^^<^>>v>>><v>^^vvv^vvv<^^^^v^v^<vv^<v>^<<^>v^v^<<><>><^v><v<><<>><<<>^v>v<>^<v^v>^vv>>^<>v^^<<v><^v>>v<>>^v^^>><^>v^<^v^^>><>v^>^v^v<<<v^<v^^v<^>v<><>vv>>>>^>v<>v<<<>^^>vv^v<><v^<>^<<<<>>^^>^v<v^v<<><>^v<>>^v^<<^<^>>>^vv<><v<^^<>v^>>v<^^v<v>>>^>><<><<<>><vv<v>>^v>><^<v><vv>^vv<v<>>><>v^><>vv<^^v^^^v<>><^vvv<<^<>v>>>v>><v><>>><>><v^><v^v<v>^v>v<v>>^^<^>^>v><>vv>^v><<>>>>>>>^<<^vv^^vvvv<^^><<<v<<>vvv<>^><<v<v^v^<<v>v<>>^<vv^<v<v>^<<^^vv>v>^<vv<<>v<v^<>v>>^v^^vvvv>^^>>v^v^^><<^>v>>^^>^<^^<>v<v>vv^vv>v<v>>^v<><^vv^<vv<v^^^v<^v^>>^v>>>^^<^<^>^v^>^>>>^v>^>^^^>>^<>v^^<>^v<<^^>^^<vv<>v<^v^>><^v^>^<>>^vv^vv^>v^<vvvvvv^>><^^<^v<^<v^<<^^<<v^<^>><>v><^v^v^^^v>v^<>^<<v<^^vvv<v>^^>^v^^<><vv^v^>v^<<>>vv<>>>>v>v<>^>>>v<>^^><v<v^^^<>^<^><>^><<v>><>^<<>>><<^<vvv<^><v>>^vv^v>><v<>vv^<<^^<<><v><<^<v<vv<<^v^vv>v^>>>v<<<<v<<>v>^vv<^v><v<v>v<^>^^vv>v><v>><<v<<v^v>>><>^<>><><<^<<^v^v<<v>v>v<v<^^>vv<^v^^^<v^<<<v<>v^><^v>^<^<v>>^<<<v>>v^<><>>^v<>vvv<vvvvv<^^><^>><^^>^>^v^vv<^><<^v>><^^v>^v<>^>vvvv><^>^<<v^^vv<v^^<><>v>^>>^<^<<<^v^^^>^>>^>><><<^>v^^<v>>v<<<<vvv<vvvv^<^<v^^<>^>vvv^<vv^v^v>^<<><v><^v^v^^^>^^>^vv<>v>>v^>vv^vv>v<^v^^>>^v^v<>>^^><<v<<>><>>>^>^<>^^v^^><^<>><<^<vv^^^^^>>vv^<v^<^>>>>v<<><<^>vv>vvv>^<><>>>>vv><<v^v<^^^<<^^^vv^<v<><><<<<>><<v^<>v>v^><>v^v^^><>v>v>^^v<^v<>>^^^^^<v>><v^>^^<v>><v^^>v<^<^>>>^><^^>><<>>^><>^^^>v^^^>^^v^<>^^><^>>><><^>>v<v^>v<^><v<v^<>v<^v>v^<^vv^^><<<><><^v^<v<^^>v>v^>>^^vv^<v>^v>^<^v<>^>^><^<v>^v><^<^<>v^^>^><>>><<v><<><>v<<^v^^<^><>^<><><v>v<^^<v<v>>^^<<>>^<v>><^><^<^>^^v<>v>>><><<>^>v><><<<<v^^^^v<>>^^^v>><<^v>^>>><vv^>>^vv<^<>>^<^^<^v>v<v<<<<<>^<<^<<<<<^<^>>^><<>><>v^v>^<^>v^<><vvv^>^v^v^v><^<v<>vv<<^<>^^^<>^v>^<v^^<v^v>v<>>^>v<<>v<>v^v>v<<<>>v>vv>>v<<>v<>v<^>^>^<v>>v>^>^^^<vv>v<<>>><v>^vvv^^>^^<^vv^^^^>v>^v^>v^^v^>>^v>^vv>^^v^<<<<>^<><^<^<<^^>v^^^v<>>vvv<v>>vv><v<v>^<^v>>^v<vv^<<v<vv><^^v^v>v<>^v<<<^^v^^^<^v>v^v^v>><vvv<<>v<>^v>vv^v>vv<<^v<v>^v>v>><^v<v<>v>>>><<<><vv><>^v^<^vvv>v<>><^v>^>><v>vv<><><>v><>>><^>vv>>^<>v^>>^><<<^><<>^v^>>><><>vv>^<>^>^v^^><^>>><<>v^<^vv>^<^vv>><v<>vv<v><><<^><>v<^^<^>vv^^^^vv<<v><>vv<><v>v<>>>>^><v><>^<><>v<>><<>^^vvv>^^^<><>>vvv^v>><>vv<vv>^^^v^<<>^^v<><<^^v<>^^>^<^^v>>v^v^^>>v>>>^<<^<>^>^^v>>>><vv<<>^v<<vv><<^^vv><^>vv<>>v<v>v^>v>>v^<vv<<<v><v^>vvv^^>vv^<<v>v^>>v^<>>><><<^^<^v>^>>>v>v>^v<>vv><vv<vvv<<v>v>^v<<<>><<><><>v^>>>v^>v^>>vv^^<v>^<>>><^>v^<>^^><v>v<><<<><v^v<<<v<v^>v^v>^>v<^<>v>v^^>>v>vv^v<>>^^^^<>v^>>>>>>>><v<^<<vvv<^v^>^v<^<<>>><<<^<<^>^>v^<>^<<<>v>><^vv^>^>^>>>^<vv><v^^^<v^<v<><v^vvv<>v<vvv^vv<<<v^<^<^vvvv^<<vv<^v><<>^>^<v^v^<^>v^><>>v^>v^>^>>v<>vv^v<<>^^>>vv<>vv>>^v<^vv>^v>v<v^vvv^<<^><>v^<><vv><>v^^><<<><>^>^v^<>><vv<^>v^v>v<>><v<<^>^<vv<^v>^<<v><^<^^vv^<>><v^>^vv^<>>^^^^v>v><^^^v^<<<>^<^<<>><>>v<<^v^>><><v^>>^vv^v>vv>>>>>>^^<<>v^>v^v>^^>>><vv^^^v>^v>>^^^<>><>v^<<<v<vv^^<v^<<<>v>v^^^<vv<>>^v>^v<^<<><>vv>^^^<^^vv<v<<vv>^^>vv>v<<^>^vv><^><v>^^^^v<<vv>v^<<^^>>^^vvvv^v^>vv>>v^<v>vvv<>>^><>>v^^>>^<>>vvvv^>><v^v<^^<^vv>>v<<^<<^><v^^><v^>v^>><<<v>v>v^>^v<v^vv<^^^v<^<vvvvv<<vvv>><>v<v<v<<^v<><<>vv>><v>><^>>^^v>^>><>vv^><<>>vv<<<^<^^>^<<^>>>><v<^v<<<>>v>vv<^>^v><>>v<v^v<>v^vvvv>v^>>v><<^<v>^^v>>vv^^>v>^v>^v^^>^<^vv<v<<^>vv<<^>>^<<^^>>^<^>v^><^vv>^^v><v^>>><>v^v>^v<^><<<>vv><v>v<><>>v^<>^^>^<>^<<^>>vv^><^<v<^^vvv>>v^>>v^>v>vv><>>v<^>><<<v<<vv><v<v<v>v<v>vv^vvv^vv^>^>v><vv<v^^<>>>>vv^>^<>v<^>^<^v>vv<^<<>>^<^<vv><^^<>^<<v^v^>v<<><v>v>><^v<<^vvv>v>v<<^^<^^>v<vv<v<v^v>^^^>^>vv<v<<^^v^<v<^>^^^vv>v<>>>vv>><><^><><<<vvv<<^^v^<v^<<^>>vv>vv^v^>>><v><<v^v>>v>>vv>^^vvv^>^^>^>^>^v<<^vv^>vvv^^vv><^>^v^>^><>v<^^vv<v><v^<><^<>><v>^^v^v>v^vv<>><^v>^<^v>^<>^v>>>><<vv^^^vv^>>><vv^v>>v><^v^vv><<^v<<>^^<v><^v>vvv<><^^><<^v><>^<^v<^^<^vvvv^^>>>>vv>v>>>v<v^><<<<v>>v^><v>>vv^v<vv<>vv<>vvv>>>><>>><>^v<v^v><vvv<<v^^v^v<>>><>>^vv<<v<><<vv<v^>^^vv><^v^v<v^vvv^v>v^^^vv>^><^vvv<<>^vvv^<v<v^v>>>>^<<<><<<<<^v<^^>>>>^>^<v^^^v<vvv<vv^<>v<<<^<^>>v^<v><<><<^^vvv^>v<>>^^>v>^v>>v<v><v>>>>^<^<^>v^v<vv<>^>><>^<<^vvv^^<>^<vvv<>v^>^^<<^>^vv><vvv>>v^v^>v><v>^<^^<>^>^>>>^^vvv^<<>v^<<>><>v<^<^>v^>^vv><v<^<<<^v>^>>^<^v^<<<<^v^><v^v>v^><<v<><<v^<<^<<v<<v><v><><^^^^>v>^^<v>>v<vvv<<<>><>>^><<><^<>>^^>vv<^><^v^><vvv>>>vvv<<vv^<^^^<^>^<>>^>>^v^<^^v>^<v<<>^^v<^vv^><vvv>>^v><<^<v^<><><>>^>vv<<>^^^v^^<v<>><>>vv>v^>vvv^^v<vv<^<^>>^>>^>>v^<<<v^>v^<^v^vv^><^<^v<<v<<>v>^v^<<<v^vv<v<<>^^<v>>>^<v<^>^^v<v>>>><vv<^^<<>><<v<v>^^v^>>^^>>^v^<^v>v^v^v^v^>v^vv<><>^^<>^><^^^<<<^<v>v<<>^<^^^^^v^<^<<^^>^vv<>v^>><>>^>v>v<>^>v<v^>>><>^<><v>>>^>^>>v^><v<>v><^vv^>v<<v>v<><<vv<<v>^><^<v^>v<<v^v<<><v><>v<v><>^^<v<>><<>v>vv<<v>^v<v>vv><><>vv^<<>^>^<^>>>^v>v<^v^^^vv<>>>^<<^>>><<^^v^>v^<^v>vvv>v^^vv>^^>>v<>^<<>^<><^^v^>><>^>v>>^^^<<^^v<>^^>^<>^>><^>^vvv><^>^<^>^>>vv<^>>^v>>^<>>^^>>>v^<v>>v<<v<^>>v^^vv>v><^v^^><vv^v<^>v<<>v^^<><>^>vvv><^^^>^v^>v>>^vvv<^vv>^^>^>>v<>><<^v<<v^>^><>vv^<<^^vv><v>>^<^><^<v>^v<v>^<<>^v^^>v^>>^^^<^vv>v^>>>vv<<>v>>>^>v^^<v^v^^v^>>v<v<<v>^<<>>vv<<^v>v<<vv<<^<^v<^<><^^>v>>v>v^>><vv<^v<^>^>>v>^><<^<<>^v<v>>><^^<^<<<v^^>^>vv<<>^<>^<v^<<^v>vv>^^^v<^v><v<<<<<vv>vv>^^^^>v>v><<^<<<^vv><^<<<><v>><v^v>v<<v^^<v^>v>^v^v^<^<^vv>vvv<^^v<>v<<<<>v<v^<vvv^^^<<^<^<<>^<<><<<>v<^>^^v<^^v^>vv>vvv>v><v^^<<>>^><^>>v<<vv>v<<^^^v<<^v^^><><<<><<>v>^<<>v<<<^v>><v^v<^v<v^vv>v>><<^<><^v^^v<v>^>^>vvvv<<><<>>^<vv>^^><v<>v>v<v^^>^><>>><^><<><<<^<>v^><vv^^^^>>^v^>v^<>>v>^^><^<^v^<v^>>v>^vvv<>>v<v^v><>^vvvv<v^<<v^<<^^vv>><<<<<<v><<<v<v^v^^<v^^<>v<<<<^v<<><<v^<^><v<vv<v^v^<v^^vv<v^v<<<>^<<>vv<v<^>^<<><vv<<vv<v<^<^<>><^^<<>>>vv>>>>>>^v<v<>>v^v^^<v^<<<<>><<^v^^^<>^<vv>>>><>v^v^vvv^>>v>><v^v<<<^v>>^^<<^^vv><<<^^^<<<v><^^>>>>vvv^v<^>^^>v<^<><vv<v<>v>>>^vv<<^<v>^v^>^>^v>v>v^v^>v<<v>><>><v^^<<^>>>><<^v^<>^v<vv><>vvv^>v>v<v<v^>^<><><>^>>><v<<<v^vv><>^>^^<<v^>>v^^>^<v>><>><>v^v^^v>>>>vv>>^v<<^v^<>^>v^^>^^<<vvvvvvv>^<v^<<^<<>><<<^^^v^^^^v<^<>v<^^<>vv^^v^<>^<<^>>v>v<<<^^^^vvv^<^<><>v<<v^<^<>>><<><<<v<v<v><vv>^^<vv<<vv<<<v<^>^^vv<v<>><<>>>^v<<>^>>>v^>v>^^<>^<vv<><^>v>^>>>><>^^>v^^v>^vv^^v^><<<>>v<>v<vv<vv^v^v<^v^<^^><<<><vv^^>^<^<<>v>>>>^<<v>v<v>vv<^><^<v><<^>v>>v><<v<<^v^<>>^>>>^v^v>v^^vv^>^<^^>>^><^vv^^vv^<>>^^^^<^^><><v<>>^>>^><vv^>^vvv<^<<v^^<<<>^><>>>^^<><v<v<><<v^^^^^<^<^<<>><<>>>>^<<>>>^<^v^>><<^>>>^<<v>^>><>^<v>^<><v>^v^^vv<><^>vv^^v^<^^^v^vvv^>><>>v<<vv<>>^<^vvv<<^^><vvv^^<v<>vv^^<<>><v>><^^vvv<<<^>^<><^>vv^><^<<>vv<<v>>vv>v>v^<vv><vv><<>^^^^v^^^^<v>^<<^><><^^v^>v>^>><^><<>v^<v>>>^vvv>>^<^<>^^v^vv^^v><<vv^<>>>v<<<>v>^<>v<<>v^>^<<><<><v<v<v<>v^>v<><^^>^<^v^^><^>vv>^>vv<v<^v>vv>^^><<>vv^>^v<<^<<^<<>v<v<^<v>v>>^><v^^v^v>>>><v^v^<<<vv<<^^<>>v^v<^v>v>^^^v<v><v^^^vv<>v^v<^<>v><><v^<>>vv>v><>v>^v<><<<<<<v<>>v^vv<<<<v<<v><^<>^>><>^^vv>^<^<<>vv>>vv<vvv>><><v<>><^<v>^><^<<v>><v><v>^<v>><>v^^^^v<v^^v<>^^vv<>v<>v>^vv^><v^<<^<>^<>^^^>v^>>>v><<^>>v<^v<>^^<v<><v^v<v>v<><v<vv><<>v<^<^>v<>v^>v>^^<<<^^vv^<><<<>>v>^^<>v>>>><v<v<^^^v<v<v^><<>v^v<>v>><<<<v^<><^<<^>^<vvv<v^^v>>v^vv^><^v^^<>^^><<v^>>vv>^<v^vv<^^v<>>vvv<^v^>>^<v<v>>^>^^<<^>^>^v><>>^<^^v>^>>^^<><>>>^^>^^vvv>v<^^<>v^v^^<v<<^<v^v^<<>v^v<v<<v<>>><<^^^>>v>^vv>^>^^v<>^^<>v^^<><v<v<vvv^<vv<<>v^><<><v<>vv<<^vvvv><<<v>v>v^>v^<>v^>^<v<vvv^>^<>^>^^v<>><<<><v<^^>^v<v>^^v^v<<<^v^<>^<>v>^^>v<v<v>v>^^<<<><<^>v<v<^vv^v><^^<<vv>^<<v><>^>>>>><v^v<<<^>^v^v<<v<>vvv<<>v>v>>^v^v^>><<<<>v^<v<><<>>>^>>^>><<v>")

