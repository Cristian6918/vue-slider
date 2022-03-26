const slides = [
    {
        image: 'img/01.jpg',
        title: 'Svezia',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },
    {
        image: 'img/02.jpg',
        title: 'Svizzera',
        text: 'Lorem ipsum.',
    },
    {
        image: 'img/03.jpg',
        title: 'Gran Bretagna',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
        image: 'img/04.jpg',
        title: 'Germania',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
    },
    {
        image: 'img/05.jpg',
        title: 'Paradise',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
    }
];




const app=new Vue({
    el:'#app',
    data:{
        slides,
        elemIndex:0,
        time:3000,
        
    },
    methods:{
        showPrev(){
            if(this.elemIndex>0){
               this.elemIndex--;
               
        }else{
            this.elemIndex=slides.length-1;
            
        }
        },
        showNext(){
           
            if(this.elemIndex<slides.length-1){
                this.elemIndex++;
         }else{
             this.elemIndex=0;
         }
        },
       
        showActive: function(slide){
           if(slide.image===this.slides[this.elemIndex].image){
               return 'thumb active'
           }else{
               return 'thumb'
           }
        },

        select: function(slide){
            this.elemIndex=slides.indexOf(slide);
        },
        scroll: function(){
            interval=setInterval(app.showNext,3000);
        },
        stopScroll: function(){
            clearInterval(interval)
        },
       

        

    },
        
});
app.scroll();
 

