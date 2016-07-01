describe('app.dashboard', function() {
    var controller, scope;

    beforeEach(module('app.game'));

    beforeEach(inject(function ($controller) {
        controller = $controller('Game',{$scope: scope});
    }));

    describe('Game controller', function () {
        it('Game controller should be defined', function () {
            expect(controller).to.be.defined;
        });

        it('Should be on the start page', function () {
            expect(controller.status).to.equal('start');
        });

        it('Should be on the choose weapon page', function () {
            controller.setStatus('choose');
            expect(controller.status).to.equal('choose');
        });

        it('Should return a computer move', function () {
            expect(controller.computerMove()).to.be.not.empty;
        });


    });


    describe('Playing outcome', function () {

        beforeEach(function () {
            sinon.stub(controller, "computerMove", function () { return 'Rock'; });
        });

        it('Player should draw', function() {
            controller.play('Rock', controller.computerMove())
            expect(controller.game).to.equal('draw')
        });

        it('Player should win', function() {
            controller.play('Paper', controller.computerMove())
            expect(controller.game).to.equal('win')
        });

        it('Player should lose', function() {
            controller.play('Scissors', controller.computerMove())
            expect(controller.game).to.equal('lose')
        });

    });









});