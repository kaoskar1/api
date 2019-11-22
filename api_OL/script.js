// hamtar in en massa objekt fran index.html
  let form = document.querySelector('form')
  let field = document.querySelector('.searchField')
  let logo = document.querySelector('.headerLogo')
  // let box2 = document.querySelector('.box2')
  // let box3 = document.querySelector('.box3')
  let button = document.querySelector('.button')
  let pics = document.querySelector('.pics')
  let giveMeNumber = document.querySelector('.giveMeANumber')
  let photobox = document.querySelectorAll(`photoBox`)
  let fullImgSection = document.querySelector(`fullImageSection`)
  let fullImg = document.querySelector(`fullImage`)
  
  form.addEventListener("submit",(e)=>{
    e.preventDefault()
  // setup for  adress att lagga in i fetchen
  let searchPhoto = field.value// hamtar det inskriba stringen fran sokfaltet
  let methodMan = "flickr.photos.search"  
  let perPage = setNumber()
  let format = "json&nojsoncallback=1"
  let key = 'f38bd2f30f1a5c6042823e747a796f02'
  let proxy = `https://cors-anywhere.herokuapp.com/`
  let api = `https://www.flickr.com/services/rest/?method=${methodMan}&api_key=${key}&text=${searchPhoto}&per_page=${perPage}&format=${format}`
  let adress = `https://flickr.com/photos/`
  let outPut = ``
// en function som kollar att man minst soker
// pa 20 bilder perpage glommer man att skriva in det sa blir det ocksa 20 automatiskt
// aven en funktion som gor att man inte kan soka po mer an 500 bilder
  function setNumber(){
    giveMeNumber.value
  if(giveMeNumber.value < 20){
    console.log("under 20");
    return 20
  } 
  if(giveMeNumber.value >= 501){
    console.log("over roding");
    return 500
  } 
  return giveMeNumber.value

}


  fetch(api)
  
  .then(res => res.json())
  // .then(json => console.log(json))
  // soker efter och gors om till json 
  .then((data)=>{
    data.photos.photo.forEach(img => {
// for varje bild som hamtas i fran sokningen skrivs sen ut har 
    outPut+=`
    <div class="photoBox">
    <img src= "https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}_b.jpg"  alt="${img.title}">
    

   </div>

    `
    
    // console.log(data);
    
    });

    
    document.querySelector('.picsGallery').innerHTML = outPut
})


  
  })
