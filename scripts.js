// JavaScript for changing content on button click
var currentIndex = 0;
var contents = [
    {
        heading: "WELCOME TO MASSIVE INTERNATIONAL SERVICES",
        paragraph: "Your full sercurity is here",
        linkText: "Learn More",
        linkUrl: "#about",
        backgroundImage: "url('images/security')"
    },
    {
        heading: "WELCOME TO MASSIVE INTERNATIONAL SERVICES",
        paragraph: "Reliable Protection, Access, Monitoring and Survelliance",
        linkText: "Learn More",
        linkUrl: "#about",
        backgroundImage: "url('images/snifferdog.jpg')"
    },
    // Add more content objects as needed
];

function changeContent(delta) {
    currentIndex += delta;
    if (currentIndex < 0) {
        currentIndex = contents.length - 1;
    } else if (currentIndex >= contents.length) {
        currentIndex = 0;
    }

    var currentContent = contents[currentIndex];
    document.getElementById("heading").innerText = currentContent.heading;
    document.getElementById("heading").style.color = "#ffc800;"; 
    document.getElementById("paragraph").innerText = currentContent.paragraph;
    document.getElementById("paragraph").style.color = "white"; 
    document.getElementById("link").innerText = currentContent.linkText;
    document.getElementById("link").href = currentContent.linkUrl;
    document.getElementById("masthead").style.backgroundImage = currentContent.backgroundImage;
}

// Initialize content
changeContent(0);