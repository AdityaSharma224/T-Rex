document.addEventListener('DOMContentLoaded',()=>{

const dino = document.querySelector('.dino') // to get the dino 
const grid = document.querySelector('.grid')
const body = document.querySelector('body')
const alert = document.querySelector('.alert')

let isJumping = false;
let gravity = 0.9;
let isgameover=false;

    function control(e){
        if(e.keyCode===32)
        {
            if(!isJumping){
                isJumping = true
                jump();
            }           // controls
        }
    }

 document.addEventListener('keyup',control) // initialize controler
 let position = 0
    function jump()
    { 
        let count = 0;
        let timeId = setInterval(function()
        {


            // move down
            if(count===15)
            {
                clearInterval(timeId);
                console.log('down')

                let downTimeId  = setInterval(function () {

                    if(count===0)
                    {
                        clearInterval(downTimeId)
                        isJumping = false;
                    }
                    position-=5
                    count--;
                    position=position*gravity
                    dino.style.bottom = position + 'px'
                },20)
               
            }


            // move up
           
            
            position+=30
            count++;
            position=position*gravity
            dino.style.bottom = position + 'px';
        },20)
    }


    function Genobst(){
        let obstPos = 1000
        let randomTime = Math.random()*4000
        const obst = document.createElement('div')
        if(!isgameover) obst.classList.add('obstacle')
        grid.appendChild(obst)
        obst.style.left = obstPos + 'px'


        let timeId = setInterval(function(){

            if(obstPos>0 && obstPos < 60 && position < 60)
            {
                clearInterval(timeId)
                alert.innerHTML = 'Tumse na Hopayga !'
                isgameover=true
               // body.removeChild(body.firstChild)
                while(grid.firstChild)
                {
                    grid.removeChild(grid.lastChild)
                }
            }
            obstPos-=10
            obst.style.left = obstPos + 'px'
        },20)
        if(!isgameover) setTimeout(Genobst,randomTime)
    }
    Genobst(); 
    
})