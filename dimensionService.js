
function calculateDimension() {
    $.ajax({
        url: 'api/dimension'
    }).then(function (data) {
        $('#dimension').val(data.dimension);
    });
}