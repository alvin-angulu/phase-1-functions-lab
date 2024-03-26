// Code your solution in this file!

function distanceFromHqInBlocks(location){
    let distance = location-42;
    return Math.abs(distance);
}

function distanceFromHqInFeet(distance){
    let distanceInFeet = distanceFromHqInBlocks(distance)*264;
    return distanceInFeet;
}

function distanceTravelledInFeet(start, destination){
    let noOfFeet = Math.abs(destination-start) * 264;
    return noOfFeet;

}

function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination);
    let fare = 0;
    if(distance<=400){
     return fare;
    } else if (distance >400 && distance <=2000 ){
        fare = (distance-400) * 0.02;
        return fare;

        } else if (distance >2000 && distance <=2500){
       fare = 25;
      return fare;
    } else{
        fare = "cannot travel that far";
       return fare;
    }
    
}

console.log(calculatesFarePrices(34,24));

