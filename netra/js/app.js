//start preloader
$(window).on('load', () => {
    $(".preloader").fadeOut(800);
    $(".preloadContainer").delay(800).fadeOut(1000);
});
// end preloader

$(() => {
    $('#fileupload').change((event) => {
        var x = URL.createObjectURL(event.target.files[0]);
        $('#imagPlace').attr('src', x);
    });
    $('#fileupload2').change((event) => {
        var x = URL.createObjectURL(event.target.files[0]);
        $('#secondImag').attr('src', x);
    });
});