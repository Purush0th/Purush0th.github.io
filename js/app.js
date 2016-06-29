(function () {
    'use strict';

    angular.module('app', ['ngSanitize']);

})();

(function () {
    'use strict';

    angular
        .module('app')
        .controller('AppController', AppController);


    function AppController() {
        var vm = this;
        vm.projects = [];


        activate();

        ////////////////

        function activate() {

            vm.projects = [
                {
                    id: '1',
                    title: 'Wiki Search',
                    snap: 'img/portfolio/wikisearch-snap.png',
                    desc: 'A simple and clean app to search and read Wikipedia articles. ' +
                    'It allows to search for a particular article and to choose from search results. ' +
                    'From the search results articles can be read by opening it in a new tab or in a modal popup window.<br/><br/>' +
                    'If we are unsure of what to search but need to read something, there is an option to read random Wikipedia articles. ' +
                    'By clicking the Random link, any random article can be read.',
                    url: '/projects/wiki-search',
                    sourcecode: 'https://github.com/Purush0th/wiki-search',
                    technologies: ['AngularJS', 'JavaScript', 'Angular Material', 'HTML5', 'CSS3']
                },
                {
                    id: '2',
                    title: 'Calculator',
                    snap: 'img/portfolio/calc-snap.png',
                    desc: 'A modern calculator app designed based on Google\'s <a href="https://material.google.com/" target="_blank">Material design</a> guidelines.',
                    url: '/projects/calc',
                    sourcecode: 'https://github.com/Purush0th/angular-calc',
                    technologies: ['AngularJS', 'JavaScript', 'Angular Material', 'HTML5', 'CSS3']
                },
                {
                    id: '3',
                    title: 'Pomodoro',
                    snap: 'img/portfolio/pomodoro-snap.png',
                    desc: 'A pomodoro timer app. The <a href="http://pomodorotechnique.com/" target="_blank">Pomodoro Technique</a> is a time management method developed by Francesco Cirillo in the late 1980s. ' +
                    'The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. ' +
                    '<br/><br/>The method is based on the idea that frequent breaks can improve mental agility.',
                    url: '/projects/pomodoro',
                    sourcecode: 'https://github.com/Purush0th/pomodoro',
                    technologies: ['AngularJS', 'JavaScript', 'Angular Material', 'HTML5', 'CSS3', 'howler.js']
                },
                {
                    id: '4',
                    title: 'PDF-n-Mail',
                    snap: 'img/portfolio/pdfmail-snap.png',
                    desc: 'This project is an ASP.Net MVC application which demonstrates how to create PDF ' +
                    'on client side using jsPDF and send it to the server as a <code>base64</code> string. <br/><br/>' +
                    'The server is built on ASP.NET (MVC) which can convert <code>base64</code> string into a PDF file and save it in a temporary location. ' +
                    'Then the server will take this PDF file and mail it to the recipient address as an attachment. ' +
                    'Once all the process gets completed the temporary files will be purged from the server.',
                    url: 'http://pdfnmail.gear.host/',
                    sourcecode: 'https://github.com/Purush0th/PDFnMail',
                    technologies: ['ASP.Net MVC', 'jsPDF', 'jQuery', 'HTML5', 'CSS3', 'Toastr.js', 'NProgress']
                },
                {
                    id: '5',
                    title: 'Weather',
                    snap: 'img/portfolio/weather-snap.png',
                    desc: 'Want to check how does it feel like outside? ' +
                    'This weather application will tell you the current temperature of your location. ' +
                    'To determine the location HTML5 <code>geolocation</code> ' +
                    '<a href="https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation" target="_blank">API</a> ' +
                    'has been used in this application.<br/><br/>' +
                    'On the initial loading, the application will ask for the permission to access your location. ' +
                    'Once the permission has been granted the application will fetch the weather information from OpenWeatherMap API ' +
                    'and the temperature will be shown.',
                    url: '/projects/weather',
                    sourcecode: 'https://github.com/Purush0th/weather',
                    technologies: ['jQuery', 'HTML5', 'CSS3', 'Materialize', 'OpenWeatherMap API']
                },
                {
                    id: '6',
                    title: 'Quotes Machine',
                    snap: 'img/portfolio/quotesmachine-snap.png',
                    desc: 'This application is to read famous quotes and share it in the Twitter.',
                    url: '/projects/quotes-machine',
                    sourcecode: 'https://github.com/Purush0th/QuoteMachine',
                    technologies: ['jQuery', 'HTML5', 'CSS3', 'Materialize', 'Twitter API']
                },
                {
                    id: '7',
                    title: 'Simon Classic',
                    snap: 'img/portfolio/simon-snap.png',
                    desc: 'Simon<sup>&reg;</sup> is an electronic game of memory skill, invented by Ralph H. Baer and Howard J. ' +
                    'Morrison, with software programming by Lenny Cope, The original version was manufactured and distributed by ' +
                    'Milton Bradley but now the game is currently manufactured by Hasbro.<br/><br/>' +
                    'This project mimics the same functionality of this electronic game using web technologies. Once the player starts the game, it will play a ' +
                    'sequence (with lights and sounds) and waits for the player\'s input. ' +
                    'If the player remembers and pressed the correct button pattern the game will iterate to the next level of sequences. <br/><br/>' +
                    'In case if the player presses the wrong button pattern the game will repeat the current level\'s pattern. But if the strict mode enabled the ' +
                    'game will restart from the first level.<br/><br/>' +
                    'To win this game the player has to reach up to level 20.',
                    url: '/projects/simon-game',
                    sourcecode: 'https://github.com/Purush0th/simon-game',
                    technologies: ['AngularJS', 'HTML5', 'CSS3']
                },
                {
                    id: '8',
                    title: 'Twitch Streamers',
                    snap: 'img/portfolio/twitch-snap.png',
                    desc: '<a href="https://www.twitch.tv/" alt="Twitch" target="_blank">Twitch</a> is the world’s leading social video platform and community for gamers. ' +
                    'Each month, more than 100 million community members gather to watch and talk about video games ' +
                    'with more than 1.7 million broadcasters.<br/><br/>' +
                    'This application demonstrates how to use ' +
                    '<a href="https://github.com/justintv/Twitch-API/tree/master/v3_resources" target="_blank">Twitch v3 API</a> to get the status of Twitch streamers. ' +
                    'We need to provide a list of Twitch usernames to the application and it will pull the status ' +
                    'from the Twitch API and will list the information. If the streamer is online, we can able to click the username and it will take us ' +
                    'to the Twitch streaming window.<br/><br/>' +
                    'This application written in a way it\'s easy to configure. To add or remove Twitch usernames we need to modify the <code>twitch.constant.js</code>. ' +
                    'Further, this application can be extended easily to get the Twitch usernames dynamically.',
                    url: '/projects/twitch',
                    sourcecode: 'https://github.com/Purush0th/twitch-streamers',
                    technologies: ['AngularJS', 'Angular Material', 'Twitch API']
                },
                {
                    id: '9',
                    title: 'Tic Tac Toe',
                    snap: 'img/portfolio/tictactoe-snap.png',
                    desc: 'You know its Tic Tac Toe!',
                    url: '/projects/tictactoe',
                    sourcecode: 'https://github.com/Purush0th/tic-tac-toe',
                    technologies: ['JavaScript', 'Bootstrap']
                }
            ]

        }
    }
})();