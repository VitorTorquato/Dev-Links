function toggleMode () {
  
    const html = document.documentElement
      html.classList.toggle("Light")
    /*if(html.classList.contains('Light')){
      html.classList.remove('Light')
    } else {
      html.classList.add('Light')*/

      

      // pegar a tag img
      const img = document.querySelector("#profile img")
      //Substituir a imagem
      if(html.classList.contains("Light")) {
      //se tiver light mode , adicionar a imagen light
      img.setAttribute('src' , 'avatar-light.png')
      } else {
        //se tiver sem light mode, manter normal
        img.setAttribute('src' , 'avatar.png')
      }
   
    }
 
   

  