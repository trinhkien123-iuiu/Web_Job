// Scroll Animation Handler
// Animates elements with 'scroll-animate' class when they come into view

document.addEventListener('DOMContentLoaded', function() {
    // Get all elements that should be animated
    const animateElements = document.querySelectorAll('.scroll-animate, .scroll-animate-stagger');
    
    // If no elements found, return early
    if (animateElements.length === 0) {
        return;
    }
    
    // Options for Intersection Observer
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of element is visible
    };
    
    // Callback function for Intersection Observer
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add 'animate' class when element is in view
                entry.target.classList.add('animate');
                // Optionally stop observing after animation (for performance)
                // observer.unobserve(entry.target);
            }
        });
    };
    
    // Create Intersection Observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe all elements
    animateElements.forEach(element => {
        observer.observe(element);
    });
    
    // Also handle dynamically added elements (like product items)
    // This is useful for product lists that are generated dynamically
    const productList = document.getElementById('product-list');
    if (productList) {
        // Watch for new product items being added
        const productObserver = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                mutation.addedNodes.forEach(function(node) {
                    if (node.nodeType === 1) { // Element node
                        // Check if the added node or its children have scroll-animate class
                        const newElements = node.querySelectorAll ? node.querySelectorAll('.scroll-animate') : [];
                        if (node.classList && node.classList.contains('scroll-animate')) {
                            observer.observe(node);
                        }
                        newElements.forEach(el => observer.observe(el));
                    }
                });
            });
        });
        
        // Start observing product list for changes
        productObserver.observe(productList, {
            childList: true,
            subtree: true
        });
    }
});
