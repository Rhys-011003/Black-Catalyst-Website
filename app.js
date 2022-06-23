window.addEventListener('load',()=>{
    const preload=document.querySelector('.preload');
    preload.classList.add('preload-finish');
})

var loading=[
    'Loading Awesomeness',
    'Jumping Dimensions',
    'The Future Loading',
    'Editing Content',
    'You can totally do this',
    'When nothing goes right, go left',
    'On a wild goose chase',
    'All Toasters Toast Toast!',
    'Chicken?'
]

function newLoad(){
    var randomNumber=Math.floor(Math.random()*(loading.length));
    document.getElementById('loadingDisp').innerHTML=loading[randomNumber]
}
newLoad();

