let map = new Map();
map.set('cat.jpeg',"https://images.unsplash.com/photo-1561948955-570b270e7c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80");
map.set('cooking couple shoot portofilio(1).jpg',"https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80");
map.set('bali-kelingking-beach-plastic-removal-drive.key',"https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80");
map.set('NextByk Investor Pitch 2021.ppt',"https://images.unsplash.com/photo-1623206837956-07dab21608f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80");
map.set('interns-performance-report-june-2021.key',"https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80");


//const temp = document.querySelector(".imageList");
// const imageContent = `
// <img style = "width : 25%; height : 90%"
// src = "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt = "anything">
// `;
// temp.innerHTML = imageContent;
// temp.innerHTML = `
// <img style = "width : 25%; height : 90%"
// src = "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt = "anything">
// `

// const content =  `
// <img style = "width : 25%; height : 90%"
// src = "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt = "anything">
// `;

// const newArticle = document.createElement("div");
// newArticle.innerHTML = content;

// temp.append(newArticle);


const main = document.querySelector(".targetForImages");
globalImageName = '';

function showImage(event, imageName) {
    imageSource = map.get(imageName);
    globalImageName = imageName;
    console.log(imageName);
    console.log(imageSource);
    const imageContent = `
        <img class = "tempImage" src = ${imageSource} alt = ${imageName}>;
    `;
    main.innerHTML = imageContent;
}

// function checkkey(e) {
//     if(e.keycode = '38'){
//         if(globalImageName = 'cat.jpeg'){
//             imageSource = "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80";
//             //imageSource = "https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80";
//             globalImageName = "interns-performance-report-june-2021.key";
//             const imageContent = `
//                 <img class = "tempImage" src = ${imageSource} alt = ${globalImageName}>;
//             `;
//             main.innerHTML = imageContent;
//         }
//         else if(globalImageName = 'cooking couple shoot portofilio(1).jpg'){
//             imageSource = "https://images.unsplash.com/photo-1561948955-570b270e7c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80";
//             //imageSource = "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80";
//             globalImageName = "cat.jpeg";
//             const imageContent = `
//                 <img class = "tempImage" src = ${imageSource} alt = ${globalImageName}>;
//             `;
//             main.innerHTML = imageContent;
//         }
//         else if(globalImageName = 'bali-kelingking-beach-plastic-removal-drive.key'){
//             imageSource = "https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80";
//             globalImageName = "cooking couple shoot portofilio(1).jpg";
//             const imageContent = `
//                 <img class = "tempImage" src = ${imageSource} alt = ${globalImageName}>;
//             `;
//             main.innerHTML = imageContent;
//         }
//         else if(globalImageName = 'NextByk Investor Pitch 2021.ppt'){
//             imageSource = "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80";
//             globalImageName = "bali-kelingking-beach-plastic-removal-drive.key";
//             const imageContent = `
//                 <img class = "tempImage" src = ${imageSource} alt = ${globalImageName}>;
//             `;
//             main.innerHTML = imageContent;
//         }
//         else if(globalImageName = 'interns-performance-report-june-2021.key'){
//             imageSource = "https://images.unsplash.com/photo-1623206837956-07dab21608f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80";
//             globalImageName = "NextByk Investor Pitch 2021.ppt";
//             const imageContent = `
//                 <img class = "tempImage" src = ${imageSource} alt = ${globalImageName}>;
//             `;
//             main.innerHTML = imageContent;
//         }
//     }
//     else if(e.keycode = '40'){
//         if(globalImageName = 'cat.jpeg'){
//             imageSource = "https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80";
//             globalImageName = "cooking couple shoot portofilio(1).jpg";
//             const imageContent = `
//                 <img class = "tempImage" src = ${imageSource} alt = ${globalImageName}>;
//             `;
//             main.innerHTML = imageContent;
//         }
//         else if(globalImageName = 'cooking couple shoot portofilio(1).jpg'){
//             imageSource = "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80";
//             globalImageName = "bali-kelingking-beach-plastic-removal-drive.key";
//             const imageContent = `
//                 <img class = "tempImage" src = ${imageSource} alt = ${globalImageName}>;
//             `;
//             main.innerHTML = imageContent;
//         }
//         else if(globalImageName = 'bali-kelingking-beach-plastic-removal-drive.key'){
//             imageSource = "https://images.unsplash.com/photo-1623206837956-07dab21608f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80";
//             globalImageName = "NextByk Investor Pitch 2021.ppt";
//             const imageContent = `
//                 <img class = "tempImage" src = ${imageSource} alt = ${globalImageName}>;
//             `;
//             main.innerHTML = imageContent;
//         }
//         else if(globalImageName = 'NextByk Investor Pitch 2021.ppt'){
//             imageSource = "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80";
//             globalImageName = "interns-performance-report-june-2021.key";
//             const imageContent = `
//                 <img class = "tempImage" src = ${imageSource} alt = ${globalImageName}>;
//             `;
//             main.innerHTML = imageContent;
//         }
//         else if(globalImageName = 'interns-performance-report-june-2021.key'){
//             imageSource = "https://images.unsplash.com/photo-1561948955-570b270e7c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80";
//             //imageSource = "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80";
//             globalImageName = "cat.jpeg";
//             const imageContent = `
//                 <img class = "tempImage" src = ${imageSource} alt = ${globalImageName}>;
//             `;
//             main.innerHTML = imageContent;
//         }
//     }
//     else{
//         imageSource = map.get(globalImageName);
//         const imageContent = `
//                 <img class = "tempImage" src = ${imageSource} alt = ${globalImageName}>;
//             `;
//             main.innerHTML = imageContent;
//     }
// }

// document.addEventListener("click", checkkey);

//document.getElementById("image1").addEventListener('upclick',)
// document.getElementById("image1").onclick = function checkKey(e) {
//     imageSource = map.get('cooking couple shoot portofilio(1).jpg');
//     if(e.keycode == '40'){
//         const imageContent = `
//         <img class = "tempImage" src = ${imageSource} alt = ${imageName}>;
//     `;
//     main.innerHTML = imageContent;
//     }

// }

// document.getElementById("image2").onkeydown = function checkKey(e) {
    
//     if(e.keycode == '40'){
//         console.log("Hi param");
//         imageName = 'bali-kelingking-beach-plastic-removal-drive.key';
//         imageSource = map.get('bali-kelingking-beach-plastic-removal-drive.key');
//         const imageContent = `
//         <img class = "tempImage" src = ${imageSource} alt = ${imageName}>;
//     `;
//     main.innerHTML = imageContent;
//     }
//     else if(e.keycode == '38'){
//         console.log("Hi param modi");
//         imageName = 'cat.jpeg';
//         imageSource = map.get('cat.jpeg');
//         const imageContent = `
//         <img class = "tempImage" src = ${imageSource} alt = ${imageName}>;
//     `;
//     main.innerHTML = imageContent;
//     }
//     else {
//         console.log("Hi here");
//         imageName = 'cooking couple shoot portofilio(1).jpg';
//         imageSource = map.get('cooking couple shoot portofilio(1).jpg');
//         const imageContent = `
//         <img class = "tempImage" src = ${imageSource} alt = ${imageName}>;
//     `;
//     main.innerHTML = imageContent;
//     }
// }
