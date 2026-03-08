/* gallery auto-load */

const gallery=document.getElementById("gallery-grid")

const totalWorks=10

for(let i=1;i<=totalWorks;i++){

let div=document.createElement("div")
div.className="art"

let img=document.createElement("img")
img.src=`images/artworks/work${String(i).padStart(2,'0')}.webp`

let span=document.createElement("span")
span.innerText=`Totem ${i}`

div.appendChild(img)
div.appendChild(span)

gallery.appendChild(div)

}


/* viewer */

const viewer=document.getElementById("viewer")
const viewerImg=document.getElementById("viewer-img")

const closeBtn=document.querySelector(".close")
const left=document.querySelector(".left")
const right=document.querySelector(".right")

let images
let index=0

setTimeout(()=>{

images=document.querySelectorAll(".art img")

const list=[...images]

list.forEach((img,i)=>{

img.onclick=()=>{
viewer.style.display="flex"
viewerImg.src=img.src
index=i
document.body.style.overflow="hidden"
}

})

right.onclick=()=>{
index++
if(index>=list.length) index=0
viewerImg.src=list[index].src
}

left.onclick=()=>{
index--
if(index<0) index=list.length-1
viewerImg.src=list[index].src
}

})

closeBtn.onclick=()=>{
viewer.style.display="none"
document.body.style.overflow="auto"
}


/* burger menu */

const burger=document.getElementById("burger")
const nav=document.getElementById("nav")

burger.onclick=()=>{
nav.classList.toggle("show")
}
