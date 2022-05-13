function reloadPage() {
    location.reload();
}

function wordSearch() {
    document.getElementById('searchResult').style.visibility = 'visible';

    var word = document.getElementById('word');
    var definition = document.getElementById('definition');
    var searchWord = document.getElementById('searchBox').value;
    var request1 = new XMLHttpRequest();

    request1.open('GET', 'https://api.dictionaryapi.dev/api/v2/entries/en_US/' + searchWord, true);

    request1.onload = function () {
        var data = JSON.parse(this.response);

        if (request1.status >= 200 && request1.status < 400) {
            word.innerHTML = data[0].word + " (" + data[0].meanings[0].partOfSpeech + ")";
            definition.innerHTML = data[0].meanings[0].definitions[0].definition;
        } else {
            word.innerHTML = "No results found for " + searchWord;
            definition.innerHTML = " ";
        }
    }
    request1.send();
}