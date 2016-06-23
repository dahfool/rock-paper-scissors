(function() {
    'use strict';

    angular
        .module('app.game')
        .controller('Game', Game);

    /* @ngInject */
    function Game() {

        /*jshint validthis: true */
        var vm = this;
        vm.status = 'start';
        vm.computer = '';
        vm.selected='';
        vm.game = '';

        vm.setStatus = function(status) {
            vm.status = status

            if(status === 'start') {
                vm.game = '';
            }
        };
        
        vm.play = function (selected) {
            var data = ['Rock','Paper','Scissors'];
            vm.computer = data[Math.floor(Math.random() * data.length)]
            vm.selected = selected;

            if(vm.computer === vm.selected ) {
                vm.game = 'draw'
            } else if((vm.selected === 'Rock' && vm.computer === 'Scissors') ||  (vm.selected === 'Scissors' && vm.computer === 'Paper' ) || (vm.selected === 'Paper' && vm.computer === 'Rock' )) {
                vm.game = 'win'
            } else {
                vm.game = 'lose'
            }
        };



    }
})();
