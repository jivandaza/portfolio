const body = document.querySelector('body');

const nav = document.querySelectorAll('nav');
const logo = document.querySelectorAll(".logo");
const a = document.querySelectorAll('a');
const hamburgerIcon = document.querySelectorAll(".hamburger-icon span");
const li = document.querySelectorAll(".menu-links li");

const sectionList = document.querySelectorAll('section');
const title = document.querySelectorAll('.title');
const btnCurriculum = document.querySelector(".btn-curriculum");
const btnContact = document.querySelector(".btn-contact");
const icons = document.querySelectorAll(".icon i");

const btnMoon = document.querySelectorAll('.btn-theme.dark');
const btnSun = document.querySelectorAll(".btn-theme.white");

function toggleMenu() {
    document.querySelector('.menu-links').classList.toggle('open');
    document.querySelector('.hamburger-icon').classList.toggle('open');
}

function toggleTheme() {
    const elements = [
        body,
        btnCurriculum,
        btnContact
    ]

    elements.forEach(item => item.classList.toggle("active"));

    const elementsList = [
        nav,
        logo,
        a,
        hamburgerIcon,
        li,
        sectionList,
        title,
        icons,
        btnMoon,
        btnSun,
    ];

    elementsList.forEach((element) => {
        element.forEach((item) => item.classList.toggle("active"));
    });
}

function toggleThemeMenu() {
    toggleTheme();
    toggleMenu();
}