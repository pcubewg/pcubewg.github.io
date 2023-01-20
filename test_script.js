$(document).ready(() => {
    var status = true;
    $("#noe").text("Welcome " + JSON.parse(localStorage.getItem('edata')).name);
    $("#message").summernote({
        placeholder: "Write a Short Story here...",
        toolbar: [
            ['font', ['bold', 'underline','italic']]
        ],
        maxheight: 500,
        minheight: 300,
        height: 100,
        minwidth: 200,
        maxwidth: 500,
        width: 300
    });
    
});