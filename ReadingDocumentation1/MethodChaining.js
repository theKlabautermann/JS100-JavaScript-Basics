let tweet = 'Starting to get the hang of it... #javascript #launchschool';

console.log(tweet.split(' ')); //Expected Output: ["Starting", "to", "get", "the", "hang", "of", "it...", "#javascript", "#launchschool"]
console.log(tweet.split(' ').reverse()); //Expected Output: ["#launchschool", "#javascript", "it...", "of", "hang", "the", "get", "to", "Starting"]
console.log(tweet.split(' ').reverse().join(' ')); //Expected Output: "#launchschool #javascript it... of hang the get to Starting"]
