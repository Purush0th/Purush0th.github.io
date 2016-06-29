(function () {
    angular
        .module('app.calc')
        .controller('MainController', MainController);

    /* @ngInject */
    MainController.$inject = [];

    function MainController() {

        var vm = this;
        vm.query = [];
        vm.answer = '';

        vm.controls = [
            {
                input: 'AC',
                className: ''
            },
            {
                input: 'CE',
                className: ''
            },
            {
                input: '%',
                className: ''
            },
            {
                input: '/',
                className: 'calc-control-key'
            },
            {
                input: '7',
                className: ''
            },
            {
                input: '8',
                className: ''
            },
            {
                input: '9',
                className: ''
            },
            {
                input: '*',
                className: 'calc-control-key'
            },
            {
                input: '4',
                className: ''
            },
            {
                input: '5',
                className: ''
            },
            {
                input: '6',
                className: ''
            },
            {
                input: '-',
                className: 'calc-control-key'
            },
            {
                input: '1',
                className: ''
            },
            {
                input: '2',
                className: ''
            },
            {
                input: '3',
                className: ''
            },
            {
                input: '+',
                className: 'calc-control-key'
            },
            {
                input: '0',
                className: ''
            },
            {
                input: '00',
                className: ''
            },
            {
                input: '.',
                className: ''
            },
            {
                input: '=',
                className: 'calc-control-key'
            }
        ];
        vm.action = action;
        activate();

        function activate() {
        }

        function action(input) {
            var operators = ['+', '-', '*', '/', '%'];

            if (input === '=') {
                vm.answer = '';
                try {
                    vm.answer = eval(vm.query.join(''));
                } catch (e) {
                    console.log(e.message);
                    vm.answer = 'ERROR!';
                }
            }
            else if (input === 'CE') {
                vm.query.pop();
            }
            else if (input === 'AC') {
                vm.query = [];
                vm.answer = '';
            }
            else {
                //if the query already solved clear that entry
                if (vm.answer.toString().length) {
                    vm.query = [];
                    vm.answer = '';
                }

                if (operators.indexOf(input) !== -1) {
                    input = ' ' + input + ' ';
                }

                vm.query.push(input);

            }

        }
    }
})();