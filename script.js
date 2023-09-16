var typed = new Typed(".multiple-text", {
    strings: ["Software Engineer", "Frontend Developer", "Student", "DSA Enthusiast"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    })
});