const colorChangeButton = document.querySelector("#changeBgColor");

colorChangeButton.addEventListener('click',function(){

    let [newColor,rgbTotal] = changeBgColor();
    console.log(newColor);
    console.log(rgbTotal);
    document.body.style.backgroundColor = newColor;
    document.querySelector("#bgColor").innerText = newColor;

    if (rgbTotal < 192){
        document.querySelector("#whiteMention").innerText = 'White font applied';
        document.querySelector("#bgColor").style.color = 'white';
        document.querySelector("h1").style.color = 'white';
        for (divItem of document.querySelectorAll("div")){
            divItem.style.color = 'white'; 
        }
    }
    else{
        document.querySelector("#whiteMention").innerText = ''; 
        document.querySelector("#bgColor").style.color = 'black';
        document.querySelector("h1").style.color = 'black';
        document.querySelector("div").style.color = 'black';    
        for (divItem of document.querySelectorAll("div")){
            divItem.style.color = 'black'; 
        }           
    }
});

function changeBgColor (){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let newColor = `rgb(${r}, ${g}, ${b})`;
    let totalRGB = r+g+b;
    console.log([newColor,totalRGB]);
    return([newColor,totalRGB]);
}