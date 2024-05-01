
let search_select = document.querySelector(".search-select")

function addClickedClass(element) {
    element.classList.add('bar-border');
    search_select.classList.add('bar-border');
    document.addEventListener("click", function(event) {
        if (!element.contains(event.target)) {
            element.classList.remove('bar-border');
            search_select.classList.remove('bar-border');
        }
    });
}

search_select.addEventListener("click" ,(event) =>{
    event.target.classList.add("bar-border");
    event.stopPropagation();
    document.addEventListener("click" ,function(e) {
      if(!event.target.contains(e.target)){
        event.target.classList.remove("bar-border")
      }
    },{ once: true })
})



// slides

const slide = document.querySelectorAll(".slide")
let counter = 0

slide.forEach((slides,index) => {
  slides.style.left = `${index *100}%`
})



let slidefunc = () => {
  slide.forEach((slides) =>{
    slides.style.transform = `translateX(-${counter * 100}%)`
  })
}

let goPrev = () => {
if(counter == 0){
  counter = slide.length-1
  slidefunc()
}else{
  counter--
  slidefunc()
}
}

let goNext = () => {
  console.log(counter)
  if(counter == slide.length-1){
    counter = 0
    slidefunc()
  }else{
    counter++
    slidefunc()
  }
}