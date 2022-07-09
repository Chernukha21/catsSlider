// const catsSliderUrl = 'https://raw.githubusercontent.com/Chernukha21/catsSlider/master/cats.json';
const catsSliderUrl = 'https://raw.githubusercontent.com/Chernukha21/catsSlider/master/tigers.json';
fetch(catsSliderUrl)
    .then(response => response.json())
    .then(slides => {
        renderSlider('#slider', slides)
        //renderSlider('#slider2', slides)
    })
    .catch(e => console.log(e));

function renderSlider(root, slide_images) {
    if (!root.includes('#')) {
        throw new Error(`${root} should start with #`);
    }
    const sliderPicture = createTag('div');


    let currentSliderImageIndex = 0;
    const currentSlideImage = createTag('img');
    currentSlideImage.src = slide_images[currentSliderImageIndex];

    const prevButton = new Tag('span')
        .addClass('slide_button')
        .addText('previous')
        .addEvent('click', () => {
            if (currentSliderImageIndex <= 0) {
                currentSliderImageIndex = slide_images.length;
            }
            currentSliderImageIndex--;
            currentSlideImage.src = slide_images[currentSliderImageIndex];
        })
        .getTag()
    const nextButton = new Tag('span')
        .addClass('slide_button')
        .addClass('right_slider_button')
        .addText('next')
        .addEvent('click', () => {
            currentSliderImageIndex++;
            if (currentSliderImageIndex >= slide_images.length) {
                currentSliderImageIndex = 0;
            }
            currentSlideImage.src = slide_images[currentSliderImageIndex];
        })
        .getTag()

    const slider = document.querySelector(root);
    slider.append(currentSlideImage);
    slider.append(prevButton);
    slider.append(nextButton);

    function Tag(tagName) {
        this.tag = createTag(tagName);

        this.addClass = function (className) {
            this.tag.classList.add(className);
            return this;
        }
        this.addText = function (text) {
            this.tag.textContent = text;
            return this;
        };

        this.addEvent = function (eventName, callback) {
            this.tag.addEventListener(eventName, callback)
            return this;
        }

        this.getTag = function () {
            return this.tag;
        }

    }

    function createTag(tagName) {
        return document.createElement(tagName);
    }
}