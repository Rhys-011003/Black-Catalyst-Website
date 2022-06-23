window.addEventListener('load',()=>{
    const preload=document.querySelector('.preload');
    preload.classList.add('preload-finish');
})

var loading=[
    'Loading Awesomeness',
    'Jumping Dimensions',
    'The Future Is Loading',
    'Editing Content',
    'You Can Totally Do This',
    'When Nothing Goes Right, Go Left',
    'On A Wild Goose Chase',
    'All Toasters Toast Toast!',
    'Chicken?',
    'Made By Your Mom'
]

function newLoad(){
    var randomNumber=Math.floor(Math.random()*(loading.length));
    document.getElementById('loadingDisp').innerHTML=loading[randomNumber]
}
newLoad();

