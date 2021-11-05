const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


function convertDate(string){
  let us_date = string;
  let parts = us_date.split('-');
  let eu_date = parts[2]+'-'+parts[1]+'-'+parts[0];
  return eu_date;
}

generatePost();

const buttonContainer = document.getElementsByClassName('likes__cta');
const buttonLike = document.getElementsByClassName('like-button');

console.log(buttonContainer);
console.log(buttonLike);

buttonContainer[0].addEventListener('click', function(){
 let likeCounter = posts[0].likes;
 buttonLike[0].classList.add('like-button--liked');
 likeCounter = likeCounter + 1;
 console.log('likeCounter', likeCounter);
 document.getElementsByClassName('js-likes-counter')[0].innerHTML = likeCounter;
})

buttonContainer[1].addEventListener('click', function(){
    let likeCounter1 = posts[1].likes;
    buttonLike[1].classList.add('like-button--liked');
    likeCounter1 = likeCounter1 + 1;
    console.log('likeCounter', likeCounter1);
    document.getElementsByClassName('js-likes-counter')[1].innerHTML = likeCounter1;

})

buttonContainer[2].addEventListener('click', function(){
    let likeCounter2 = posts[2].likes;
    buttonLike[2].classList.add('like-button--liked');
    likeCounter2 = likeCounter2 + 1;
    console.log('likeCounter', likeCounter2);
    document.getElementsByClassName('js-likes-counter')[2].innerHTML = likeCounter2;

})

buttonContainer[3].addEventListener('click', function(){
    let likeCounter3 = posts[3].likes;
    buttonLike[3].classList.add('like-button--liked');
    likeCounter3 = likeCounter3 + 1;
    console.log('likeCounter', likeCounter3);
    document.getElementsByClassName('js-likes-counter')[3].innerHTML = likeCounter3;

})

buttonContainer[4].addEventListener('click', function(){
    let likeCounter4 = posts[4].likes;
    buttonLike[4].classList.add('like-button--liked');
    likeCounter4 = likeCounter4 + 1;
    console.log('likeCounter', likeCounter4);
    document.getElementsByClassName('js-likes-counter')[4].innerHTML = likeCounter4;

})

function generatePost(){
    
    for(let post of posts){

      const id = post.id;
      const content = post.content;
      const media = post.media;
      const authorName = post.author.name;
      let authorImg = post.author.image;
      let likes = post.likes;
      const created = post.created;

      if(authorImg == null) authorImg = 'https://unsplash.it/300/300?image=171';
     
      document.getElementById('container').innerHTML +=
    
      `
      <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${authorImg}" alt="Phil Mangione">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${authorName} </div>
                        <div class="post-meta__time">${convertDate(created)}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text"> ${content} </div>
            <div class="post__image">
                <img src=" ${media} " alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="${id}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div> 
      `
    }
  }