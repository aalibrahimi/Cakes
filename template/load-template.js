// This function allows a loading concept of our header to be included in other html files using one line in them

function loadHtml(file, elementId) {
    fetch(file)
        .then(respone => respone.text())
        .then(html =>
        {
            document.getElementById(elementId).innerHTML = html;
        }
        );
}

//loading the header
loadHtml('./template/header.html', 'header-placeholder');
loadHtml('./template/footer.html', 'footer-placeholder')