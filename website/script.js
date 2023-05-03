
console.log("Script running...")
document.querySelector('.cross_icon').style.display = 'none';
document.querySelector('.icon').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('nav_on');
    if(document.querySelector('.sidebar').classList.contains('nav_on')) 
    {
        document.querySelector('.nav_icon').style.display = 'inline'
        document.querySelector('.cross_icon').style.display = 'none'
    }
    else{
        document.querySelector('.nav_icon').style.display = 'none'
        setTimeout(() => {
            
            document.querySelector('.cross_icon').style.display = 'inline'
        }, 300);
    }
})

// ----------------------------------------------------------------
