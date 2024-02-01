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
        ease:[0.3,0.3,0.25,0.75],
}
       } 
    }
}

export const  container=(time,path)=>{
    return{
            initial:{
                opacity:0,
               y:path==='up'?80:path==='down'?-80:0,
               x:path==='left'?80:path==='right'?-80:0      
            },
            animate:{
                opacity:1,
                y:0,
                x:0,
                transition:{
                    duration:time,
                    type:'tween',
                    staggerChildren:1,
                    delay:0.3
                }
            },
    }
}

export const item=(path)=>{
  return{
    initial:{
        opacity:0,
        y:path==='up'?25:path==='down'?-25:0,
        x:path==='left'?25:path==='right'?-25:0
    },
    animate:{
        y:0,
        x:0,
        opacity:1,
        transition:{
            duration:0.5,
            type:'tween'
        }
    }
  }
}