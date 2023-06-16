// index.js
export default function() {
    // All sections of the page
    const sections = document.querySelectorAll('.section');
    
    let currentSectionIndex = 0;
    
    // Function to scroll to a particular section
    const scrollToSection = (sectionIndex) => {
        const section = sections[sectionIndex];
        section.scrollIntoView({behavior: "smooth"});
    }
    
    // Function to determine the next section to scroll to
    const determineScroll = (e) => {
        if (e.deltaY > 0) { // Scroll Down
            if (currentSectionIndex < sections.length - 1) {
                currentSectionIndex++;
                scrollToSection(currentSectionIndex);
            }
        } else { // Scroll Up
            if (currentSectionIndex > 0) {
                currentSectionIndex--;
                scrollToSection(currentSectionIndex);
            }
        }
    }
    
    // Debounce function to limit the rate of execution of our scroll handler
    const debounce = (func, wait = 10, immediate = true) => {
        let timeout;
        return function() {
            const context = this, args = arguments;
            const later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };
    
    window.addEventListener('wheel', debounce(determineScroll, 100));
  }
  