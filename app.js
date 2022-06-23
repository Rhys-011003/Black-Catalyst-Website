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
    'When nothing goes right, go left',
    'On a wild goose chase',
    '😙',
    '❤️',
    '😬',
    '🥸',
    '🤪',
    'Please don’t waste your life on useless websites.',
    'All Toasters Toast Toast!',
    'I love you guys. Not enough to die for you, but enough to give you a sandwich if I have too much sandwich'
]

function newLoad(){
    var randomNumber=Math.floor(Math.random()*(loading.length));
    document.getElementById('loadingDisp').innerHTML=loading[randomNumber]
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
newLoad();

