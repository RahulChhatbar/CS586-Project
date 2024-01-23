/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
    document.getElementById("main").style.cssText = "opacity: 0.75; transition: opacity 0.5s ease";
    document.body.style.cssText = "background: radial-gradient(farthest-side at -33.33% 50%, #0000 52%, rgba(10, 106, 64, 0.75) 54% 57%, #0000 59%),radial-gradient(farthest-side at 50% 133.33%, #0000 52%, rgba(10, 106, 64, 0.75) 54% 57%, #0000 59%),radial-gradient(farthest-side at 133.33% 50%, #0000 52%, rgba(10, 106, 64, 0.75) 54% 57%, #0000 59%) 0 100px,radial-gradient(farthest-side at 50% -33.33%, #0000 52%, rgba(10, 106, 64, 0.75) 54% 57%, #0000 59%) 100px 0,rgba(103, 145, 122, 0.85); background-size: calc(200px * 3/14) 200px, 200px calc(200px * 3/14); transition: background 0.25s ease";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.opacity = "1";
    document.getElementById("main").style.transition = "opacity 0.5s ease";
    document.body.style.cssText = "background: radial-gradient(farthest-side at -33.33% 50%, #0000 52%, rgba(10, 106, 64, 1) 54% 57%, #0000 59%),radial-gradient(farthest-side at 50% 133.33%, #0000 52%, rgba(10, 106, 64, 1) 54% 57%, #0000 59%),radial-gradient(farthest-side at 133.33% 50%, #0000 52%, rgba(10, 106, 64, 1) 54% 57%, #0000 59%) 0 100px,radial-gradient(farthest-side at 50% -33.33%, #0000 52%, rgba(10, 106, 64, 1) 54% 57%, #0000 59%) 100px 0,rgba(103, 145, 122, 1); background-size: calc(200px * 3/14) 200px, 200px calc(200px * 3/14); transition: background 0.25s ease";   
}
