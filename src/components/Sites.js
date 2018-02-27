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
        description: "Uses the Yelp API to return a restaurant, based on the selected food genres. Created with React, using a Node.JS backend.",
        index: 1,

    },
    {
        name: "Drum Machine",
        img: DrumMachine,
        gif: DrumMachineGif,
        href: "https://drum-machine-2d444.firebaseapp.com/",
        description: "Simple drum machine, with two kits to choose from. Built with React and uses the HTML5 Audio API. ",
        index: 2,
    },
    {
        name: "News Aggregator",
        img: News,
        gif: NewsGif,
        href: 'https://news-aggregator-22950.firebaseapp.com',
        description: "Selects from multiple available news sources, powered by the NewsAPI.",
        index: 3
    },
    {
        name: "Weather App",
        img: WeatherApp,
        gif: WeatherAppGif,
        href: "https://weather-app-540f9.firebaseapp.com/",
        description: "Accesses the OpenWeather API to retrieve the week's forecast, with further details avilable for individual days.",
        index: 4
    },
];

module.exports = sites;