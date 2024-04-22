function getPostById(postId){
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
}
getPostById(20)
.then(response => response.json())
.then(data => console.log(data.body))

getPostById(99)
.then(response => response.json())
.then(data =>{
    console.log(data.userId)
    console.log(data.id)
    console.log(data.title)
    console.log(data.body)
});

async function getPostByIdAsync(postId){
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const data =  response.json();
    return data;
}
getPostByIdAsync(22)
.then(data => console.log(data.userId))
