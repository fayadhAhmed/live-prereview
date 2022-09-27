/* work place */ 

uploadImageInput.addEventListener("change",function () {

    // clean image contenier from upload file before add or change upload file
    removeAllChildNodes(livePreviewImageContainer);

    // loop oover return values from uploadImages to create and append images
    uploadIamge().forEach(image => {

            createImageTag(image.url, divStyle, imageStyle);
    });
})

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};

function uploadIamge() {
    
    // it oject return upload file with information about upload files or file
    let uploadFiles = uploadImageInput.files;
    let images = [];

    // loop oject to get sigle file 
    for (const file of uploadFiles) {

        // it is varible image that have id for delete and url to display it
        let image = {};
        image.url = URL.createObjectURL(file);

        images.push(image);

    }

    return images;
    

}
/*
ImageURL = url it url given by uploadIamge() function(no need to get one by your self)
divStyle = it array to style the div contan image how should an array be like ["class", "class",]
mageStyle = it array to style the image how should an array be like ["class", "class",]
*/



function createImageTag(ImageURL, divStyle, imageStyle) {

    //create elements
    let divTag = document.createElement("div");
    let imageTag = document.createElement("img");

    // add styles
    divTag.classList = divStyle.join(' ');
    imageTag.classList = imageStyle.join(' ');

    // adding values
    imageTag.src = ImageURL;

    // append
    divTag.appendChild(imageTag);
    livePreviewImageContainer.appendChild(divTag);

    
}





