$(document).ready(function (){
   function update(){
       const ajaxReq = $.ajax("data/blog.json");
       ajaxReq.done((data) => {
           render(data);
       });
   }

   function render(posts){
        let html = `<ul class="list-unstyled">`;
        posts.forEach((post) => {
            html += `<p class="category">${post.categories}</p>`;
            html += `<li class="media">`;
            html += `<img src=${post.image} class="mr-3" alt=${post.alt}>`;
            html += `<div class="media-body">`;
            html += `<div class="titleArea">`;
            html += `<h3 class="mt-0 mb-1">${post.title}</h3>`;
            html += `<h6 class="date">${post.date}</h6>`;
            html += `</div>`;
            html += `<p>${post.content}</p>`;
            html += `</div></li>`
        });

        html += `</ul>`;
        $("#posts").html(html);

   }

   update();

});