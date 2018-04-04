//node fakeDataGenerator.js > books.json

let faker = require("faker")

let db = {
    books: []
}

generateRandomCategory=()=>{
    let category=['SciFi','SchoolBook','Biography','Fiction','History'];
    let rand = category[Math.floor(Math.random() * category.length)];
    return rand;
}

for(let i = 0;i < 100; ++i) {
    db.books.push({
        id: faker.Helpers.replaceSymbolWithNumber("###-###-###"),
        title: faker.Company.bs(), //returns "web services"
        author: faker.Name.firstName()+" "+faker.Name.lastName(),
        description: faker.Lorem.sentences(),
        date:faker.Date.between('1980-01-01', '2017-12-31'),
        price:'$'+faker.Helpers.replaceSymbolWithNumber("##.##"),
        book_image:"./static/img/book.jpg",
        sales:faker.Helpers.replaceSymbolWithNumber("###"),
        category:generateRandomCategory(),

    })
}

console.log(JSON.stringify(db))