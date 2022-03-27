let IconsArray = [
    'http://localhost:63342/TestJsTask/public/MainPlantPhoto.svg',
    'http://localhost/TestJsTask/public/HeadPhonesIcon.svg',
    'http://localhost:63342/TestJsTask/public/ArrowLeft.svg',
    './public/DollarIcon.svg'
]
let IconsDescriptionsArray = [
    'Fast <br/>Delivery',
    'Great Customer <br/> Service',
    'Original <br/> Plants',
    'Affordable <br/> Price'
]
let IconsCardText = [
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard ',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard ',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard ',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard '
]

const CreateCardIcon = (iconPath, iconDescription, text) => {
    return (
        '<div class="info_card">' +
        '<div class="info_card_top">' +
        '<img src=' + iconPath + 'alt="plantIcon"> ' +
        '<p>' + iconDescription + '</p> ' +
        '</div> <p class="info_card_bottom">' + text + '</p>'
    )
}

//планировалась как функциональный компонент, но возникала ошибка, невозможно загрузить картинки с js с localStorage, хотя с html все нормально