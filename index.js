
const submitPost = () => {
    let name = document.getElementById('name');
    let post = document.getElementById('post');

    if(name.value === '' && post.value === ''){
        alert('fieldnya kosong woi!!! ISIIII')
    } else if (name.value === ''){
        alert('namanya kosong woiii')
    } else if (post.value === ''){
        alert('postingannya mana ????')
    } else {
        let postData = {
            name: name.value,
            post: post.value,
        }

        let tagWrapper = document.createElement('div');
        let tagName = document.createElement('h1');
        let tagPost = document.createElement('p');
        tagName.innerHTML = postData.name
        tagPost.innerHTML = postData.post
        tagWrapper.className = 'card'
        let container = document.getElementById('cardContainer')

        container.appendChild(tagWrapper);
        tagWrapper.appendChild(tagName)
        tagWrapper.appendChild(tagPost)
    }

    //reset post
    name.value = ''
    post.value = ''
}