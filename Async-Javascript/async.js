const posts =[
    { title:"ilk post", body:"Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir"},
    { title:"ikinci post", body:"Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden oluşmaz"},
    { title:"üçüncü  post", body:"Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir. "}
];


const listpost =() => {
posts.map((post) => {
    console.log(post.title,post.title)
})
}

const addpost=(newpost)=>{
    const promise1=new Promise((resolve, reject) => {
        posts.push(newpost);
        resolve(posts);
    })

    return promise1;
}

async function showpost(){
    try{
        await addpost({title:"Dördüncü post",body:"nun dikkatini dağıttı"})
        listpost();
    }catch(error){
        console.log(error);
    }

}
showpost()