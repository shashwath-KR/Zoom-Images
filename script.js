const card = document.querySelector(".card");
const left = document.querySelector("#left");
const right = document.querySelector("#right");
const imag = document.querySelectorAll(".imag");
const counts = document.querySelector("#counts");
const dot = document.querySelectorAll(".dot");

const Ary = ["https://wallpapercave.com/wp/wp2634897.jpg",
"https://backiee.com/static/wpdb/wallpapers/1920x1080/197554.jpg",
"https://wallpapercave.com/wp/wp2665204.jpg",
"https://wallpapertag.com/wallpaper/full/c/2/2/930719-nature-wallpaper-1600x900-1920x1200-hd.jpg",
"https://th.bing.com/th/id/R.6cf04282fa7d3744946d56099c183621?rik=J6jWCob7kf6YvA&pid=ImgRaw&r=0"]

  let count = 0;
  
  //left button event;
   left.addEventListener("click", (e) => {
  if(e.target.id === "left") {
    count--;
    if(count < 0) {
      count = Ary.length - 1;
    }

    counts.style.background = `url(${Ary[count]})`
    counts.style.backgroundSize = "110%"
    counts.style.backgroundPosition = "center"
    counts.addEventListener("mouseover", () => {
      counts.style.backgroundSize = "300%";
    })

    for(let i = 0; i < dot.length; i++) {
       dot[i].style.backgroundColor = "";
    }

    dot[count].style.backgroundColor = "black";
    }
 })

 //right button event

 right.addEventListener("click", (e) => {
  if(e.target.id === "right") {
    count++;
    if(count >= Ary.length) {
        count = 0;
    } 

    counts.style.background = `url(${Ary[count]})`
    counts.style.backgroundSize = "110%"
    counts.style.backgroundPosition = "center"
    
    counts.addEventListener("mouseover", () => {
      counts.style.backgroundSize = "300%";
    })

    for(let i = 0; i < dot.length; i++) {
       dot[i].style.backgroundColor = "";
    }

    dot[count].style.backgroundColor = "black";
    }
 })

//Zoom on point function;

const myFun = (e) => {
  let width = 500;
  let height = 300;

  let widthX = e.offsetX;
  let heightY = e.offsetY;
  
  let zoomX = widthX/width * 100;
  let zoomY = heightY/height * 100;
for(let i = 0; i < imag.length; i++) {
  imag[i].style.backgroundPosition = `${zoomX}% ${zoomY}%`
}
}


for(let i = 0; i < imag.length; i++) {
imag[i].addEventListener("mousemove", myFun, true);
}

for(let i = 0; i < imag.length; i++) {
imag[i].addEventListener("mouseleave", () => {
   imag[i].style.backgroundSize = "110%";
})
}


  
  const onDots = (num, prev) => {
    for(let i = 0; i < dot.length; i++) {
       dot[i].style.backgroundColor = "";
    }
    counts.style.background = `url(${Ary[num]})`
    counts.style.backgroundSize = "110%"
      counts.style.backgroundPosition = "center"

      prev.style.backgroundColor = "black";

      counts.addEventListener("mouseover", () => {
        counts.style.backgroundSize = "300%";
      })
  }

  dot[0].click()





