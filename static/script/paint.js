let carCount = 0;

function addCar(car) {
	carCount++;
	car.id = 'c' + carCount;
	car.style.top = '0px';
	car.style.left = '0px';
	car.className = 'car east ' + randomCarArtId();

	return car;
}

function randomCarArtId() {
	let id = Math.floor(Math.random() * 7) + 1;
	return 'car' + id;
}
