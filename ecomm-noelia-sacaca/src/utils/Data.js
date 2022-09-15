const data = [
    {
    
        "id":1,
        "title":"sahumerio con diseño de corazón",
        "price":20,
        "img":"https://i.ibb.co/1RjMCbH/ceniceroformadecorazon.jpg",
    },
    {
        "id":2,
        "title":"cenicero con forma de huevo",
        "price":25,
        "img":"https://i.ibb.co/RgcFhHn/ceniceroformadehuevo.jpg"
    },
    {
        "id":3,
        "title":"maceta con diseño de frutilla",
        "price":15,
        "img":"https://i.ibb.co/dKYXvcq/macetasformadefrutilla.jpg"
    },
    {
        "id":4,
        "title":"cenicero con forma de gatito",
        "price":25,
        "img":"https://i.ibb.co/8XCgBnv/cenicerogatito.jpg"
    },
    {
        "id":5,
        "title":"cenicero con franajs rojas",
        "price":30,
        "img":"https://i.ibb.co/27GK6K9/ceniceroconfranjasrojas.jpg"
    },
    {
        "id":6,
        "title":"sahumerio con forma de hoja",
        "price":30,
        "img":"https://i.ibb.co/dQ8y15t/saumerioformadehoja.jpg"
    },
    {
        "id":7,
        "title":"cenicero con dideño del yin y yan",
        "price":30,
        "img":"https://i.ibb.co/23b0b56/ceniceroyinyyang.jpg"
    },
    {
        "id":8,
        "title":"cenicero con franajs rojas",
        "price":30,
        "img":"https://i.ibb.co/0QN9gCw/teteracara.jpg"
    },
    {
        "id":9,
        "title":"tetera con forma de frutilla",
        "price":30,
        "img":"https://i.ibb.co/DLPH6Mg/tetera-Frutilla.jpg"
    },
    {
        "id":10,
        "title":"tetera con forma de gatito",
        "price":30,
        "img":"https://i.ibb.co/GFzJrwn/teteradegatito.jpg"
    },
]
const okay = true;
const FetchData=()=>{
    return new Promise((result,reject)=>{
        setTimeout(()=>{
            if(okay){
                result(data)
            }
            else{
                reject()
            }
        }, 2000)
    })
}
export default FetchData;