const lyrics = "Tumi Bondhu Kala pakhi Ami Jeno Ki.Bosonto Kale Tomai Bolte Pari Nai.";
const searchString = "pAKhi";
const lyricsLowerCase = lyrics.toLowerCase() 
const searchstringLower = searchString.toLowerCase()
const doesExti = lyricsLowerCase.includes(searchstringLower) /* (.includes("")) কোন স্ট্রিং এর ভেতরে কিছু খোজার জন্য। */
// console.log(doesExti)

// Index Of
console.log(lyrics.indexOf("Kala"))
console.log(lyrics.indexOf("Tumi"))

// StartWith
console.log(lyrics.startsWith("Tumi")) /* কোন স্ট্রিং কি দিয়ে শুরু হইছে তার জন্য। */

// EndsWith

console.log(lyrics.endsWith("Nai.")) /* কোন স্ট্রিং কি দিয়ে শেষ হইছে তার জন্য। */
