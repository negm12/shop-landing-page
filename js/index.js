var setting_gear = document.querySelector('.setting .gear');
setting_gear.onclick = ()=>{
    document.querySelector('.setting').classList.toggle('setting-toggle');
    document.querySelector('.fa-cog').classList.toggle('fa-spin');
}



var localcolor = localStorage.getItem('color_option');
var color_option = document.querySelectorAll('.setting .color-option li');
if(localStorage !== null){
    document.documentElement.style.setProperty('--main-color',localcolor);
    for(let color of color_option){
        color.classList.remove('active');
    }
    for(let color of color_option){
        if (localcolor === color.getAttribute('data-color')){
            color.classList.add('active');
        }
    }
    
}


color_option.forEach(c =>{
    var color = c.getAttribute('data-color');
    c.style.backgroundColor = color;

    c.onclick = ()=>{
        var main_color =  c.getAttribute('data-color');
        document.documentElement.style.setProperty('--main-color', main_color)
        localStorage.setItem('color_option', main_color );
        
        for(let color of color_option){
            color.classList.remove('active');
        }
        c.classList.add('active')
    }

});


var testi_car = document.querySelectorAll('.testimonials .carousel-indicators li');
testi_car.forEach(i =>{
    var data_image = i.getAttribute('data-image');
    i.style.backgroundImage = 'url("'+data_image+'")';
});


var counters = document.querySelectorAll('.footer li h2');

var up_button = document.querySelector('.up-button');
var footer = document.querySelector('.footer')
window.onscroll = ()=>{
    let followofsettop = footer.offsetTop;
    let followouterheight = footer.offsetHeight;
    let windowheight = this.innerHeight;
    let windowscrolltop = this.pageYOffset;
    if(windowscrolltop >= (followofsettop + followouterheight - windowheight -400)){
        counters.forEach(count =>{
            const update_function = ()=>{
                const progress = +count.getAttribute('data-follwo');
                const value = +count.innerHTML;
                const increment = Math.floor(progress/ 100);
                if(value < progress){
                    count.innerText = value + increment ;
                    setTimeout(update_function, 20);
                }
                else{
                    count.innerText = progress;
                }
            };
            update_function();
            
        });
    }
    else{
        counters.forEach(count =>{
            count.innerText = 0;

        });
    }

    if(windowscrolltop >= 600){
        up_button.style.opacity = '1'
    }
    else{
        up_button.style.opacity = '0'
    }

};

var links = document.querySelectorAll('.navigation-bar .links li .link')


links.forEach(l=>{
    
    // console.log(section)
    l.addEventListener("click", (e)=>{
        var section = l.getAttribute('data-section');
        document.querySelector(section).scrollIntoView({
            behavior:'smooth'

        });
    })

});

up_button.onclick = ()=>{
    document.querySelector('.header-area').scrollIntoView({
        behavior:'smooth'
    });
};


var input = document.querySelectorAll('.products .sales img');
console.log(input)
input.forEach(i=>{
    i.onclick = ()=>{
        i.classList.toggle('checked')
    }
})



