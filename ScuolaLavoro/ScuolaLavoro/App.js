const app = Vue.createApp({
    el:"#app",
    data(){
        
        return{
            api_key:'6f9286d54de4891ea7a5c91779e09786',
            language:'it-IT',
            page:1,
            movies:[],
            Image:'image/star-628933_1280.webp',
            view:'image/occhio.png',
            linguaOG:'image/linguaog.png',
            migliori:[]

        }
    },
    computed:{
     
    },
    methods:{

    getpost() 
            {  
                return fetch('https://api.themoviedb.org/3/tv/popular?api_key='+this.api_key+'&language='+this.language+'&page='+this.page)
                    .then(res =>res.json())  
                    .then(post=>{
                        console.log(post)
                        this.movies=post.results
                    })
                          

            },
            image_path(poster_path)
            {

                return 'https://image.tmdb.org/t/p/original'+poster_path
    
            }

        },
    created(){
        this.getpost()
    },
    sortArray(){
        return x.populatity.localeCompare(y.populatity);
    },
    ricerca(){
        var x = document.getElementById("myInput");
        for (let i = 0; i < movies.length; i++) {
            if(x.textContent==movies[i].textContent){
               return true
            }else{
                return false
            }
            
        }
    }

    


})
app.get
function figo(x){
x.style.opacity="0.2"
}


function nofigo(x,nome){
    x.style.opacity="1"
    x.innerHTML
}

app.mount('#app')

