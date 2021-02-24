var app = angular.module('myApp',[]);

app.controller('myCtrl', function($scope){
    $scope.data = data;
});

var data = [{
    id:0,
    title: 'Tirta Empul Temple',
    photo: './source/img/photo/Tirta Empul.jpg',
    desc: 'The Tirta Empul Holy Water Temple is located in the village of Manukaya, near the town of Tampaksiring, not far from Ubud, in the Gianyar Regency, the cultural heart of Bali.',
    decsfull: 'The Tirta Empul Holy Water Temple is located in the village of Manukaya, near the town of Tampaksiring, not far from Ubud, in the Gianyar Regency, the cultural heart of Bali. The temple is situated just below the Presidential Palace of Tampaksiring. Built-in 1957 by Indonesia first president, Soekarno, the beautifully built palace itself is an important landmark of the island and the country. Together with the Presidential Palace, the Tirta Empul Holy Water Temple provides some of the most fascinating views you will ever see.',
},{
    id:1,
    title: 'Pandawa Beach',
    photo: './source/img/photo/Pandawa Beach.png',
    desc: '87',
    decsfull: 'Awag'
}];