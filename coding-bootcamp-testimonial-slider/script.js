$(() => {

    $(".testimonial-image img").after().click((event) => {
        console.log("img")
    });

    $("#testimonial-prev").click((e) => {
        const activeImage = $(".testimonial-image").find(".active");
        const prevImage = activeImage.prev()
        if (prevImage[0]) {
            activeImage.removeClass("active");
            prevImage.addClass("active")
        }

        const activeText = $(".testimonial-text").find(".active");
        const prevText = activeText.prev()
        if (prevText[0]) {
            activeText.removeClass("active");
            prevText.addClass("active")
        }
    })

    $("#testimonial-next").click((e) => {
        const activeImage = $(".testimonial-image").find(".active");
        const nextImage = activeImage.next()
        if (nextImage[0]) {
            activeImage.removeClass("active");
            nextImage.addClass("active")
        }

        const activeText = $(".testimonial-text").find(".active");
        const nextText = activeText.next()
        if (nextText[0]) {
            activeText.removeClass("active");
            nextText.addClass("active")
        }
    })
});
