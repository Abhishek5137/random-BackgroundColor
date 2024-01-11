const cont = document.querySelector('.cont')
        const cont1 = document.querySelector('.cont1')
        const button =document.querySelector('button')
        button.addEventListener('click',()=>{
            const one =  `${Math.floor(Math.random()*255)}`;
            const two =  `${Math.floor(Math.random()*255)}`;
            const three =  `${Math.floor(Math.random()*255)}`;
            const back=`rgb(${one},${two},${three})`;
            const back1=`rgb(${two},${three},${one})`
            console.log(back)
            console.log(back1)
            let css = `background-image: linear-gradient(to right, ${back}, ${back1});`
             cont.style = css;
             //cont1.style.backgroundColor=css1;

                const text = document.getElementById('text');
            const text1 = document.getElementById('text2');
            console.log(text)
            text.setAttribute("value",`${back}`)
            text1.setAttribute("value",`${back1}`)
            
        })
