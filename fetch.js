class Fetch {
    async getCurrent(input) {
        const myKey = "f934bff46db56fc1525a1e4c33fe0672";

        //make request to url

        const response = await fetch (
            `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
        );

        const data = await response.json();

        console.log(data);

        return data;
        
    }
}