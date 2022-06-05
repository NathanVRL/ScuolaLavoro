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

    getpost() {  
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
    
            },
        async newGetpost(){
            this.page+=1
            const res = await fetch('https://api.themoviedb.org/3/tv/popular?api_key=' + this.api_key + '&language=' + this.language + '&page=' + this.page)
            const post = await res.json()
            console.log(post)
            this.migliori = post.results
            this.movies = this.movies + this.migliori

        }
        },
        
    created(){
        this.getpost()

        },


})


app.mount('#app')

