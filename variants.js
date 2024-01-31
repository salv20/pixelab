export const FadeIn=(direction,delay)=>{
    return{
       hidden:{
        y:direction === 'up'? 80:direction === 'down'? -80:0,
        x:direction === 'right'?80:direction==='left'?-80:0,
        opacity:0
       },
       show:{
        y:0,
        x:0,
        opacity:1,
        type:'tween',
        transition:{
        delay:delay,
        duration:1.3,
        staggerChildren:0.5,
        ease:[0.3,0.3,0.25,0.75]
}
       } 
    }
}