let form = $("#form");

let button = $("#form_button");


//форма обратной связи
let form_window = '<div class="form_window" id="form_window">\n' +
    '            <div>\n' +
    '                <button class="form_close" id="form_close"><img src="../public/X.svg"></button>\n' +
    '                <img class="map_point" src="../public/MapPoint.jpg" alt="map point">\n' +
    '            </div>\n' +
    '            <p class="form_name" id="form_name">Форма сайта</p>\n' +
    '            <p class="form_text" id="form_text">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>\n' +
    '            <form class="form_input_fields">\n' +
    '                <input name="name" type="text" class="form_input_name" placeholder="Имя" id="form_input_name">\n' +
    '                <input name="number" type="text" class="form_input_number" placeholder="Номер телефона" id="form_input_number">\n' +
    '            </form>\n' +
    '            <div class="form_footer">\n' +
    '                <button class="form_cancel" id="form_cancel">Отменить</button>\n' +
    '                <button class="form_submit" id="form_submit">Отправить</button>\n' +
    '            </div>\n' +
    '        </div>';


//форма ошибки
let errorGet = '<div class="error_window"><p>Что-то не так</p></div>'

//функции для создания таблицы
function createTableHeader(el) {
    let header = '';
    for (let key in el[0]) {
        header = header + '<th>' + key + '</th>';
    }
    return header;
}

function createTableStr(element) {
    let str = '';
    for (let key in element) {
        str = str + '<td>' + element[key] + '</td>';
    }
    return str;
}

function createTable(el) {
    let header = createTableHeader(el);
    let tableStr = ''
    for (let key in el) {
        tableStr = tableStr + '<tr>' + createTableStr(el[key]) + '</tr>'
    }
    return (
        '<table class="table">' + header + tableStr + '</table>'
    )
}

//функции для валидации
function nameValidation(name) {
    if (name.length === 0){
        return "Имя не должно быть пустым"
    }
    if (name.length < 3) {
        return "Имя должно быть длинее трех символов"
    }
    let pat = /\d/g;
    if (pat.test(name)) {
        return "Имя не должно содержать цифры"
    }
    return ''
}

function numberValidation(number) {
    if (number.length === 0){
        return "Номер не должен быть пустым"
    }
    if (number[0] === '+') {
        if (number[1] === '7') {
            if (number.length === 12) {
                return ''
            }
            return 'Номер должен состять из 11 цифр'
        }
        return 'Номер должен начинаться с +7 или 8'
    }
    if (number[0] === '8') {
        if (number.length === 11) {
            return ''
        }
        return 'Номер должен состять из 11 цифр'
    }
    return 'Номер должен начинаться с +7 или 8'
}

//eventListener для кнопки открытия формы
button.on('click', (e) => {
    $('body').css({
        overflowY: "hidden"
    })
    form.css({
        display: "block"
    })
    form.append(form_window)

    let close = $(".form_close")

    let cansel = $(".form_cancel")

    let submit = $(".form_submit")

    let name = $(".form_input_name")

    let number = $(".form_input_number")

    $(close).on('click', (e) => {
        $('#form_widow').detach()
        form.css({
            display: "none"
        })
        $('body').css({
            overflowY: "scroll"
        })
    })

    $(cansel).on('click', (e) => {
        $('#form_widow').remove()
        form.css({
            display: "none"
        })
        $('body').css({
            overflowY: "scroll"
        })
    })

    submit.on('click', (e) => {
        if (nameValidation(name[0].value) === '' && numberValidation(number[0].value) === '') {
            $("#form_window").remove();
            //запуск спиннера
            $(form).append(
                '<div class="spin-wrapper">\n' +
                '  <div class="spinner">\n' +
                '  </div>\n' +
                '</div>'
            )
            let array = [name[0].value, number[0].value]
            let data = JSON.stringify(array)
            $.ajax({
                type: "Get",
                url: "https://jsonplaceholder.typicode.com/todos",
                data: {array: data},
                success: function (response) {
                    let users = response;
                    users = users.filter((el) => { //фильтрация полученного массива
                        if (el["userId"] === 5) {
                            if (el["completed"] === false)
                                return 1;
                        }
                        return 0;
                    })
                    let table = createTable(users);
                    form.append(table)
                },
                error: function (response) {
                    form.append(errorGet)
                },
            })
            $(".spin-wrapper").remove();//удаление спиннера
        } else {
            if (nameValidation(name[0].value) !== ''){
                alert(nameValidation(name[0].value))
            }
            if(numberValidation(number[0].value) !== ''){
                alert(numberValidation(name[0].value))
            }
        }
    })
})

//удаление формы и таблицы по клику на область вокруг формы
$(".form_overlay").on('click', () => {
    form.css({
        display: "none"
    })
    $("table").remove()

    $('body').css({
        overflowY: "scroll"
    })
})


