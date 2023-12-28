function redirectToErrorPageIfMobile() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Check for Android and iOS devices
    if (/android/i.test(userAgent) || /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        // Redirect to the error.html page if on Android or iOS
        window.location.href = 'error.html';
    } else {
        console.log("Non-mobile OS detected.");
        // Continue loading the page for non-mobile devices
    }
}

// Run the function when the page loads
redirectToErrorPageIfMobile();
