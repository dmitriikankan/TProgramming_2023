function anagramDifference(w1,w2){
    var count = 0;

    for (var i = 0; i < w1.length; i++){
        if (w2.indexOf(w1[i]) >= 0){

            w2 = w2.replace(w1[i], '')

        } else {
            
            count++

        }
    }
    return w2.length + count
}


console.log(anagramDifference('codewars', 'hackerrank'))