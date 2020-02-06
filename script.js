SE.init({
    clientId: 17151,
    key: 'mxEj)7l7)Hbz6PzEu0O2Bg((',
    channelUrl: 'https://davidcbalsley.github.io/stackexchange/blank',
    complete: function (data) {
        // Don't do anything yet
    }
});

var queryURL = "https://api.stackexchange.com/docs/users?site=stackoverflow";

$.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        console.log(response);

});
