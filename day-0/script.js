const listItems = document.querySelectorAll("li"); //1. Select 

function toggleDone(e) {

    e.currentTarget.classList.toggle("done"); //3. Act

}

listItems.forEach((item) => {

    item.addEventListener("click", toggleDone); // 2. Listner

});


const myHeading = document.querySelector("h1"); //1. Select

myHeading.textContent = "Gaurav's Lamborghini!" //3. Act

// Adding an image changer

const img_1 = document.querySelector("img"); //1. Select

img_1.addEventListener("click", () => {   //2. Listen

    const mySrc = img_1.getAttribute("src");

    //3. Act

    if (mySrc.includes("lambo.webp")) {
        img_1.setAttribute("src", "lambo1.jpg");
    }

    else {
        img_1.setAttribute("src", "lambo.webp");
    }
});


