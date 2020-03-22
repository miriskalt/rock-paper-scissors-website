var city ="Berlin";
var country = "germany"



$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "," + country + "&units=metric&APPID=dd5858599c2478e806fd24120e4f5d13", function(data){
    console.log(data);

    var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var temp = Math.floor(data.main.temp);
    var weather = data.weather[0].main;
    
    
    $('.icon').attr('src', icon);
    $('.weather').append(weather);
    $('.temp').append(temp);
    
});