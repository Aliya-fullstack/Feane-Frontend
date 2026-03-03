    $(".btn-slide").click(function () {
        let slideIndex = $(this).data("slide");
        let moveX = slideIndex * -100;

        $(".text-slider").animate({
            left: moveX + "%"
        }, 700);

        $(".btn-slide").removeClass("active");
        $(this).addClass("active");
    });

    let burgerbtn = document.getElementById("burger");
    let pizzabtn = document.getElementById("pizza");
    let pastabtn = document.getElementById("pasta");
    let friesbtn = document.getElementById("fries");
    let allbtn = document.getElementById("all");


    let burgerboxes = document.querySelectorAll(".burger");
    let pizzaboxes = document.querySelectorAll(".pizza");
    let pastaboxes = document.querySelectorAll(".pasta");
    let friesboxes = document.querySelectorAll(".fries");

    let allBoxes = document.querySelectorAll(".box");


    let box1 = document.querySelector(".box1");
    let box2 = document.querySelector(".box2");
    let box3 = document.querySelector(".box3");


    function showCategory(boxGroup) {

        box2.style.display = "none";
        box3.style.display = "none";


        box1.innerHTML = "";


        allBoxes.forEach(b => b.classList.add("hidden"));


        boxGroup.forEach((b, i) => {
            b.classList.remove("hidden");
            b.classList.remove("show-effect");

            setTimeout(() => {
                b.classList.add("show-effect");
            }, i * 150);

            box1.appendChild(b);
        });
    }


    burgerbtn.addEventListener("click", function (e) {
        e.preventDefault();
        showCategory(burgerboxes);
    });


    pizzabtn.addEventListener("click", function (e) {
        e.preventDefault();
        showCategory(pizzaboxes);
    });


    pastabtn.addEventListener("click", function (e) {
        e.preventDefault();
        showCategory(pastaboxes);
    });


    friesbtn.addEventListener("click", function (e) {
        e.preventDefault();
        showCategory(friesboxes);
    });


    allbtn.addEventListener("click", function (e) {
        e.preventDefault();


        box1.innerHTML = "";
        box2.innerHTML = "";
        box3.innerHTML = "";


        box2.style.display = "flex";
        box3.style.display = "flex";


        allBoxes.forEach((b, i) => {
            b.classList.remove("hidden");
            b.classList.remove("show-effect");

            setTimeout(() => {
                b.classList.add("show-effect");
            }, i * 100);

            if (i < 3) box1.appendChild(b);
            else if (i < 6) box2.appendChild(b);
            else box3.appendChild(b);
        });
    });



  

    let options = document.querySelectorAll(".option-box ul li a");

options.forEach(option => {
    option.addEventListener("click", function (e) {
        e.preventDefault();

     
        options.forEach(o => {
            o.classList.remove("active");
            o.classList.remove("activecolor");
            o.classList.remove("allactive");
        });

        
        this.classList.add("active");
        this.classList.add("activecolor");
        this.classList.add("allactive");
    });
});


document.addEventListener("DOMContentLoaded", function () {
   
    const slides = [
        {
            message1: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam  sed <br>eaque velit, magnam debitis quaerat officiis quaerat cupiditate",
            name1: "Moana Michell",
            role1: "magna aliqua",
            image1: "images/customer-img1.jpg",

            message2: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam magnam repellendus sed eaque velit, magnam debitis quaerat officiis quaerat cupiditate",
            name2: "Moana Michell",
            role2: "magna aliqua",
            image2: "images/customer-img2.jpg"
        },
        {
            message1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, <br> repellat dolore. Amet ducimus illum vitae dolorem.",
            name1: "John Carter",
            role1: "Food Lover",
            image1: "images/customer-img2.jpg",

            message2: "Blanditiis fugiat sunt molestiae error officia. Dignissimos, nesciunt necessitatibus. Tempora sunt amet rem doloremque.",
            name2: "Emily Johnson",
            role2: "Traveler",
            image2: "images/customer-img1.jpg"
        },
        
    ];

    let index = 0;

    
    const reviewBox1 = document.querySelector(".review-box1");
    const reviewBox2 = document.querySelector(".review-box2");
    const img1 = document.querySelector(".customer-img1 img");
    const img2 = document.querySelector(".customer-img2 img");

    const h2_1 = reviewBox1.querySelector("h2");
    const h1_1 = reviewBox1.querySelector("h1");
    const h3_1 = reviewBox1.querySelector("h3");

    const h2_2 = reviewBox2.querySelector("h2");
    const h1_2 = reviewBox2.querySelector("h1");
    const h3_2 = reviewBox2.querySelector("h3");

    
    function showSlide(i) {
        const slide = slides[i];

        h2_1.innerHTML = slide.message1;
        h1_1.innerHTML = slide.name1;
        h3_1.innerHTML = slide.role1;
        img1.src = slide.image1;

        h2_2.innerHTML = slide.message2;
        h1_2.innerHTML = slide.name2;
        h3_2.innerHTML = slide.role2;
        img2.src = slide.image2;
    }

   
    document.querySelector(".right-btn").addEventListener("click", () => {
        index = (index + 1) % slides.length;
        showSlide(index);
    });

    
    document.querySelector(".left-btn").addEventListener("click", () => {
        index = (index - 1 + slides.length) % slides.length;
        showSlide(index);
    });

    
    showSlide(index);
});