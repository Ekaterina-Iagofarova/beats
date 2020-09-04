let myMap;
const init = () => {
    myMap = new ymaps.Map("map", {
        center: [55.753215, 37.622504],
        zoom: 11,
        controls: [],
    });

    let coords = [
            [55.731536, 37.636330],
            [55.751999, 37.576133],
            [55.789704, 37.558212],
            [55.77645, 37.655211],
        ],
        myCollection = new ymaps.GeoObjectCollection({}, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: './images/icons/map.svg',
            iconImageSize: [39, 50],
            iconImageOffset: [-35, -52]
        });

    for (let i = 0; i < coords.length; i++) {
        myCollection.add(new ymaps.Placemark(coords[i]));
    }

    myMap.geoObjects.add(myCollection);

    myMap.behaviors.disable('scrollZoom');
};

ymaps.ready(init);