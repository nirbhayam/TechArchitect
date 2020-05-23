const nav = document.querySelector('nav');
const hem = document.querySelector('#hamburger');
const navItem = document.querySelectorAll('.navItem');

hem.addEventListener('click', ()=>{
    console.log(hem.innerText);
    if(hem.innerText == "☰")
    {
        hem.innerText = '✖';
        navItem.forEach((element)=>{
            element.style.height = '60px';
            element.style.opacity = '1';
            element.style.pointerEvents = 'all';
        });
    }
    else
    {
        hem.innerText = '☰';
        navItem.forEach((element)=>{
            element.style.height = '0';
            element.style.opacity = '0';
            element.style.pointerEvents = 'none';
        });
    } 
});

const roles = [
    "Freelancer",
    "Programmer",
    "Web Developer",
    "Game Developer"
];
const currentRole = document.querySelector('#role');
let roleIndex = 0;
const changeRole = ()=>
{

    // Removing current role
    let len = currentRole.innerText.length;

    for(let i = 0; i < len; i++)
    {
        setTimeout(()=>{
            currentRole.innerText = currentRole.innerText.slice(0, len - (i + 1))
        }, i * 100);
    }
    roleIndex++;
    roleIndex = roleIndex % roles.length;
    setTimeout(()=>{
        let newRole = roles[roleIndex].length;
        for(let i = 0; i < newRole; i++)
        {
            setTimeout(()=>{
                currentRole.innerText = roles[roleIndex].slice(0, i + 1)
            }, i * 200);
        }
    }, len * 100);
};
    
