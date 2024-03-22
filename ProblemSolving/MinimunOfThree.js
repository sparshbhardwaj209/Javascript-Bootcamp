let x = 2, y = 1, z = 6;


// 1st method:-
if(x<y){
    if(x<z){
        console.log(x);
    }else{
        console.log(z)
    }
}else{
    console.log(y);
}

// 2nd method:-
if(x<y && x>z){
    console.log(x)
}else{
    if(y<z && y<x){
        console.log(y)
    }else{
        console.log(z)
    }
}


/**
 * 
 *  In what case x will be the smallest number:-
 *     x < y  &&  x < z
 * 
 *  In what case y will be the smallest number:-
 *     y < x  &&  y < z
 * 
 *  In what case z will be the smallest number:-
 *     z < x  &&  z < y
 *      other way-> if x is not the answer and y is also not the ans, that mean z is the answer
 * 
 *  */