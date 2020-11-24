/* -------RESTFUL APIs
  CRUD => Create Read Update Delete

 Create a post

 Read and view all blog posts or view a specific post

 Update or edit a blog post

 Delete a post or comment

 SPOTIFY LIKE APP

 Entities???

    artists
    playlists
    genres
    visibility/type
    like/favorites
    songs
    users
    albums
    images

GET https://mattblog.net/comments // get a list of all the comments

-----READ
GET https://mattblog.net/posts  // get all posts
POST https://mattblog.net/posts/1 // get back a specific post

----CREATE
GET https://mattblog.net/posts // create a new post

--UPDATE
PUT https://mattblog.net/posts/1 // update the post

--DELETE
DELETE https://mattblog.net/posts/1 // delete the post




     */
const movieURL = "https://codeup-json-server.glitch.me/movies";

const getMovie = () => fetch(movieURL).then(response => response.json()).catch(console.error);

getMovie().then(movies => {
    let html = `<ul>`;
    for(let movie of movies){
        html+=`<li>${movie.title}</li>`;
    }
    html+=`</ul>`;
    document.write(html);//overwrites the body entirely
});

























