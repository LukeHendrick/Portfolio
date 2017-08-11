var DrumMachine = require("../images/DrumMachine.png")
var WeatherApp = require("../images/WeatherApp.png")
var Calculator = require('../images/Calculator.png')
var News = require('../images/NewsAggregator.png')
var ChewsFood = require('../images/ChewsFood.png');
var sites = [
    {
        name: "Chews Food",
        img: ChewsFood,
        href: "https://chews-food.herokuapp.com/",
        index: 1,

    },
    {
        name: "Drum Machine",
        img: DrumMachine,
        href: "https://drum-machine-43c9a.firebaseapp.com/",
        index: 2,
    },
    {
        name: "News Aggregator",
        img: News,
        href: 'https://news-aggregator-22950.firebaseapp.com',
        index: 3
    },
    {
        name: "Weather App",
        img: WeatherApp,
        href: "https://weather-app-540f9.firebaseapp.com/",
        index: 4
    },
    {
        name: "Calculator",
        img: Calculator,
        href: 'https://calculator-b22be.firebaseapp.com/',
        index: 5
    },

];

module.exports = sites;