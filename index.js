//convert the div id of showProfile to a variable 
//loop through the posts array to display each of the posts in the HTML/browser. 
//insert the property for the innerHTML of the showProfile variable. 
//create the template literals to use to display the profiles.

const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: " just took a few mushrooms lol",
        likes: 21,
        icon1: "images/icon-heart.png",
        icon2: "images/icon-comment.png",
        icon3: "images/icon-dm.png" 
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: " i'm feelin a bit stressed tbh",
        likes: 4,
        icon1: "images/icon-heart.png",
        icon2: "images/icon-comment.png",
        icon3: "images/icon-dm.png" 
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: " gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152, 
        icon1: "images/icon-heart.png",
        icon2: "images/icon-comment.png",
        icon3: "images/icon-dm.png" 
    }
]

//convert the div id of showProfile to a variable 
let showProfile = document.getElementById("showProfile");

//loop through the posts array to display each of the posts in the HTML/browser. 
for (let i = 0; i < posts.length; i++ ) {

    //insert the property for the innerHTML of the showProfile variable. 
    showProfile.innerHTML +=

    //create the template literals to use to display the profiles.
    ` <div class="container">
            <header>
                <img class="logo" src="images/logo.png" alt="Oldagram logo">
                <img class="user-avatar" src="images/user-avatar.png" alt="avatar for the user">
            </header>
            <hr>

            <section class="section-1">
            <img class="avatar" src="${posts[i].avatar}">
            <div>
                <p class="name">${posts[i].name}</p>
                <p class="location">${posts[i].location}</p>
            </div>
            </section>

            <section>
                <img class="post" src="${posts[i].post}">
            </section>

            <section class="bottom">
                <img class="icon" src="${posts[i].icon1}">
                <img class="icon" src="${posts[i].icon2}">
                <img class="icon" src="${posts[i].icon3}">
                <p class="likes">${posts[i].likes} likes</p>
                <p class="comment"><span>${posts[i].username}</span>${posts[i].comment}</p>
            </section>
        </div>`

    //console.log (posts[i]); //will render out in the console the array. 
}
    
//console.log(showProfile.innerHTML); //will render out in the console the information for the profiles.






