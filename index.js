const clock = setInterval((
)=>{
    const date = new Date();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    const hour = date.getHours();
    console.log(hour,min,sec);
    },1000);

const wrapper = document.createElement('div');

