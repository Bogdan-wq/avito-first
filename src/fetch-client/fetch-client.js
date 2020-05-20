export default class FetchClient {

     getAllPhotos = () => {
         return fetch('https://boiling-refuge-66454.herokuapp.com/images')
             .then((res) => res.json())
     }

     getSpecialPhoto = (id) => {
         return fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}`)
             .then((res) => res.json())
     }
}