const listOfImages = [
    {
        "source": "https://images.unsplash.com/photo-1561948955-570b270e7c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "title": "cat.jpeg"
    },
    {
        "source": "https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "title": "cooking couple shoot portofilio(1).jpg"
    },
    {
        "source": "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "title": "bali-kelingking-beach-plastic-removal-drive.key"
    },
    {
        "source": "https://images.unsplash.com/photo-1623206837956-07dab21608f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "title": "NextByk Investor Pitch 2021.ppt"
    },
    {
        "source": "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        "title": "interns-performance-report-june-2021.key"
    }
];

let mainList = document.querySelector(".imageList");
let mainImage = document.querySelector(".mainImage");
let captionForImage = document.querySelector(".captionForImage");


let displayIndex = 0; 

listOfImages.forEach((image,index) => {
    let listEntry = document.createElement("li");
    let imageEntry = document.createElement("img");
    let imageName = document.createElement("p");

    imageEntry.src = image.source;
    imageEntry.alt = image.title;

    let truncatedString = image.title;
    if(truncatedString.length > 25) {
        let prefix = truncatedString.slice(0,26);
        prefix += "....";
        prefix += truncatedString.slice(truncatedString.length - 9, truncatedString.length);
        truncatedString = prefix;
    }
    imageName.innerHTML = truncatedString;
    

    listEntry.append(imageEntry);
    listEntry.append(imageName);

    listEntry.addEventListener("click", () => {
        showImage(index);
    });
    mainList.append(listEntry);
});

showImage(0);


document.addEventListener("keydown", event => {
    if(event.key == "ArrowUp" && displayIndex > 0) showImage(displayIndex - 1);
    else if(event.key == "ArrowDown" && displayIndex < listOfImages.length - 1) showImage(displayIndex + 1);
})


function showImage(newIndex) {
    mainList.childNodes[displayIndex].classList.remove("active");
    mainList.childNodes[newIndex].classList.add("active");
    mainImage.src = listOfImages[newIndex].source;
    mainImage.alt = listOfImages[newIndex].title;
    captionForImage.innerHTML = listOfImages[newIndex].title;
    displayIndex = newIndex;
}