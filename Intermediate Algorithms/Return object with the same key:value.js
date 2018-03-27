//Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching 
//property and value pairs (second argument). Each property and value pair of the source object has to be present in the object 
//from the collection if it is to be included in the returned array.



function whatIsInAName(collection, source){
	var keys = Object.keys(source);
	return collection.filter(function(obj){
		for (var key of keys){
			if(!obj.hasOwnProperty(key) || obj[key] !== source[key]){
				return false;
			}
		}
		return true;
	});
}


whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
// should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }]