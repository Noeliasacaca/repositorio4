const data = [
    {

        "id": 1,
        "title": "sahumerio con diseño de corazón",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tenetur quia aliquid.",
        "price": 1000,
        "stock": 4,
        "img": "https://i.ibb.co/1RjMCbH/ceniceroformadecorazon.jpg",
        category: "sahumerio",
        quantity : 0
    },
    {
        "id": 2,
        "title": "cenicero con forma de huevo",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tenetur quia aliquid.",
        "price": 1000,
        "stock": 7,
        "img": "https://i.ibb.co/RgcFhHn/ceniceroformadehuevo.jpg",
        category: "cenicero",
        quantity : 0
    },
    {
        "id": 3,
        "title": "maceta con diseño de frutilla",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tenetur quia aliquid.",
        "price": 1000,
        "stock": 2,
        "img": "https://i.ibb.co/6410r2D/macetasformadefrutilla.jpg",
        category: "maceta",
        quantity : 0
    },
    {
        "id": 4,
        "title": "cenicero con forma de gatito",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tenetur quia aliquid.",
        "price": 1000,
        "stock": 8,
        "img": "https://i.ibb.co/H25pBdr/cenicerogatito.jpg",
        category: "cenicero",
        quantity : 0
    },
    {
        "id": 5,
        "title": "cenicero con franajs rojas",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tenetur quia aliquid.",
        "price": 1000,
        "stock": 7,
        "img": "https://i.ibb.co/ng3Hyfh/ceniceroconfranjasrojas.jpg",
        category: "cenicero",
        quantity : 0
    },
    {
        "id": 6,
        "title": "sahumerio con forma de hoja",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tenetur quia aliquid.",
        "price": 1000,
        "stock": 3,
        "img": "https://i.ibb.co/7ttDRYF/saumerioformadehoja.jpg",
        category: "sahumerio",
        quantity : 0
    },
    {
        "id": 7,
        "title": "cenicero con dideño del yin y yan",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tenetur quia aliquid.",
        "price": 1000,
        "stock": 2,
        "img": "https://i.ibb.co/BwTGndX/ceniceroyinyyang.jpg",
        category: "cenicero",
        quantity : 0
    },
    {
        "id": 8,
        "title": "tetera con forma de frutilla",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tenetur quia aliquid.",
        "price": 1000,
        "stock": 1,
        "img": "https://i.ibb.co/r20WXHf/tetera-Frutilla.jpg",
        category: "tetera",
        quantity : 0
    },
    {
        "id": 9,
        "title": "tetera con forma de gatito",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tenetur quia aliquid.",
        "price": 1000,
        "stock": 4,
        "img": "https://i.ibb.co/2y5tXy3/teteradegatito.jpg",
        category: "tetera",
        quantity : 0
    }
]

const okay = true;
const Data=()=>{
    return new Promise((result,reject)=>{
        setTimeout(()=>{
            if(okay){
                result(data)
            }
            else{
                reject()
            }
        }, 100)
    })
}
export default Data;
