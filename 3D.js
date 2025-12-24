document.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
    
    document.querySelector('.circle-1').style.transform = `translate(${moveX}px, ${moveY}px)`;
    document.querySelector('.circle-2').style.transform = `translate(${-moveX}px, ${-moveY}px)`;
});