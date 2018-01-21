/**
 * Created by Leonid on 13.03.2017.
 */

$(document).on('click', '.MusicDiv_1', function () {
    var name = $(this).text();
    console.log(name);
    var request = gapi.client.youtube.search.list({
        part: "snippet",
        q: name,
        maxResults: 1
    });
    request.execute(function (response) {
        var results = response.result;
        $(".FixedRightDiv__Clip").html("");
        $.each(results.items, function (index, item) {
            var Youtube = ('<iframe width="240"  src="//www.youtube.com/embed/' + item.id.videoId + '?rel=0&autoplay=1" frameborder="0"  allowfullscreen></iframe>' +
            '<div class="MusicName_2" align="center">' +
            '<b>' + item.snippet.title + '</b>' +
            '</div>');
            $(".FixedRightDiv__Clip").append(Youtube);
        });
    });
});
window.onload=function () {

    var rurl = 'http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=189cce0a877c73b64aaf2dd3b55e4072&format=json&callback=?';
    $.getJSON(rurl, function (tracks) {

        $.each(tracks.tracks.track, function (i, track) {
            var MusicDivRight = ('<div class="MusicDiv_1">' +
            '<div class="MusicDiv_1__Album" style="background-image: url(' + track.image[1]["#text"] + ')"></div>' +
            '<div class="Music_1">' +
            '<div class="Music_1__MusicName_1">' +
            '<b>' + track.name + '</b>' +
            '</div>' +
            '<div class="Music_1__Singer_1">' +
            ' ' + track.artist["name"] + ' ' +
            '</div>' +
            '</div>' +
            '</div>');
            if (i === 5) {
                return false;
            }
            $('.FixedRightDiv').append(MusicDivRight);
        });
    });
    $('.Search__Submit')[0].onclick = function () {

        var search = $('.Search__Search_music')[0];

        var lurl = 'http://ws.audioscrobbler.com/2.0/?method=track.search&track=' + search.value + '&api_key=189cce0a877c73b64aaf2dd3b55e4072&format=json&callback=?';

        $.getJSON(lurl, function (musics) {
            var musicHTML = "";
            $.each(musics.results.trackmatches.track, function (i, music) {
                    var MusicDivLeft = ('<div class="MusicDiv_1">'+
                    '<div class="MusicDiv_1__Album" style="background-image: url(' + music.image[1]["#text"] + ')"></div>' +
                    '<div class="Music_1">' +
                    '<div class="Music_1__MusicName_1">' +
                    '<b>' + music.name + '</b>' +
                    '</div>' +
                    '<div class="Music_1__Singer_1">' +
                    '  ' + music.artist + '  ' +
                    '</div>' +
                    '</div>' +
                    '</div>');
                    musicHTML+=MusicDivLeft;
                }
            );

            $('.LeftDiv').html(musicHTML);
            /*$(document).on('click', '.MusicDiv_1', function () {
             var name = $(this).text();
             console.log(name);
             var request = gapi.client.youtube.search.list({
             part: "snippet",
             q: name,
             maxResults: 1
             });
             request.execute(function (response) {
             var results = response.result;
             $(".Clip").html("");
             $.each(results.items, function (index, item) {
             var Youtube = ('<iframe width="240"  src="//www.youtube.com/embed/' + item.id.videoId + '?rel=0&autoplay=1" frameborder="0"  allowfullscreen></iframe>' +
             '<div class="MusicName_2" align="center">' +
             '<b>' + item.snippet.title + '</b>' +
             '</div>');
             $(".Clip").append(Youtube);
             });
             });
             });*/

        });

        return false;
    };
};

function init() {
    gapi.client.setApiKey("AIzaSyCfY7jh6-Orcef9Yq5PZSuwxkVXExno89c");
    gapi.client.load("youtube", "v3", function () {
    });
}
