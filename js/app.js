// const progress = document.querySelector('.progress-done');

// progress.style.width = progress.getAttribute('data-done') + '%';
// progress.style.opacity = 1;

let skillsection = document.getElementById("skill_section");
let progressBars = document.querySelectorAll(".progress-done") ;


function showProgress(){
    progressBars.forEach(progressBar=>{
        const value = progressBar.dataset.progress;

        progressBar.style.opacity = 1 ;
        progressBar.style.width = `${value}%`;
    })
}
function hideProgress(){
    progressBars.forEach(p=>{
        p.style.opacity = 0 ;
        p.style.width = 0 ;
    })
}
window.addEventListener('scroll', ()=>{
    const sectionPos = skillsection.getBoundingClientRect().top;
    const screenPos = window.innerHeight;

    if(sectionPos < screenPos){
        showProgress();
    }else{
        hideProgress();
    }
})


