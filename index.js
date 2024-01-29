//  Theme toggle
let initialTheme = 'light'
const theme = document.querySelector('.theme')
const root = document.getElementsByTagName( 'html' )[0]

const themeSVG = {
    'light' : `<svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon" viewBox="0 0 16 16">
    <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"/>
    </svg>
    <br>
    <p><span class="mobile-hidden">Night Mode</span></p>` ,
    'dark' : ` 
            <svg aria-hidden="true" focusable="false" viewBox="0 0 23 23 " width="16" height="16" fill="#f0f0f0" class="bi bi-sun" xmlns="http://www.w3.org/2000/svg" style='filter: invert(1);'>
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>sun_star [#1268]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-220.000000, -2519.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M166.929,2363.343 C166.538,2362.952 166.538,2362.319 166.929,2361.929 C167.32,2361.538 167.953,2361.538 168.343,2361.929 C168.734,2362.319 168.734,2362.952 168.343,2363.343 C167.953,2363.734 167.32,2363.734 166.929,2363.343 M181.071,2374.657 C181.462,2375.047 181.462,2375.68 181.071,2376.071 C180.681,2376.461 180.047,2376.461 179.657,2376.071 C179.266,2375.68 179.266,2375.047 179.657,2374.657 C180.047,2374.266 180.681,2374.266 181.071,2374.657 M168.343,2374.657 C168.734,2375.047 168.734,2375.68 168.343,2376.071 C167.953,2376.461 167.32,2376.461 166.929,2376.071 C166.538,2375.68 166.538,2375.047 166.929,2374.657 C167.32,2374.266 167.953,2374.266 168.343,2374.657 M181.071,2361.929 C181.462,2362.319 181.462,2362.952 181.071,2363.343 C180.681,2363.734 180.047,2363.734 179.657,2363.343 C179.266,2362.952 179.266,2362.319 179.657,2361.929 C180.047,2361.538 180.681,2361.538 181.071,2361.929 M166,2369 C166,2369.552 165.552,2370 165,2370 C164.448,2370 164,2369.552 164,2369 C164,2368.448 164.448,2368 165,2368 C165.552,2368 166,2368.448 166,2369 M184,2369 C184,2369.552 183.552,2370 183,2370 C182.448,2370 182,2369.552 182,2369 C182,2368.448 182.448,2368 183,2368 C183.552,2368 184,2368.448 184,2369 M175,2378 C175,2378.552 174.552,2379 174,2379 C173.448,2379 173,2378.552 173,2378 C173,2377.448 173.448,2377 174,2377 C174.552,2377 175,2377.448 175,2378 M173,2360 C173,2359.448 173.448,2359 174,2359 C174.552,2359 175,2359.448 175,2360 C175,2360.552 174.552,2361 174,2361 C173.448,2361 173,2360.552 173,2360 M174,2374 C171.243,2374 169,2371.757 169,2369 C169,2366.243 171.243,2364 174,2364 C176.757,2364 179,2366.243 179,2369 C179,2371.757 176.757,2374 174,2374 M174,2362 C170.134,2362 167,2365.134 167,2369 C167,2372.866 170.134,2376 174,2376 C177.866,2376 181,2372.866 181,2369 C181,2365.134 177.866,2362 174,2362" id="sun_star-[#1268]"> </path> </g> </g> </g> </g></svg>
            <p><span class="mobile-hidden">Light Mode</span></p>` ,

}


theme.addEventListener('click', () => {
    initialTheme = initialTheme === 'light' ? 'dark' : 'light'
    
    theme.innerHTML = themeSVG[initialTheme]
    root.className = initialTheme === 'light' ? 'light' : 'dark'
    // list of section with svg img icons
    document.querySelector('.technology-section').classList.toggle('dark')
    document.querySelector('.social-container').classList.toggle('dark')
})


//  Scroll Navbar events
let options = {
    root: null,
    rootMargin: "0px",
    threshold: [0,0.5,1],
  };

let observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry) => {
        const currentSelection = document.querySelector('#navi-'+entry.target.id)
        // console.log(currentSelection)
        
        if(entry.intersectionRatio === 0){
            currentSelection.className = 'inactive'
        } else if (entry.intersectionRatio > 0 && entry.intersectionRatio <0.75){
            currentSelection.className = 'visible'
        }else{
            currentSelection.className = 'active'
        }
        // console.log(entry.intersectionRatio)
       
    })
}, options)


const navEntry = document.querySelectorAll('.navigation-container ul li')
navEntry.forEach(e => {
    let locationID = e.firstChild.id.split('-').pop()
    let currentLocation = document.querySelector('#'+locationID + '-section')
    if(currentLocation){
        observer.observe(currentLocation)
    }

})








// Dialog for Creative Section
const illustModal = document.querySelector('#illust-Works')
const illustOpen = document.querySelector('#illust')
const illustClose = document.querySelector('#illust-close')
illustOpen.addEventListener('click', () => illustModal.showModal())
illustClose.addEventListener('click', () => illustModal.close())


const designModal = document.querySelector('#design-work')
const designOpen = document.querySelector('#design')
const designClose = document.querySelector('#design-close')
designOpen.addEventListener('click', () => designModal.showModal())
designClose.addEventListener('click', () => designModal.close())