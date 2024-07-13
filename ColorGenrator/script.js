const display = document.getElementById('display')
const btn = document.getElementById('btn')
const box1 = document.getElementById('box1')
const copy = document.getElementById('copy')

btn.addEventListener('click', () => {
    let hexCode = '0123456789ABCDEF'
    let output = "";
    for (let i = 0, charSet = hexCode.length; i < 6; i++) {
        output += hexCode.charAt(Math.floor(Math.random() * charSet))
    }
    // console.log(output);
    display.innerHTML = `#${output}`
    box1.style.backgroundColor = `#${output}`
    btn.style.color = `#${output}`

})
// copyToClipboard
copy.addEventListener('click',(e)=>{
   let copied =  navigator.clipboard.writeText(display.innerHTML)
   alert('Copied')
    // if(copied == null){
    //     alert('not copied')
    // }
    // else{
    //     alert('Color Copied')
    // }
})



// RGB color generator

const rgb_btn = document.getElementById('rgb_btn')
const getRedInputRange = document.getElementById('red')
const getGreenInputRange = document.getElementById('green')
const getBlueInputRange = document.getElementById('blue')
const rgb_display = document.getElementById('rgb_display')
const box2 =document.getElementById('box2')
const rgb_copy =document.getElementById('rgb_copy')

rgb_btn.addEventListener('click', () => {
    let extractRedValue = getRedInputRange.value;
    let extractGreenValue = getGreenInputRange.value;
    let extractBlueValue = getBlueInputRange.value;
    
    // changing the background color
    let colors =`rgb(${extractRedValue} ${extractGreenValue} ${extractBlueValue})`
    box2.style.backgroundColor= `rgb(${extractRedValue} ${extractGreenValue} ${extractBlueValue})`
    
    rgb_btn.style.color =  `rgb(${extractRedValue} ${extractGreenValue} ${extractBlueValue})`
    rgb_display.innerHTML = `rgb(${extractRedValue}, ${extractGreenValue}, ${extractBlueValue})`
    rgb_display.style.backgroundColor = `rgb(${extractRedValue} ${extractGreenValue} ${extractBlueValue})`
    
})
 
rgb_copy.addEventListener('click',()=>{
    navigator.clipboard.writeText(rgb_display.innerHTML)
    alert('Copied')
})