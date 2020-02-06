SE.init({
    clientId: 17151,
    key: '2DTX0ttCl8HX5AirFtN7)Q((',
    channelUrl: 'https://davidcbalsley.github.io/stackexchange/blank',
    complete: function (data) {
        // Don't do anything yet
    }
});

var queryURL = “http://api.stackexchange.com/docs/users?site=stackoverflow”;

$.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        console.log(response);

});
