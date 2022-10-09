var products = [
    { title: 'Polo Shirt Black', cat: "black", img: "/imgs/poloblack.jpg", text: "This is polo shirt", price: "200$" },
    { title: 'Polo Shirt Black', cat: "black", img: "/imgs/poloblack.jpg", text: "This is polo shirt", price: "200$" },
    { title: 'Polo Shirt Black', cat: "black", img: "/imgs/poloblack.jpg", text: "This is polo shirt", price: "200$" },
    { title: 'Polo Shirt Black', cat: "black", img: "/imgs/poloblack.jpg", text: "This is polo shirt", price: "200$" },
    { title: 'Polo Shirt Green', cat: "green", img: "/imgs/pologreen.jpg", text: "This is polo shirt", price: "200$" },
    { title: 'Polo Shirt Green', cat: "green", img: " /imgs/pologreen.jpg", text: "This is polo shirt", price: "200$" },
    { title: 'Polo Shirt Green', cat: "green", img: "/imgs/pologreen.jpg", text: "This is polo shirt", price: "200$" },
    { title: 'Polo Shirt Green', cat: "green", img: "/imgs/pologreen.jpg", text: "This is polo shirt", price: "200$" },
    { title: 'Polo Shirt Red', cat: "red", img: "/imgs/polored.jpg", text: "This is polo shirt", price: "200$" },
    { title: 'Polo Shirt Red', cat: "red", img: "/imgs/polored.jpg", text: "This is polo shirt", price: "200$" },
    { title: 'Polo Shirt Red', cat: "red", img: "/imgs/polored.jpg", text: "This is polo shirt", price: "200$" },
    { title: 'Polo Shirt Red', cat: "red", img: "/imgs/polored.jpg", text: "This is polo shirt", price: "200$" },
    { title: 'Polo Shirt White', cat: "white", img: "/imgs/polowhite.jpeg", text: "This is polo shirt", price: "200$" },
    { title: 'Polo Shirt White', cat: "white", img: "/imgs/polowhite.jpeg", text: "This is polo shirt", price: "200$" },
    { title: 'Polo Shirt White', cat: "white", img: "/imgs/polowhite.jpeg", text: "This is polo shirt", price: "200$" }
];
/////////////////////////////////////Select Category by Button///////////////////////

// $('.catB').on('click',()=>{
// const ProData= filterctg('black')
// cardDisp(ProData);
// })
// $('.catG').on('click',()=>{
//     const NewProData= filterctg('green')
//     cardDisp(NewProData);
// })
// $('.catR').on('click',()=>{
//     const NewProData= filterctg('red')
//     cardDisp(NewProData); 
// })
// $('.catW').on('click',()=>{
//     const NewProData= filterctg('white')
//     cardDisp(NewProData);  
// })
// $('.catAll').on('click',()=>{
//     cardDisp(products);  
// })
// const filterctg=(fc)=>{
//     const a=products.filter(data=>data.cat===fc);
//     return a;
// }

//////////////////////////////////////////Select Category By Checkbox//////////////////////

var listArray = [];
$('input[type="checkbox"]').each(function (index, checkbox) {
    $(checkbox).on('click', () => {
        if (this.checked == true)
        //if($(this).prop("checked") == false
        {
            listArray.push(this.value)
            cardDisp(listArray)
        } else {
            listArray = listArray.filter(e => e !== this.value)
            //    console.log(listArray);
            cardDisp(listArray)
        }
    })
});

//////////////////////////////////////////Display by Checkbox//////////////////////////////

const cardDisp = ((listArr) => {
    let data1 = []; let filter = [];
    // console.log('.......LisArr length........', listArr.length);

    if (listArr.length < 1) {
        // console.log('listArr length is: ', listArr.length);
        // console.log('listArr1 is:', listArr);
        $('#product-data').empty();
        data1 = products;
        // console.log('data1 is:', data1);
        const data = data1;
        for (let i = 0; i < data.length; i++) {
            $("#product-data").append(`<div class=" p-3 col-md-6 col-lg-3">
    <div class="card">
        <img class="card-img-top" src=${data[i].img} alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${data[i].title}</h5>
            <p class="card-text">${data[i].text}</p>
            <p>${data[i].price}</p>
            <a href="#" class="btn btn-primary float-right add-cart">Add to basket</a>
        </div>
    </div>
    </div>`)
        }

    }

    else if (listArr.length > 0) {
        let filter = [];
        // console.log('lisArr2 is :', listArr);

        listArr.forEach(value => {
            const a = products.filter(e => e.cat == value)
            filter.push(a)
        })
        data1 = filter
        // console.log('data1 is:', data1);

        $('#product-data').empty();
        for (let i = 0; i < data1.length; i++) {
            const data = data1[i]

            for (let j = 0; j < data.length; j++) {
                $("#product-data").append(`<div class=" p-3 col-md-6 col-lg-3">
    <div class="card">
        <img class="card-img-top" src=${data[j].img} alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${data[j].title}</h5>
            <p class="card-text">${data[j].text}</p>
            <p>${data[j].price}</p>
            <a href="#" class="btn btn-primary float-right add-cart">Add to basket</a>
        </div>
    </div>
    </div>`)
            }
        }
    }

})

//////////////////////////////////////Display by buttons/////////////////// 
// const cardDisp=((NewProData)=>{
// $('#product-data').empty();
// const data=NewProData;

// for (let i = 0; i <= data.length; i++) {
//     $("#product-data").append(`<div class=" p-3 col-md-6 col-lg-3">
// <div class="card">
//     <img class="card-img-top" src=${data[i].img} alt="Card image cap">
//     <div class="card-body">
//         <h5 class="card-title">${data[i].title}</h5>
//         <p class="card-text">${data[i].text}</p>
//         <p>${data[i].price}</p>
//         <p>${data[i].id}</p>
//         <a href="#" class="btn btn-primary float-right">Go somewhere</a>
//     </div>
// </div>
// </div>`)
// }
// })
cardDisp(listArray);
