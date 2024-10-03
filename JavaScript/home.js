function addHome() {
    const div = document.createElement('div');
    div.id = "home";

    div.innerHTML = `
        <nav class="navbar sticky-top navbar-expand-md navbar-dark" style="background-color: #002a58 ;">
        <div class="container-fluid" id="navContainer">
            <a class="navbar-brand" href="home.html">Justin Martell's Portfolio</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggle"
                aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarToggle">
                <ul class="navbar-nav mb-2 mb-lg-0 j flex">
                    <li class="nav-item"><a class="nav-link" href="./School_Projects.html"
                            aria-current="School Projects">School Projects</a>
                    </li>
                    <li class="nav-item"><a class="nav-link" href=".">Java Projects</a></li>
                    <li class="nav-item"><a class="nav-link" href=".">HTML Projects</a></li>
                    <li class="nav-item"><a class="nav-link" href=".">Python Projects</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous">
        </script>
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
            <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-3 center-block text-center">
                    <div class="card">
                        <img src="./Images/pantry.png" alt="Project1" id="pImg1" class="card-img-top">
                        <div class="card-body">
                            <h3 class="card-title">Project 1 Header</h3>
                            <a class="card-link" href=".">Project 1 Link</a>
                            <p class="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores repellendus,
                                omnis
                                similique architecto eos quas magnam ex temporibus illo dolores officia
                                exercitationem
                                harum
                                soluta corporis dicta at illum maxime voluptatem?</p>
                            </p>
                        </div>
                    </div>
                </div>


                <div class="col-xs-12 col-sm-6 col-md-3 center-block text-center">

                    <div class="card">
                        <img src="./Images/pantry.png" alt="Project1" id="pImg1" class="card-img-top">
                        <div class="card-body">
                            <h3 class="card-title">Project 1 Header</h3>
                            <a class="card-link" href=".">Project 1 Link</a>
                            <p class="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
                                repellendus,
                                omnis
                                similique architecto eos quas magnam ex temporibus illo dolores officia
                                exercitationem
                                harum
                                soluta corporis dicta at illum maxime voluptatem?</p>
                            </p>
                        </div>
                    </div>

                </div>

                <div class="col-xs-12 col-sm-6 col-md-3 center-block text-center">
                    <div class="card">
                        <img src="./Images/pantry.png" alt="Project1" id="pImg1" class="card-img-top">
                        <div class="card-body">
                            <h3 class="card-title">Project 1 Header</h3>
                            <a class="card-link" href=".">Project 1 Link</a>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Asperiores
                                repellendus,
                                omnis
                                similique architecto eos quas magnam ex temporibus illo dolores officia
                                exercitationem
                                harum
                                soluta corporis dicta at illum maxime voluptatem?</p>
                        </div>
                    </div>
                </div>



                <div class="col-xs-12 col-sm-6 col-md-3 center-block text-center">
                    <div class="card">
                        <img src="./Images/pantry.png" alt="Project1" id="pImg1" class="card-img-top">
                        <div class="card-body">
                            <h3 class="card-title">Project 1 Header</h3>
                            <a class="card-link" href=".">Project 1 Link</a>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Asperiores
                                repellendus,
                                omnis
                                similique architecto eos quas magnam ex temporibus illo dolores officia
                                exercitationem
                                harum
                                soluta corporis dicta at illum maxime voluptatem?</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </main>

    <footer>
        <div id="socialMediaIcon">
            <p>Follow me on LinkedIn!
                <a href="www.linkedin.com"><img src="./Images/LI-In-Bug.png" alt="LinkedIn Logo">
                </a>
            </p>
        </div>
        <div id="navBorder">
        </div>
        <div id="navLegal">
            <p>2024© Justin Martell</p>
        </div>

    </footer>
    `;
    document.getElementById('box1').appendChild(div);
}

function removeItem(input) {
    document.getElementById('box1').removeChild(input);
}

function changeToHome() {
    removeItem(landing);
    addHome();
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