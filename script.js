function getdate (){
     let date= new Date()
     let hour =date.getHours()
     let miniute=date.getMinutes()
     let second=date.getSeconds()
     document.getElementById('clock').innerHTML=hour+':'+ miniute+':' + second

    }
    setInterval(getdate,1000)
    var slideIndex=1;
    showslides(slideIndex)
    function controlslider(n){
        slideIndex+=n
        showslides(slideIndex)
    }
    function dotslides(n){
        slideIndex=n
        showslides(slideIndex)
    }
    function showslides(n){
        let i;
        const slides=document.getElementsByClassName("slider")
        const dots=document.getElementsByClassName("dot")
        if(n==5){
            slideIndex=1
        }
        if(n==0){
            slideIndex=slides.length
        }
        for(let i=0;i<slides.length;i++){
            slides[i].style.display='none';
        }
        for(let index=0;index<dots.length;index++){
            dots[index].className=dots[index].className.replace("active","")
        }
        slides[slideIndex-1].style.display='block'
        dots[slideIndex-1].className+=" active"

    }
    









