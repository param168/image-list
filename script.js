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


let globalImageId = 0;

window.addEventListener("keydown", (event) => {
    if(event.key == "ArrowUp" && globalImageId > 0) showImage(globalImageId - 1);
    else if(event.key == "ArrowDown" && globalImageId < listOfImages.length - 1) showImage(globalImageId + 1);
});


listOfImages.forEach((item,index) => {
    let imageUrl =  item["source"];
    let imageName = item["title"];

    let listEntry = document.createElement("li");

    let smallImage = document.createElement("img");
    smallImage.src = imageUrl;
    smallImage.alt = imageName;

    let imageCaption = document.createElement("p");
    imageCaption.innerText = imageName;

    listEntry.append(smallImage);
    listEntry.append(imageCaption);

    listEntry.addEventListener("click", () => {
        showImage(index);
    });
    const imageList = document.querySelector(".imageList");
    imageList.append(listEntry);
});


const showImage = function (imageId) {
    let imageMenu = document.querySelector(".imageList");
    
    let currentImage = imageMenu.childNodes[globalImageId];
    currentImage.classList.remove("current");

    let newImage = imageMenu.childNodes[imageId];
    newImage.classList.add("current");

    document.querySelector(".display").src = listOfImages[imageId]["source"];
    document.querySelector(".display").alt = listOfImages[imageId]["title"];
    document.querySelector(".caption").innerText = listOfImages[imageId]["title"];
    globalImageId = imageId;
};

showImage(0);





