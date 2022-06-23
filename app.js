window.addEventListener('load',()=>{
    const preload=document.querySelector('.preload');
    preload.classList.add('preload-finish');
})

var loading=[
    'Loading Awesomeness',
    'Jumping Dimensions',
    'Future Loading',
    'I\'m Hungry',
    'Editing Content',
    'You can totally do this',
    'Don’t tell people your plans. Show them your results',
    'When nothing goes right, go left',
    'On a wild goose chase',
    '😙',
    '❤️',
    '😬',
    '🥸',
    '🤪'
]

function newLoad(){
    var randomNumber=Math.floor(Math.random()*(loading.length));
    document.getElementById('loadingDisp').innerHTML=loading[randomNumber]
}
newLoad();