let isInViewport = function(){
    const blocks = document.querySelectorAll('.reveal');
    let blocksArray = Array.from(blocks);
    const viewportHeight = window.innerHeight;
    for (let i = 0; i < blocksArray.length; i++){
    const blockTop = blocks[i].getBoundingClientRect().top;
    const blockBottom = blocks[i].getBoundingClientRect().bottom;
    if(blockTop < viewportHeight && blockBottom > 0){
        blocks[i].className = 'reveal reveal_active';
    } else {
        blocks[i].className = 'reveal';
    }
}
}; 
document.addEventListener('scroll', isInViewport);

