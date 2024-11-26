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

// Pt. 2 Thinking Bigger
const startingPlantCount = 100; // starting number of plants
const currentRadius = 5; // current garden radius in meters

//step 1: Calculate the current garden area
const currentArea = PI * currentRadius * currentRadius; //Area of a circle formula: PI * r^2

//step 2: Calculate the plant count after 10 weeks
let plantCount = startingPlantCount; //starting count
const weeks = 10;

for (let i = 1; i <= weeks; i++) {
    plantCount *= 2; //plants double each week
}

//step 3: Calculate the total space required for all the plants
const totalSpaceRequired = plantCount * spacePerPlant; //total space needed for all the plants

//step 4: Calculate the additional space needed
const additionalSpace = totalSpaceRequired - currentArea; //space required beyond the current garden

//step 5: Determine the new radius for the expanded garden
const expandedArea = totalSpaceRequired; //The total area of the new garden
const newRadius = Math.sqrt(expandedArea / PI); //rearrange the area formula: r = sqrt(area / PI)

// step 6: output results
console.log(`After 10 weeks:`);
console.log(`Plant count: ${plantCount}`);
console.log(`Total Space required: ${totalSpaceRequired.toFixed(2)} square meters`);
console.log(`Additional space needed: ${additionalSpace.toFixed(2)} square meters`);
console.log(`New radius for the expanded garden: ${newRadius.toFixed(2)} meters`);
