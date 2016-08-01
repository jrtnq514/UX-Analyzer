/**
 * Created by JT on 7/29/16.
 */

function submitUrl() {
    var url = $('#url').val();
    
    $.ajax({
        url: '',
        method: 'get',
        data: {
            url: url
        }
    }).success(function (data, status) {
        console.log(status);
    }).error(function () {

    });
}