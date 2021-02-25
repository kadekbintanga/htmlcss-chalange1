var app = angular.module('myApp',[]);

app.controller('myCtrl', function($scope){
    $scope.data = data;
});

var data = [{
    id:0,
    title: 'Tirta Empul Temple',
    photo: './source/img/photo/Tirta Empul.jpg',
    desc: 'The Tirta Empul Holy Water Temple is located in the village of Manukaya,near the town of Tampaksiring, not far from Ubud, in the Gianyar Regency, the cultural heart of Bali.',
    decsfull: 'The Tirta Empul Holy Water Temple is located in the village of Manukaya, near the town of Tampaksiring, not far from Ubud, in the Gianyar Regency, the cultural heart of Bali. The temple is situated just below the Presidential Palace of Tampaksiring. Built-in 1957 by Indonesia first president, Soekarno, the beautifully built palace itself is an important landmark of the island and the country. Together with the Presidential Palace, the Tirta Empul Holy Water Temple provides some of the most fascinating views you will ever see.',
},{
    id:1,
    title: 'Pandawa Beach',
    photo: './source/img/photo/Pandawa Beach.png',
    desc: 'Pandawa Beach Bali is one of the renowned white sand beaches in southern Bali. Pandawa Beach is located in Kutuh Village, Badung Regency.',
    decsfull: 'Pandawa Beach Bali is one of the renowned white sand beaches in southern Bali. Pandawa Beach is located in Kutuh Village, Badung Regency, and previously popular among foreign tourists, named Bali secret beach. At the same time, the local community is more familiar with the name Kutuh beach. The address is on Jalan Pandawa Beach, Kutuh Village, South Kuta District, Badung Regency, Bali Province 80361. To enter the beach area in Kutuh village Bali, you must pass a road flanked by steep rocky cliffs. On this cliff, there is a statue of Panca Pandawa taken from the Mahabharata story. Therefore the beach is called the Pandawa Beach Bali.'
},{
    id:2,
    title: 'Besakih Temple',
    photo: './source/img/photo/Besakih Temple.jpg',
    desc: 'Besakih Temple is often referred to as Bali’s ‘mother temple’ – a grand complex of at least 86 clan temples and shrines on the south-western slopes of Mount Agung.',
    decsfull: 'Besakih Temple is often referred to as Bali’s ‘mother temple’ – a grand complex of at least 86 clan temples and shrines on the south-western slopes of Mount Agung. At least 70 celebrations take place at Besakih every year, as each shrine has its own anniversary. Besakih is considered to be the biggest and holiest of Bali’s temples. Its high location offers spectacular countryside views with rice paddies, hills, mountains, and streams. Exploring the whole site can take a day. Pura Besakih is the only temple open to every devotee from any caste group.'
},{
    id:3,
    title: 'Kuta Beach',
    photo: './source/img/photo/Kuta Beach.jpg',
    desc: 'Kuta is a tourist area, administratively an urban village (kelurahan), and the capital of Kuta District, Badung Regency, southern Bali, Indonesia.',
    decsfull: 'Kuta is a tourist area, administratively an urban village (kelurahan), and the capital of Kuta District, Badung Regency, southern Bali, Indonesia. A former fishing village, it was one of the first towns on Bali to see substantial tourist development, and as a beach resort remains one of Indonesian major tourist destinations. It is known internationally for its long sandy beach, varied accommodation, many restaurants and bars, and many renowned surfers who visit from Australia. It is located near Balis Ngurah Rai Airport.'

},{
    id:4,
    title: 'GWK (Garuda Wisnu Kencana)',
    photo: './source/img/photo/Gwk.jpg',
    desc:'Garuda Wisnu Kencana Cultural Park, or GWK, is a tourist destination and attraction located at Ungasan, Badung on the island of Bali',
    decsfull: 'Garuda Wisnu Kencana Cultural Park (Indonesian: Taman Budaya Garuda Wisnu Kencana), or GWK, is a tourist destination and attraction located at Ungasan, Badung on the island of Bali, Indonesia about 10–15 minutes drive from Ngurah Rai International Airport. It is devoted to the Hindu god Vishnu, and his mount, Garuda, the mythical bird who became his companion. Owned and managed by Alam Sutera Realty, Tbk, the construction of the 120.9-metre statue of Vishnu riding his mount Garuda was completed in August 2018.[citation needed] The park has a land area of about 60 hectares and is 263 metres above sea level.'
}];