var DrumMachine = require("../images/DrumMachine.png");
var WeatherApp = require("../images/WeatherApp.png");
var Calculator = require('../images/Calculator.png');
var News = require('../images/NewsAggregator.png');
var ChewsFood = require('../images/ChewsFood.png');
var ChewsFoodGif = require('../images/ChewsFoodGif.gif');
var DrumMachineGif = require("../images/DrumMachineGif.gif");
var WeatherAppGif = require("../images/WeatherAppGif.gif");
var NewsGif = require('../images/NewsAggregatorGif.gif');
var sites = [
    {
        name: "Chews Food",
        img: ChewsFood,
        gif: ChewsFoodGif,
        href: "https://chews-food.herokuapp.com/",
        index: 1,

    },
    {
        name: "Drum Machine",
        img: DrumMachine,
        gif: DrumMachineGif,
        href: "https://drum-machine-43c9a.firebaseapp.com/",
        index: 2,
    },
    {
        name: "News Aggregator",
        img: News,
        gif: NewsGif,
        href: 'https://news-aggregator-22950.firebaseapp.com',
        index: 3
    },
    {
        name: "Weather App",
        img: WeatherApp,
        gif: WeatherAppGif,
        href: "https://weather-app-540f9.firebaseapp.com/",
        index: 4
    },
];

module.exports = sites;