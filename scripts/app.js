//IF YOU ARE SEEING THIS, I KNOW THIS IS HORRIBLE AND IM SORRY FOR IT. BUT IN THE GOOD SIDE, IT MAKES THE HTML LESS UGLY.

// Scrolls managment in the sidebar

const sidebarLinks = document.querySelectorAll('.SectionsName');

// For each element in this case a p with the class .SectionName add a onclick event that scrolls into the section that match the attribute
sidebarLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();

    const targetId = link.getAttribute('href');

    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Redirecting navegation bar to links

const GITHUB_ICON = document.getElementById('id-githubIcon');

GITHUB_ICON.addEventListener('click', function() {
    window.open('https://github.com/trashfacu');
})

const LINKEDIN_ICON = document.getElementById('id-linkedinIcon');

LINKEDIN_ICON.addEventListener('click', function() {
    window.open('https://www.linkedin.com/in/facundo-mazziotti-27b713223/');
})

// TODO
// ADD A WINDOW WHEN CLICKING THE MAIL ICON TO SEND A MAIL TO ME