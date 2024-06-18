let photoSlideShow = {
    photoList: ["ph1.jpg", "ph2.jpg", "ph3.jpg"],
    currentPhotoIndex: 0,

    displayCurrentPhoto: function() {
        if (this.photoList.length === 0) {
            return "No photos in the list.";
        }
        return `Currently displaying: ${this.photoList[this.currentPhotoIndex]}`;
    },

    nextPhoto: function() {
        if (this.currentPhotoIndex < this.photoList.length - 1) {
            this.currentPhotoIndex++;
        } else {
            this.currentPhotoIndex = 0;
        }
        return this.displayCurrentPhoto();
    },

    prevPhoto: function() {
        if (this.currentPhotoIndex > 0) {
            this.currentPhotoIndex--;
        } else {
            this.currentPhotoIndex = this.photoList.length - 1;
        }
        return this.displayCurrentPhoto();
    }
};

console.log(photoSlideShow.displayCurrentPhoto());
console.log(photoSlideShow.nextPhoto());
console.log(photoSlideShow.prevPhoto());