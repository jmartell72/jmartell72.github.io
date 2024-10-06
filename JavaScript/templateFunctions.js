//put your local README.md here
function getReadmeSpecific(website, xmlFile) {
    return new Promise((resolve, reject) => {
        // Fetch the links data asynchronously
        fetch(xmlFile)
            .then(response => response.text())
            .then(xmlString => {
                const parser = new DOMParser(); // Create a DOM parser
                const xmlDoc = parser.parseFromString(xmlString, "text/xml"); // Parse the XML

                // Check for parsing errors
                if (xmlDoc.documentElement.nodeName === "parsererror") {
                    reject(new Error("Error parsing " + xmlFile));
                    return;
                }

                // Find the URL for the specified website
                let url = "";
                $(xmlDoc).find("link").each(function () {
                    if ($(this).find("ref").text() === String(website)) {
                        url = $(this).find("url").text();
                        return false; // Exit the loop once found
                    }
                });

                // Check if URL was found
                if (!url) {
                    reject(new Error("Website not found in" + xmlFile));
                    return;
                }

                // Fetch the markdown content using the found URL
                fetch(url)
                    .then(response => response.text())
                    .then(markdownText => {
                        resolve(markdownText); // Resolve the Promise with markdown text
                    })
                    .catch(error => reject(error)); // Handle fetch errors
            })
            .catch(error => reject(error)); // Handle XML fetching errors
    });
}


async function buildPageSpecific(id, website, xmlFile) {
    try {
        // only important bit, makes sure to get the string for use
        const result = await getReadmeSpecific(website, xmlFile);
        var line = document.getElementById(id);
        var div = document.createElement("DIV");
        div.innerHTML = result;
        line.appendChild(div);
    } catch (error) {
        console.error("Error:", error)
    }
};

async function buildProjectCard(id, location) {

    let xmlFile = "/links/" + location + "Links.xml"

    try {
        fetch(xmlFile)
            .then(response => response.text())
            .then(xmlString => {
                const parser = new DOMParser(); // Create a DOM parser
                const xmlDoc = parser.parseFromString(xmlString, "text/xml"); // Parse the XML
                let x = 0
                var card = '<div class="card"><div id="imgHold"></div><div class="card-body"><div id="title"></div><div id="button"></div><div id="pHold"></div></div>'
                $(xmlDoc).find("link").each(async function () {
                    var ref = $(this).find("ref").text();
                    var link = $(this).find("link").text();
                    var name = $(this).find("name").text();
                    const result = await getReadmeSpecific(ref, xmlFile);
                    var line = document.getElementById(id);
                    var div = document.createElement("DIV");
                    var newClass = "cClass" + ref
                    $(div).addClass("col-xs-12 col-sm-6 col-md-4 col-xl-3 center-block text-center")
                    $(div).addClass(newClass)
                    div.innerHTML = card;
                    line.appendChild(div);

                    // opens the README has a HTML to select elements as needed for processing
                    var doc = new DOMParser().parseFromString(result, "text/html")

                    // adds a the top image of the md file to the card
                    newClass = "." + newClass

                    var img = doc.querySelector('img')
                    $(img).addClass("card-img-top")
                    $(img).removeAttr('height')
                    var imgHold = newClass + " #imgHold"
                    $(imgHold).append($(img))

                    // adds a the h1 of the md file to the card as a h3
                    var h3 = doc.querySelector('h1').innerHTML;
                    h3 = '<h3 class="card-body">' + h3 + '</h3>'
                    var title = newClass + " #title"
                    $(title).append($(h3))

                    // adds a button to the card based on the link.xml data
                    var buttonText = doc.querySelector('h2').innerHTML;
                    var fullRef = "toTemplate" + String(ref)
                    var button = '<button id="' + fullRef + '">Link To<br>' + buttonText + '</button>'
                    var buttonID = newClass + " #button"
                    $(buttonID).append($(button))

                    // allows the button to redirect to the proper template for processing
                    var buttonItem = document.getElementById(fullRef)
                    buttonItem.addEventListener('click', (function () {
                        var name = fullRef.substring(10)
                        var nextPageURL = "template.html?reference=" + encodeURIComponent(name);
                        window.location.href = nextPageURL;
                    }));

                    // adds the first p of the md file
                    var p = doc.querySelector('p')
                    $(p).addClass("card-text")
                    var pID = newClass + " #pHold"
                    $(pID).append($(p))
                })
            })
            .catch(error => reject(error));
    } catch (error) {
        console.error("Error:", error)
    }
}



export async function school(website) {
    try {
        $.get("/partials/navbar.html", function (data) {

            $("#nav-placeholder").replaceWith(data);
        })

        await buildPageSpecific("pageBuilder", website, "/links/schoolLinks.xml");

        $("#carouselHolder").append('<div id="carouselFade" class="carousel slide carousel-fade"><div class="carousel-inner" id="imgAppend"></div><button class="carousel-control-prev" type="button" data-bs-target="#carouselFade" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselFade" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></button></div>');

        let x = 0
        $('img').each(function () {
            let div = ""
            if (x > 0) {
                div = '<div class="carousel-item">'
            } else {
                div = '<div class="carousel-item active">'
            };
            $(this).addClass("d-block w-100")
            $(this).removeAttr('height')
            var hold = this.outerHTML;
            $(this).remove();
            div = div + hold
            $(div).append("</div>");
            $('#imgAppend').append($(div))
            x++
        })

        $('#school').addClass('active');

        $('h3').attr('id', 'subhead')


        $.get("../../partials/footer.html", function (data) {

            $("#footer-placeholder").replaceWith(data);
        })

        let i = 0
        $('p').each(function () {
            var p = $(this).html()
            let j = 2
            let newString = ""
            for (var i = 0; i < p.length; i++) {
                var character = p.charAt(i)
                if (character === "`" && j % 2 == 0) {
                    newString += "<code>&lt;";
                    j++
                } else if (character === "`") {
                    newString += "&gt;</code>";
                    j++
                } else {
                    newString += character;
                }
            }
            $(this).html(newString)
        })

    } catch (error) {
        console.error("Error: ".error);
    }
}

export async function projectHome(location) {
    try {
        await buildProjectCard("row", location);

    } catch (error) {
        console.error("Error: ", error);
    }



}