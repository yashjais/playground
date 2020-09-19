/*
wendy and bob are playing a game.
wendy is white and bob is black.
they have alternate moves.
wendy may remove a white piece if it have two adjecent pieces, similar for bob. 
and if they don't have any move they will lose the game.
if the piece is removed the string will become shortened.

ex:-
colors - wwwbbbwww

wendy removes at first index - wwbbbwww
bob removes at fourth index - wwbbwww
wendy removes at seventh index - wwwbbww
bob have no move - wendy wins the game!
*/

function Game(str) {
    const arr = str.split('')
    let i = 0
    return checker(arr, i)
}

function checker(arr, player) {
    let winner = ''
    if(winner){
        // truthy value
        return winner
    } else{
        if(player % 2 ==0){
            // wendy's turn
            for(let j=0; j<arr.length; j++){
                console.log(arr[j] == arr[j+1] == arr[j+2] == 'w')
                console.log(arr[j], arr[j+1], arr[j+2], arr[j+3])
                if(arr[j] == arr[j+1] == arr[j+2] == "w"){
                    arr.pop(arr[j+1])
                    player = player + 1
                }
                else { 
                    winner = 'bob'
                    return winner
                }
            }
        } else {
            // bob's turn 
            for(let j=0; j<arr.length; j++){
                if(arr[j] == arr[j+1] == arr[j+2] == "b"){
                    arr.pop(arr[j+1])
                    player = player + 1
                }
                else { 
                    winner = 'wendy'
                    return winner
                }
            }
        }
    }
}


console.log(Game('wwwbbbwww')) // expected output - wendy