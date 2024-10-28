import './index.css'
// import jpg from './images/image.jpg'
document.addEventListener ("DOMContentLoaded", function(){
    const container = document.querySelector (".cursor-trail");
    let imageIndex = 1;
    let animationTimeout = null;
    let currenlyPlaying = false;

    function addNewItem(x, y) {
        let newItem = document.createElement("div");
        document.createElement ("div");
        newItem.className = "item";
        newItem.style.left = `${x - 75}px`;
        newItem.style.top = `${y - 100}px`;

        const img = document.createElement("img");
        img.src = `./src/images/animatiom_try${imageIndex}.jpg`;
        newItem.appendChild(img);
        imageIndex = (imageIndex % 15) + 1;

        container.appendChild(newItem);
        manageItemLimit();
    }

    function manageItemLimit() {
        while (container.children.length > 20) {
            container.removeChild(container.firstChild);
        }
    }

    function startAnimation() {
        if (currenlyPlaying || container.children.length === 0) return;
        currenlyPlaying = true;

        gsap.to(".item", {
            y: 1000,
            scale: 0.5,
            opasity: 0,
            duration: 0.5,
            stagger: 0.025,
            onComplete: function() {
                this.targets().forEach((item) => {
                    if (item.parentNode) {
                        item.parentNode.removeChild(item);
                    }
                });

                currenlyPlaying = false;
            },
        });
    }
    container.addEventListener ("mousemove", function(event){
        clearTimeout (animationTimeout);
        addNewItem(event.pageX, event.pageY);
        animationTimeout = setTimeout (startAnimation, 100);

    });

});