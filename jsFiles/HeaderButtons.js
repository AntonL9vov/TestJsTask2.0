$('.button_ghost').on('click', () => {
    let left_txt = $('#left_button_text').text();
    $('#left_button_text').text($('#right_button_text').text());//меняем местами текст или замена на любой другой, например можно из массива
    $('#right_button_text').text(left_txt);
})

$('.button_green').on('click', () => {
    let left_txt = $('#left_button_text').text();
    $('#left_button_text').text($('#right_button_text').text());
    $('#right_button_text').text(left_txt);
})