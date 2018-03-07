var DrumMachine = require("../images/DrumMachine.png");
var WeatherApp = require("../images/WeatherApp.png");
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
        description: "Uses the Yelp API to return a restaurant, based on the selected food genres. Created with React, using a NodeJS backend.",
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
        href: 'https://newsaggregate.herokuapp.com/',
        description: "Selects articles from multiple available news sources, powered by the NewsAPI. Setup as a PWA for mobile devices.",
        index: 3
    },
    {
        name: "Weather App",
        img: WeatherApp,
        gif: WeatherAppGif,
        href: "https://lhweatherapp.herokuapp.com/",
        description: "Accesses the DarkSky API to retrieve the week's forecast, with further details avilable for individual days.",
        index: 4
    },
];

module.exports = sites;