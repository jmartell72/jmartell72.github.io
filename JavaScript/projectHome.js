function getReadme() {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: "GET",
            url: "links.xml",
            dataType: 'xml',
            success: function (xml) {

            }
        })
        //put your local README.md here
        fetch('https://raw.githubusercontent.com/jmartell72/SchoolProjects/37ce93eaa26fb4d8d4dfc20dd966b8157f3ba4e7/Sophia.org/Introduction%20to%20Python%20-%20Final%20Project/README.md')
            //converts the README into a text string
            .then(response => response.text())
            .then(markdownText => {
                //returns the README string for display
                resolve(markdownText);
            })
            //returns an error if it cannot complete
            .catch(error => reject(error));
    });
}

async function buildPage(id) {
    try {
        // only important bit, makes sure to get the string for use
        const result = await getReadme();
        var line = document.getElementById(id);
        var div = document.createElement("DIV");
        div.innerHTML = result;
        line.appendChild(div);
    } catch (error) {
        console.error("Error:", error)
    }
};

export async function school() {
    try {
        $.get("/partials/navbar.html", function (data) {

            $("#nav-placeholder").replaceWith(data);
        })

        await buildPage("pageBuilder");

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