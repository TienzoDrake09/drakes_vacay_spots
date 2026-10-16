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