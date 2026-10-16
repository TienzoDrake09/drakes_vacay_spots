const guideName = "Drake's Vacation Spots";
const currentYear = new Date().getFullYear();
let runningCount = 0;

const reviewedPlaces = [
  { name: "Puerto Galera", rating: 4.8, category: "Beaches" },
  { name: "Boracay", rating: 4.9, category: "Beaches" },
  { name: "Taal Volcano", rating: 4.5, category: "Tourist Attractions" }
];

const categoryCounts = {};
for (const place of reviewedPlaces) {
  runningCount += 1;
  categoryCounts[place.category] = (categoryCounts[place.category] || 0) + 1;
}

const averageRating = reviewedPlaces.reduce((total, place) => total + place.rating, 0) / runningCount;

document.getElementById("guide-name").textContent = guideName;
document.getElementById("copyright").textContent = `© ${currentYear} ${guideName}`;
document.getElementById("reviewed-count").textContent = runningCount;
document.getElementById("average-rating").textContent = `${averageRating.toFixed(1)} / 5`;
document.getElementById("category-counts").textContent = Object.entries(categoryCounts)
  .map(([category, count]) => `${category}: ${count}`)
  .join(", ");

console.log("Guide name:", guideName);
console.log("Current year:", currentYear);
console.log("Places reviewed:", runningCount);
console.log("Average rating:", averageRating.toFixed(1));
console.log("Places by category:", categoryCounts);

const placeDetails = document.querySelector("[data-place-rating]");
if (placeDetails) {
  const rating = Number(placeDetails.dataset.placeRating);
  const priceLevel = Number(placeDetails.dataset.placePriceLevel);
  const isCurrentlyOpen = placeDetails.dataset.placeOpen === "true";
  const isWithinWalkingDistance = placeDetails.dataset.placeWalkingDistance === "true";
  const ratingLabelElement = placeDetails.querySelector("#rating-label");
  const budgetCheckElement = placeDetails.querySelector("#budget-check");
  const distanceNoteElement = placeDetails.querySelector("#distance-note");

  if (!Number.isFinite(rating) || !Number.isFinite(priceLevel)) {
    throw new Error("Place rating and price level must be valid numbers.");
  }
  if (!ratingLabelElement || !budgetCheckElement || !distanceNoteElement) {
    throw new Error("Place pages with decision data must include all three decision targets.");
  }

  let ratingLabel;
  if (rating >= 4) {
    ratingLabel = "Highly recommended";
  } else if (rating >= 2.5) {
    ratingLabel = "Worth a visit";
  } else {
    ratingLabel = "Only if you're nearby";
  }

  const isGoodBudgetOption = priceLevel <= 2 && isCurrentlyOpen;
  const budgetMessage = isGoodBudgetOption ? "Good option right now" : "Maybe another time";
  const distanceMessage = isWithinWalkingDistance ? "Walking distance" : "Better to commute";

  ratingLabelElement.textContent = ratingLabel;
  budgetCheckElement.textContent = budgetMessage;
  distanceNoteElement.textContent = distanceMessage;

  console.log("Place rating label:", ratingLabel);
  console.log("Place budget check:", budgetMessage);
  console.log("Place distance note:", distanceMessage);
}