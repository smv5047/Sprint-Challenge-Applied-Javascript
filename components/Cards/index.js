// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

//Card Component

function cardCreator (array) {
    let card = document.createElement("div")
    card.classList.add("card")

    let headline = document.createElement("div")
    headline.classList.add("headline")
    //Update Reference
    headline.textContent = array.headline
    card.appendChild(headline)

    let author = document.createElement("div")
    author.classList.add("author")

    let imgContainer = document.createElement("div")
    imgContainer.classList.add("img-container")
    
    let imgAuthor = document.createElement("img")
    //Update Reference
    imgAuthor.src = array.authorPhoto
    imgContainer.appendChild(imgAuthor)

    let authorName = document.createElement("span")
    //Update Reference
    authorName.textContent = array.authorName

    author.appendChild(imgContainer)
    author.appendChild(authorName)

    card.appendChild(author)


    return card

}

let cardsContainer = document.querySelector(".cards-container")

axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(resolve => {
        let articles = {};
        let articlesTitles = [];
        articles = resolve.data.articles
        articlesTitles = Object.values(articles)
        // console.log(articlesTitles[0])
        let arrayOfArticles = []
        for (let i =0; i<articlesTitles.length; i++) {
            for (let x=0; x<articlesTitles[i].length; x++){
                arrayOfArticles.push(articlesTitles[i][x])
            }
        }
        arrayOfArticles.forEach(article => {
            cardsContainer.appendChild(cardCreator(article))
        })
       
        // console.log(arrayOfArticles)
        // console.log(resolve)
        // console.log(articlesTitles)
    })
    .catch( error => {
        console.log(error)
    })


