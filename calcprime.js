module.exports = function (limit) {
	var primes = [];
	for (let i = 3; i < limit; i = i + 2) {
		var failed = false;
		for (let j = 3; j < i; j = j + 2) {
			if (i % j === 0 && i != j) {
				failed = true;
				break;
			}
		}
		if (failed) failed = false;
		else {
			primes.push(i);
		}
	}
	return primes.length;
}