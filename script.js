$('.bb').textillate({in:{effect:'bounceInUp', delay:10}});

gsap.from(".ba",{
    y:20,
    opacity:0,
    delay:2,
    duration:1,
});
gsap.from(".bc",{
    y:20,
    opacity:0,
    delay:2.5,
    duration:1,
});
gsap.from(".bd",{
    y:20,
    opacity:0,
    delay:2.9,
    duration:1,
});


gsap.from("#divline",{
    opacity:0,
    x:-2200,
    delay:2,
    duration:2,
    transition:"Expo.easeInOut",
});
gsap.from("#nav1",{
    y:20,
    opacity:0,
    delay:2.5,
    duration:1,
    
});
gsap.from("#circle",{
    opacity:0,
    duration:5,
    delay:2,
})
gsap.from("#center",{
    opacity:0,
    x:80,
    duration:1,
    delay:1.5,
})
gsap.from("#right",{
    delay:2.2,
    opacity:0,
    x:40,
    duration:1,
    
});
gsap.from(".be",{
    y:20,
    opacity:0,
    delay:2.5,
    duration:1,
});