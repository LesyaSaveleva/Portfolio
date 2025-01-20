const ACTIVE_SLIDE_CLASSNAME = 'project__slide_active';
const ACTIVE_BTN_CLASSNAME = 'btn__active';
const ACTIVE_PROJECTS_CLASSNAME = 'projects-active'

const slidesNodes = Array.from(document.querySelectorAll('.project-js'));
console.log(slidesNodes);
const prevButtonNode = document.querySelector('.controls_prev-js');
const nextButtonNode = document.querySelector('.controls_next-js');
const botButtonNode = document.querySelector('.bots_btn-js');
const websiteButtonNode = document.querySelector('.website_btn-js');
const botSlideNode = document.querySelector('.bots-js');
const websiteSlideNode = document.querySelector('.website-js');

let activeId;

init();

botButtonNode.addEventListener('click', () => {
    botButtonNode.classList.add(ACTIVE_BTN_CLASSNAME);
    websiteButtonNode.classList.remove(ACTIVE_BTN_CLASSNAME);
    botSlideNode.classList.add(ACTIVE_PROJECTS_CLASSNAME);
    websiteSlideNode.classList.remove(ACTIVE_PROJECTS_CLASSNAME);
});

websiteButtonNode.addEventListener('click', () => {
    websiteButtonNode.classList.add(ACTIVE_BTN_CLASSNAME);
    botButtonNode.classList.remove(ACTIVE_BTN_CLASSNAME);
    websiteSlideNode.classList.add(ACTIVE_PROJECTS_CLASSNAME);
    botSlideNode.classList.remove(ACTIVE_PROJECTS_CLASSNAME);
})

function init() {
    activeId = 0;
    
    prevButtonNode.addEventListener('click', () => {
        setActiveSlideById(getPrevId());
    });
    
    nextButtonNode.addEventListener('click', () => {
        setActiveSlideById(getNextId());
    });
}

function setActiveSlideById(id) {
    const currentId = activeId;
    activeId = id;

    slidesNodes[currentId].classList.remove(ACTIVE_SLIDE_CLASSNAME)
    slidesNodes[activeId].classList.add(ACTIVE_SLIDE_CLASSNAME)
}

function getPrevId() {
    return activeId === 0 ? slidesNodes.length - 1 : activeId - 1;
}

function getNextId() {
    return activeId === (slidesNodes.length - 1) ? 0: activeId + 1;
}