$(document).ready(function() {

    // Yandex карта на главной,
    if ($('#map').length) {

        ymaps.ready(function () {
            let coordArr = document.getElementById('map').dataset.coord.split(',').map(function(item) { return parseFloat(item) });
            var myMap = new ymaps.Map('map', {
                    center: [56.170526, 40.415482],
                    zoom: 15,
                    controls: []
                }, {
                    searchControlProvider: 'yandex#search'
                }),

                myPlacemark = new ymaps.Placemark(coordArr, {
                    iconContent: '<div style="background: #fff;width: 134px;padding: 5px 8px;height: 15px;border-radius: 15px;margin-top: -4px;margin-left: 20px;">Выставочная площадка</div>'
                }, {
                    // Опции.
                    // Необходимо указать данный тип макета.
                    preset: 'islands#icon',
                    iconColor: 'red'
                });

            myMap.geoObjects
                .add(myPlacemark);

            myMap.behaviors.disable('scrollZoom')
            myMap.setBounds(myMap.geoObjects.getBounds(), {checkZoomRange:true}).then(function(){ if(myMap.getZoom() > 15) myMap.setZoom(15)} )
        });

    }

})