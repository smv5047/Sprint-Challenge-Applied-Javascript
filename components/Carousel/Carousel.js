/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
index = 0
function carouselCardCreator () {
  
  let carouselCard = document.createElement("div")
  carouselCard.classList.add("carousel")
  
  let leftButton = document.createElement("div")
  leftButton.classList.add("left-button")
  leftButton.textContent = "<"
  carouselCard.appendChild(leftButton)

  let img1 = document.createElement("img")
  img1.src = "../assets/carousel/mountains.jpeg"
  img1.display = "block"
  carouselCard.appendChild(img1)

  // let img2 = document.createElement("img")
  // img2.src = "./assets/carousel/computer.jpeg"
  // carouselCard.appendChild(img2)

  // let img3 = document.createElement("img")
  // img3.src = "../assets/carousel/trees.jpeg"
  // carouselCard.appendChild(img3)

  // let img4 = document.createElement("img")
  // img4.src = "../assets/carousel/turntable.jpeg"
  // carouselCard.appendChild(img4)

  // carouselCardIndex =[img1, img2, img3, img4]
  // console.log(carouselCardIndex)


  let rightButton = document.createElement("div")
  rightButton.classList.add("right-button")
  rightButton.textContent = ">"
  
  function clickCounter() {
    index +=1
  }
  rightButton.addEventListener('click', () => {
    clickCounter()
    rightButton.innerHTML = index;
  })
  carouselCard.appendChild(rightButton)

  
  
  
  
  return carouselCard

}


let cardCorouselContainer = document.querySelector(".carousel-container")
cardCorouselContainer.appendChild(carouselCardCreator())
console.log(index)
