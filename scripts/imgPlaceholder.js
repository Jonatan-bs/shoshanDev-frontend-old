export function imgPlaceholder(){
  let images = document.querySelectorAll('img.placeholder')

  images.forEach( image => {
      if(!image.dataset.placeholder) return
      image.style.background = `url(${image.dataset.placeholder})`
      image.style.backgroundRepeat = "no-repeat"
      image.style.backgroundPosition = "center"
      image.style.backgroundSize = image.dataset.fit || "contain";  })
}
export function imgRemovePlaceholder(){

  images = document.querySelectorAll('img.removePlaceholder')
  images.forEach( image => {
      image.style.background = ``
      image.classList.remove('')

  })
}

