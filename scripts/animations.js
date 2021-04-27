export default {
  scrollTop(){
    window.scroll(0,0)
  },

 pageTransition: {
    initial: {
      opacity: 0,
      transform: "translateY(20px)"
    },
    animate: {
      opacity: 1,
      transform: "translateY(0px)",
      transition: {
        transition:{ transform:{ 
          ease: 'easeIn', duration: 100
        }}
      }
    },
    exit: {
      opacity: 0,
      transform: "translateY(-20px)",
      transition: {
        transition:{ transform:{ 
          ease: 'easeOut', duration: 100
        }}
      }
    }
  },
  
  fadeUp:{
      initial: {
        y: 30,
        opacity: 0,
      },
      animate: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.6,
          type: "spring"
        }
      }
  },
  fadeDown:{
      initial: {
        y: -30,
        opacity: 0,
      },
      animate: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.6,
          type: "spring"
        }
      }
  },
  fadeRight:{
      initial: {
        x: -100,
        opacity: 0,
      },
      animate: {
        x: 0,
        opacity: 1,
        transition: {
          duration: 2,
          type: "spring"
        }
      }
  },
  fade:{
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
        type: "spring"
      }
    }
},
}