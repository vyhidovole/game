let but1= document.getElementById('but1')
let but2= document.getElementById('but2')
let but3= document.getElementById('but3')
let pic1 = document.getElementById('pic1')

but1.onclick = function(){
    human='k'
    humturn('камень')
}
but2.onclick = function(){
    human='n'
    humturn('ножницы')
}
but3.onclick = function(){
    human='b'
    humturn('бумага')
}

const variant = ['k','n','b']
const win = ['kn','nb','bk']
const loose = ['kb','nk','bn']
let human =''
let comp =''
let pobeda =''


function humturn(turn){
    console.log('вы выбрали',turn)
    compturn()

}



function compturn() {
    let r= Math.floor(Math.random()*3)
    console.log('комп выбрал',variant[r])
    // compturn()
    comp=variant[r]
    result()

}

function result(){
    console.log(human,comp)
    let res=human+comp
    if(win.includes(res)){
        console.log('вы выиграли')
        pobeda='вы выиграли'
        pic1.setAttribute('src', 'img/pic1.png')
        
    }
    else if(loose.includes(res)){
        console.log('вы проиграли')
        pobeda='вы проиграли'
        pic1.setAttribute('src', 'img/pic2.png')
       
    }
    else {
        console.log('ничья')
        pobeda='ничья'
        pic1.setAttribute('src', 'img/pic3.png')
        


    }
    
    out.innerText = pobeda

}



