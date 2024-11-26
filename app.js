// 308.2 lab pt.1 Growing Pains

// Constants and initial values
const PI = 3.1415; // value of PI 
const radius = 5; // Radius of the circular garden in meters
const area = PI * radius * radius; // Formula to calculate the area of the garden (radius is squared)
const spacePerPlant = 0.8; //Space required per plant in square meters
const initialPlantCount = 20; //Starting number of plants

// Calculate the maximum capacity of the garden based on available space
const maxCapacity = Math.floor(area / spacePerPlant); //Use Math.floor to get whole plants only


//Function to predict plant growth and advise actions
function plantGrowthPrediction(weeks) {
    let plantCount = initialPlantCount; //initialize plant count

    //Loop to simulate growth over the given number of weeks
    for (let i =1; i <= weeks; i++){
        plantCount *= 2; //Plants double every week
    }

    // Determine the condition and provide advice
    const capacityPercent = (plantCount / maxCapacity) * 100; //Calculate the percentage of garden capacity used
    let action = ""; //variable to hold the action to take

    if (capacityPercent > 80) {
        action = " Prune the plants to prevent overgrowth."; //Condition: greater than 80% capacity
    } else if (capacityPercent >= 50) {
        action = "Monitor the plants as they are growing at an acceptable rate."; //Condition: between 50% and 80% capacity
    } else {
        action = "Plant more plants as there is enough space."; //Condition: less than 50% capacity
    }

    // Output results for the given weeks
    console.log(`After ${weeks} week(s):`);
    console.log(`Plant count: ${plantCount}`);
    console.log(`Garden capacity used: ${capacityPercent.toFixed(2)}%`); //.toFixed is used for readability, keeping only the specified number of decimal places , 2, in this case
    console.log(`Action: ${action}`); //specifies action when certain condition have been met
    console.log("------------------------"); // seperator for output
}

// Test the function for 1, 2 and 3 weeks
plantGrowthPrediction(1);
plantGrowthPrediction(2);
plantGrowthPrediction(3);