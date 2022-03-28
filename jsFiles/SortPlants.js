function sortPlants(index){
    let plants = $(".plant_card"); //выбираются все растения
    let prices = [];
    let parent = plants[0].parentNode; // Получаем родительскую node
    for (let i = 0; i < plants.length; i++) {
        prices.push(parent.removeChild(plants[i]));//удаляем все растения со страницы и добавляем в массив
    }
    prices.sort((x, y) => {
        let xText = x.querySelector('p:nth-child(3)').textContent.replace(/[^+\d]/g, ''); // выбираем цену и удаляем все кроме цифр
        let yText = y.querySelector('p:nth-child(3)').textContent.replace(/[^+\d]/g, '');
        let xPrice = parseInt(xText);//переводим в int
        let yPrice = parseInt(yText);

        if(xPrice < yPrice) {
            if(index)
                return 1;
            return -1;
        }
        if(xPrice > yPrice){
            if (index)
                return -1;
            return 1;
        }
        return 0;
    }).forEach((el) => {
        parent.append(el); //возвращаем растения на страницу в нужном порядке
    })
}