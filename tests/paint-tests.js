var expect = chai.expect;
describe('Painting', function() {
	describe('calling randomCarArtId', function() {
		it('should return a random ID', function() {
			//ACT
			let id = randomCarArtId();
			expect(id).to.be.a('string');
			expect(id).to.have.lengthOf(4);
			expect(id[3] <= 8 && id[3] >= 1).to.equal(true);
		});
	});
	describe('calling addCar', function() {
		it('should return a configured car', function() {
			//SETUP
			let carCount = 0;
			let car = { id: '', style: { top: '', left: '' }, className: '' };
			//ACT
			car = addCar(car);
			//ASSERT
			expect(car.style.top).to.equal('0px');
			expect(car.style.left).to.equal('0px');
			expect(car.className).to.have.lengthOf(13);
			expect(car.id).to.have.lengthOf(2);
		});
	});
});
