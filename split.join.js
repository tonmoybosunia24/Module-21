const lyrics = "Tumi Bondhu Kala pakhi Ami Jeno Ki. Bosonto Kale Tomai Bolte Pari Nai.";
const parts = lyrics.split(" ") /* ওয়াড কে আলাদা আলাদা ভাগ করার জন্য। */
const sentence = lyrics.split(".") /* সেনটেন্স কে আলাদা আলাদা ভাগ করার জন্য। */
const chars = lyrics.split("") /* ক্যারেক্টার কে আলাদা আলাদা ভাগ করার জন্য। */
// console.log(chars)

// Slice

const partial = lyrics.slice(5, 16) /* কোন স্ট্রিং এর কয়েকটা টুকরা বানানোর জন্য। */
// console.log(partial)

const lines = [
       'Tumi Bondhu Kala pakhi Ami Jeno Ki',
       'Bosonto Kale Tomai Bolte Pari Nai',
]
const newSong = lines.join(", ") /* কয়েকটা স্ট্রিং কে জোড়া দেওয়ার জন্য।  */
console.log(newSong)