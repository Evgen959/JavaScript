const button = document.querySelector("#button")
const city = document.querySelector("#input_city")
if (localStorage.getItem("city")) {  //
    recordNewcity()                  //
}                                    //

button.addEventListener('click', recordNewcity);
city.addEventListener('keypress', event => event.keyCode === 13 && recordNewcity());

function recordNewcity(){
    let newcity;
    newcity = city.value.trim(); 
    if (!city.value.trim() && localStorage.getItem("city")) {  //
        newcity = localStorage.getItem("city")                 //
    }                                                          //
   
    if (newcity) {
        localStorage.setItem("city", newcity);

        const url = "http://api.weatherapi.com/v1/current.json?key=ef3b4a40dd54446ea49160325242904&q="+newcity+"&aqi=no"  // name    
        let dataResponse;
        const getData = async (api) => {
            const serverResponse = await fetch(api)
            dataResponse = await serverResponse.json()
            dataWork(dataResponse)
            console.log(dataResponse)
        }
        getData(url)
        function dataWork(data){
            if (data.location.name) {
                    
                
                
                
                // Дата
                let getData = new Date(data.current.last_updated)
                const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                const day = days[getData.getDay()-1]
                const monthNames = ["January", "February", "March", "April", "May", 
                "June", "July", "August", "September", "October", "November", "December"]
                const month = monthNames[getData.getMonth()];
  
                let dateHeaderDiv = document.querySelector("#date");  // Находим элемент с id date
                dateHeaderDiv.innerText = day+"."+ " " + month + " " + getData.getDate(); // отправляем дату в HTML 
                  
                // Город и ригеон
                let nameDiv = document.querySelector("#city");  // Находим элемент с id city
                nameDiv.innerText = data.location.name + " " + data.location.region; // берем город и ригеон и отрправляем в HTML
                
                // Изображение облочности
                document.querySelector("#image").innerText = "";  // удаляет картинку погоды
                let imageDiv = document.querySelector("#image");   // Находим элемент с id image 
                let image = document.createElement("img");  // Создаем элемент изображения
                image.src = data.current.condition.icon;    // src є скороченням від "source" (джерело) і вказує шлях до зображення data.avatar_url                               
                imageDiv.appendChild(image); // Добавляем изображение внутрь элемента imageDiv         
                
                // Надпись облочности
                let cloudyDiv = document.querySelector("#clody")  // Находим элемент с id
                cloudyDiv.innerText = data.current.condition.text; // отрправляем в HTML
                
                // Температура
                let currentTempC = document.querySelector("#temp")  // Находим элемент с id
                currentTempC.innerText = data.current.temp_c + "°";  // отрправляем в HTML
                
                // Скорость и направление ветра
                let wind = document.querySelector("#wind")  // Находим элемент с id
                wind.innerText = "(" + data.current.wind_dir + ")  " + data.current.wind_kph + "km/h";  // отрправляем в HTML

                // Влажность
                let humidity = document.querySelector("#humidit")  // Находим элемент с id
                humidity.innerText = data.current.humidity + "%";  // отрправляем в HTML

                let pressure_mb = document.querySelector("#pressure_mb")  // Находим элемент с id
                pressure_mb.innerText = data.current.pressure_mb + "mmHg";  // отрправляем в HTML

                
            } else {
                let noGefundenNickDiv = document.querySelector(".city");
                let noGefundenNick = document.createElement ("div");
                noGefundenNick.innerText = "City not Gefunden";
                console.log("noGefundenNic")        
                noGefundenNick.classList.add("noGefundenNick");
                noGefundenNickDiv.appendChild(noGefundenNick);
            }
        }
    } 
}





