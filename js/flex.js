let modes=document.querySelectorAll('.modes li');

for(let mode of modes){
    mode.onclick = function() {
        let type = event.target.getAttribute('name');
        console.log(type)

        document.querySelector('head link:last-of-type')
            .setAttribute('href', 'css/'+type+'.css' )

    }

}

let aa = document.querySelectorAll('.sec10 a')
for(let a of aa){
    a.onclick= function (){
        for(let as of aa){
        as.className= ''
        event.target.className='btn btn-primary'


            let btn=event.target.innerHTML;
        console.log(btn)
        let relate_img= document.querySelectorAll('.row .'+btn);
            console.log(relate_img)

            let all_images =document.querySelectorAll('.row>.col8')

            for(let imag of all_images ){
                imag.style.display='none'

            }
            for(let image of relate_img ){
                image.style.display='block'

            }


        }



    }

}
