var ary = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

console.log("Begin");

function asyncFor(array, count, callback){
	if (array.length > count){
		console.log(array[count])
		count += 1;
		window.setTimeout(function(){
			callback(array,count,callback)
		},250);
	}
	else {
		return;
	}
}

asyncFor(ary,0,asyncFor);

for (var i = 0; i < 1000000000; i++){
	continue;
}
console.log();