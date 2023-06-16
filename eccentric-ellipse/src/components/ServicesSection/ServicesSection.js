var angle = 0;
var index = 0;

const techDetails = {
    TypeScript: {
        title: "TypeScript - Superset of JavaScript for Static Typing",
        description:
            "As a web designer, I utilize TypeScript to create robust and error-free code. Its static typing allows for better tooling, documentation, and optimal performance. This directly translates to improved reliability and maintainability of your business website."
    },
    NodeJS: {
        title: "Node.js - JavaScript Runtime for Server-Side Programming",
        description:
            "With Node.js, I can extend the functionality of your website beyond the frontend. This enables creating real-time web applications like collaborative tools and chatrooms. It's a one-stop-shop for both client and server-side web development."
    },
    astro: {
        title: "Astro - Faster Frontend for Modern Websites",
        description:
            "By using Astro, I am able to deliver faster, SEO-friendly websites. Astro allows us to write less JavaScript while still having the interactive capabilities of modern websites, improving both performance and user experience."
    },
    Docker: {
        title: "Docker - Containerization for Easy Deployment and Scalability",
        description:
            "Docker ensures that your website works seamlessly in any environment. This tool allows me to package the website with all the parts it needs, such as libraries and dependencies, and ship it all out as one package. It helps in providing consistency across multiple development and production environments."
    },
    GIT: {
        title: "GIT - Version Control for Collaborative Projects",
        description:
            "I use GIT for version control, which allows tracking changes in your website code over time. It helps in coordinating work among programmers and keeping a history of code changes. This ensures I can revert back to an older version if something goes wrong in the future."
    },
    CPP: {
        title: "C++ - Powerful Language for Performance-Critical Code",
        description:
            "While less commonly used in web design, C++ enables me to integrate performance-critical parts to your website. Its powerful and flexible capacity can handle complex computations while providing faster execution."
    },
    Angular: {
        title: "Angular - Full-Featured Framework for Web Applications",
        description:
            "Angular is a platform for building web applications. I leverage its ability to create rich, single-page applications with a clean, maintainable structure. Its two-way data binding and dependency injection eliminate much of the code you currently have to write, making your website easier to understand and develop."
    },
    REACT: {
        title: "React.js - Efficient, Scalable, and Powerful JavaScript library",
        description:
            "React enables me to build your website's user interface in a more efficient and flexible way. It improves the website's speed and performance, offering a smooth user experience. Its component-based architecture provides easy codebase maintenance and reuse, making your website easy to scale and enhance in the future."
    },
};

const spinner = document.getElementById('spinner');
const images = spinner.getElementsByTagName('img');

const updateDetails = (tech) => {
    const techInfo = techDetails[tech];
    document.getElementById('title').innerText = techInfo.title;
    document.getElementById('techDescription').innerText = techInfo.description;
}


const gallerySpin = (sign) => {

    if (!sign) {
        angle = angle + 45;
        index = (index + 1) % images.length;
    } else {
        angle = angle - 45;
        index = (index - 1 + images.length) % images.length;
    }

    spinner.setAttribute("style", "-webkit-transform: rotateY(" + angle + "deg); -moz-transform: rotateY(" + angle + "deg); transform: rotateY(" + angle + "deg);");

    styleInActive(images);
    styleActive(images[index]);
    updateDetails(images[index].alt);
}


const styleActive = (imageObject) => {
    const parent = imageObject.parentNode;
    imageObject.style.opacity = 1;
    parent.style.borderRadius = '50%';
    parent.style.boxShadow = '0px 0px 20px rgba(0, 0, 0, 0.4)';
    parent.style.backgroundColor = 'rgba(255, 255, 255)';
}

const styleInActive = (images) => {
    Array.from(images).forEach(image => {
        const parent = image.parentNode;
        image.style.opacity = 0.1;
        parent.style.boxShadow = 'none';
        parent.style.backgroundColor = 'transparent';
        parent.style.borderRadius = '0';
    });
}

styleActive(images[0]);
updateDetails(images[0].alt);

const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');

leftButton.addEventListener('click', function () {
    gallerySpin('-');
});

rightButton.addEventListener('click', function () {
    gallerySpin('');
});
