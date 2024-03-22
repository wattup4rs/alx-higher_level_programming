// a JavaScript script that fetches from
// https://hellosalut.stefanbohacek.dev/?lang=fr and displays
// the value of hello from that fetch in the HTML tag DIV#hello
$(document).ready(() => {
    const $divHello = $('#hello');
    $.ajax({
        type: 'GET',
        url: `https://hellosalut.stefanbohacek.dev/?lang=fr`,
        success: (helloMessage) => {
            // console.log(helloMessage);
            // console.log(helloMessage.hello);
            $divHello.text(helloMessage.hello);
        }
    });
});
