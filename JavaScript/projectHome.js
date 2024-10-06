function getReadmeSpecific(website) {
    return new Promise((resolve, reject) => {
        // Fetch the links data asynchronously
        fetch("links.xml")
            .then(response => response.text())
            .then(xmlString => {
                const parser = new DOMParser(); // Create a DOM parser
                const xmlDoc = parser.parseFromString(xmlString, "text/xml"); // Parse the XML

                // Check for parsing errors
                if (xmlDoc.documentElement.nodeName === "parsererror") {
                    reject(new Error("Error parsing links.xml"));
                    return;
                }

                // Find the URL for the specified website
                let url = "";
                $(xmlDoc).find("links").each(function () {
                    if ($(this).find("name").text() === String(website)) {
                        url = $(this).find("url").text();
                        return false; // Exit the loop once found
                    }
                });

                // Check if URL was found
                if (!url) {
                    reject(new Error("Website not found in links.xml"));
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

async function buildPageSpecific(id, website) {
    try {
        // only important bit, makes sure to get the string for use
        const result = await getReadmeSpecific(website);
        var line = document.getElementById(id);
        var div = document.createElement("DIV");
        div.innerHTML = result;
        line.appendChild(div);
    } catch (error) {
        console.error("Error:", error)
    }
};

export async function school(website) {
    try {
        $.get("/partials/navbar.html", function (data) {

            $("#nav-placeholder").replaceWith(data);
        })

        await buildPageSpecific("pageBuilder", website);

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

    } catch (error) {
        console.error("Error: ".error);
    }
}