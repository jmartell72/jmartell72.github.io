function addHome() {
    const div = document.createElement('div');
    div.id = "home";

    div.innerHTML = `
    <div id="nav-placeholder"></div>

    <link href="/Styles/home.css" rel="stylesheet">
    <main>
        <header>
            <h1>Welcome to Justin Martell's Portfolio</h1>
        </header>

        <div id="aboutMe">
            <p class="lead">By thriving on complex problems under tight deadlines, I bring a highly-skilled technical
                focus to your team</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quas et ipsam ad ex inventore totam ipsum
                voluptate possimus? Vero impedit dignissimos quibusdam, provident suscipit consequatur! Quas officiis
                cumque possimus.</p>
        </div>

        <div class="container-fluid text=center">
            <div class="row" id="row">
            </div>

        </div>
    </main>
    <div id="footer-placeholder"></div>
    `;
    document.getElementById('box1').appendChild(div);

}

function removeItem(input) {
    document.getElementById('box1').removeChild(input);
}

function changeToHome() {
    removeItem(landing);
    addHome();
    $.get("partials/navbar.html", function (data) {

        $("#nav-placeholder").replaceWith(data);
    });
    $.get("partials/footer.html", function (data) {

        $("#footer-placeholder").replaceWith(data);
    })
}

// function landingChange() {
//     document.body.className = 'fade';
//     window.setTimeout(function () {
//         changeToHome();
//     }, 1000);
//     window.setTimeout(function () {
//         homeChange();
//     }, 1300);
// }

// function homeChange() {
//     document.body.className = 'f';
// }