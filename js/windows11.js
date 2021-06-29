let dockbar = document.getElementById("dockbar");
let startmenueicon =  document.getElementById("startmenu");
let chromeicon = document.getElementById("chrome");
let storewindow = document.getElementById("storewindow");


chromeicon.addEventListener('click',()=>{

    if(storewindow.style.top == "13%"){
        storewindow.style.top = "120%";
    }else{
        storewindow.style.top = "13%";
    }
})

dockbar.addEventListener('click', ()=>{

    if(startmenueicon.style.top == "13%"){
        startmenueicon.style.top = "120%";
    }else{
        startmenueicon.style.top = "13%";
    }
    console.log("clicked");
} )
