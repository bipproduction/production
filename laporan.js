const app = document.getElementById("app");
var rawFile = new XMLHttpRequest();
rawFile.open("GET", "index.md", false);
rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
        if (rawFile.status === 200 || rawFile.status == 0) {
            var allText = rawFile.responseText;
            // alert(allText);
            app.innerHTML = marked.parse(allText);
        }
    }
}
rawFile.send(null);
