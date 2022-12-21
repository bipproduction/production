const app = document.getElementById("app");
const datanya = `


`
app.innerHTML = marked.parse('# Marked in the browser\n\nRendered by **marked**.');