const vertical = document.querySelector('.vertical');
const horizontal = document.querySelector('.horizontal');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

addEventListener('load', () => {
    const targetRect = target.getBoundingClientRect();
    const targetHalfWidth = targetRect.width / 2;
    const targetHalfHight = targetRect.height / 2;


    document.addEventListener('mousemove', (event) => {
        const x = event.clientX;
        const y = event.clientY;

        // move element -> layout 부터 변경되니까 translate 사용해서 composite만 변경될 수 있도록 바꿔주는 것이 좋음
        // vertical.style.left = `${x}px`;
        // horizontal.style.top = `${y}px`;
        vertical.style.transform = `translateX(${x}px)`;
        horizontal.style.transform = `translateY(${y}px)`;

        // target.style.left = `${x}px`;
        // target.style.top = `${y}px`;
        target.style.transform = `translate(${x - targetHalfWidth}px, ${y - targetHalfHight}px)`;
        // tag.style.left = `${x}px`;
        // tag.style.top = `${y}px`;
        tag.style.transform = `translate(${x}px, ${y}px)`;


        // target innerText
        tag.innerHTML = `${x}px, ${y}px`;
        tag.style.transform = `transform(${x + 20}px, ${y + 20}px)`
        
    });

})