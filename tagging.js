document.addEventListener('DOMContentLoaded', function(){

    var arrayButton = []
    document.querySelectorAll('button').forEach(function(item){
        arrayButton.push(item.innerText);

        item.addEventListener('click', function(){
            console.log(item.innerText);
        })
    })

    arrayButton.forEach(function(item){
        console.log(item)
    })
})

