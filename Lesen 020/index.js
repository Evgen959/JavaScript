const button = document.querySelector(".button")
const city = document.querySelector("#input_city")

button.addEventListener('click', recordNewcity);
city.addEventListener('keypress', event => event.keyCode === 13 && recordNewcity());
function recordNewcity()

{
    let newcity;
    newcity = city.value.trim(); 
    if (newcity) {
       // Очищаємо вміст .avatar_url
       //   document.querySelector(".avatar_url").innerHTML = "";
        document.querySelector(".box1").innerText = "";  



        const url = "http://api.weatherapi.com/v1/current.json?key=ef3b4a40dd54446ea49160325242904&q="+city.value+"&aqi=no"  // name    
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
                    
                // ДЕНь
                let getData = new Date(data.current.last_updated)
                const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
                const day = days[getData.getDay()-1]

                const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                const month = monthNames[getData.getMonth()];
  
                let dateHeaderDiv = document.querySelector(".date");  // Находим элемент с классом .avatar_url
                // let dateDiv = document.createElement("div");  // Создаем первый новый div для data.name
                dateHeaderDiv.innerText = day+"."+ " " + month + " " + getData.getDate();
                // dateDiv.classList.add("name");  // Присваиваем класс для стилизации
                // dateHeaderDiv.appendChild(dateDiv); // Добавляем созданный div внутрь элемента .avatar_url
  
    
                let weaterDiv = document.querySelector(".avatar_url");  // Находим элемент с классом .avatar_url
                let nameDiv = document.createElement("div");  // Создаем первый новый div для data.name
                nameDiv.innerText = " " + data.location.name;
                // nameDiv.classList.add("city");  // Присваиваем класс для стилизации
                weaterDiv.appendChild(nameDiv); // Добавляем созданный div внутрь элемента .avatar_url

                let regionDiv = document.createElement ("div");
                regionDiv.innerText = " " + data.location.region;
                // regionDiv.classList.add("region");
                weaterDiv.appendChild(regionDiv);   

        
                let imageDiv = document.querySelector(".box1");
    
                let image = document.createElement("img");  // Создаем элемент изображения
                image.src = data.current.condition.icon;    // src є скороченням від "source" (джерело) і вказує шлях до зображення data.avatar_url                               
                // imageDiv.classList.add("cloudy-image"); // Присваиваем класс для стилизации (если требуется)
                imageDiv.appendChild(image); // Добавляем изображение внутрь элемента imageDiv         
                weaterDiv.appendChild(imageDiv); // Добавляем созданный div внутрь элемента .avatar_url

                let cloudyDiv = document.querySelector("#clody")
                // let conditionText = document.createElement ("p");
                cloudyDiv.innerText = "" + data.current.condition.text;
                // conditionText.classList.add("cloudy");
                // cloudyDiv.appendChild(conditionText);

                let currentTempC = document.querySelector("#temp")
                currentTempC.innerText = "" + data.current.temp_c;
                // currentTempC.classList.add("currentTempC");
                // currentTempC.appendChild(currentTempC);  


            } else {
                let noGefundenNickDiv = document.querySelector(".avatar_url");
                let noGefundenNick = document.createElement ("div");
                noGefundenNick.innerText = "City not Gefunden";
                console.log("noGefundenNic")        
                noGefundenNick.classList.add("noGefundenNick");
                noGefundenNickDiv.appendChild(noGefundenNick);
            }
        }
    } 
}





