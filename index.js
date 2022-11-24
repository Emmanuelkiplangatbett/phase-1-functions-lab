// Code your solution in this file!
function distanceFromHqInBlocks(distance){
    if(distance > 42){
        return distance - 42;
    }else {
        return 42 - distance;
    }
    
}
function distanceFromHqInFeet(distance) {

       return distanceFromHqInBlocks(distance)*264
    
 }
 function distanceTravelledInFeet(start, destination){
    if (start > destination) {
        return(start - destination)*264
    }else if (start < destination) {
        return(destination - start)*264
    }
 
 }
 function calculatesFarePrice(start, destination){
    let feet =distanceTravelledInFeet(start, destination)
    if(feet<400){
        return 0;
    }else if (feet>400 && feet<2000){
        return (feet - 400)*0.02
    }else if (feet>2000 && feet<2500){
        return 25;
    }else{
        return "cannot travel that far";
    }
 }