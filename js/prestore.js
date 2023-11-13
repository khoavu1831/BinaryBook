//Danh sách sản phẩm hiện có
function createProduct(){
	if(localStorage.getItem('product')===null){
		var productArray = [
			{
        image: "images/python-crash-course.jpg",
        title:
          "Python Crash Course: A Hands-On, Project-Based Introduction to Programming",
        authors: ["Eric Matthes"],
        oldPrice: 1099000,
        newPrice: 1029000,
        category: "python",
        otherDetails: ["No Starch Press", 552, 2023],
      },
      {
        image: "images/head-first-design-patterns.jpg",
        title:
          "Head First Design Patterns: Building Extensible and Maintainable Object-Oriented Software",
        authors: ["Eric Freeman", "Elisabeth Robson"],
        oldPrice: 1959000,
        newPrice: 1829000,
        category: "design-pattern",
        otherDetails: ["O'Reilly Media", 669, 2021],
      },
      {
        image: "images/eloquent-javascript.jpg",
        title:
          "Eloquent Javascript, 3rd Edition: A Modern Introduction to Programming",
        authors: ["Marijn Haverbeke"],
        oldPrice: 979000,
        newPrice: 909000,
        category: "javascript",
        otherDetails: [""],
      },
      {
        image: "images/effective-java.jpg",
        title: "Effective Java",
        authors: ["Joshua Bloch"],
        oldPrice: 1449000,
        newPrice: 1249000,
        category: "java",
        otherDetails: ["No Starch Press", 472, 2018],
      },
      {
        image: "images/dsa-made-easy.jpg",
        title:
          "Data Structures and Algorithms Made Easy: Data Structures and Algorithmic Puzzles",
        authors: ["Narasimha Karumanchi"],
        oldPrice: 1129000,
        newPrice: 989000,
        category: "dsa",
        otherDetails: ["Careermonk Publications", 418, 2016],
      },
      {
        image: "images/head-first-ooad.jpg",
        title:
          "Head First Object-Oriented Analysis and Design: A Brain Friendly Guide to OOA&D",
        authors: ["Brett McLaughlin", "Gary Pollice", "David West"],
        oldPrice: 1719000,
        newPrice: 1599000,
        category: "ooad",
        otherDetails: ["O'Reilly Media", 634, 2007],
      },
      {
        image: "images/effective-c.jpg",
        title: "Effective C: An Introduction to Professional C Programming",
        authors: ["Robert C Seacord"],
        oldPrice: 1229000,
        newPrice: 1139000,
        category: "c/cpp",
        otherDetails: ["No Starch Press", 272, 2020],
      },
      {
        image: "images/spring-in-action.jpg",
        title: "Spring in Action",
        authors: ["Craig Walls"],
        oldPrice: 1699000,
        newPrice: 1449000,
        category: "spring",
        otherDetails: ["Manning Publications", 520, 2022],
      },
      {
        image: "images/practical-sql.jpg",
        title: "Practical SQL: A Beginner's Guide to Storytelling with Data",
        authors: ["Anthony Debarros"],
        oldPrice: 979000,
        newPrice: 909000,
        category: "database",
        otherDetails: ["No Starch Press", 464, 2022],
      },
      {
        image: "images/javascript-cookbook.jpg",
        title: "JavaScript Cookbook: Programming the Web",
        authors: ["Matthew MacDonald", "Shelley Powers", "Adam Scott"],
        oldPrice: 1959000,
        newPrice: 1819000,
        category: "javascript",
        otherDetails: ["O'Reilly Media", 535, 2021],
      },
      {
        image: "images/mastering-regex.jpg",
        title:
          "Mastering Regular Expressions: Understand Your Data and Be More Productive",
        authors: ["Jeffrey Friedl"],
        oldPrice: 1469000,
        newPrice: 1369000,
        category: "regex",
        otherDetails: ["O'Reilly Media", 542, 2006],
      },
      {
        image: "images/algorithms-to-live-by.jpg",
        title: "Algorithms to Live by: The Computer Science of Human Decisions",
        authors: ["Brian Christian", "Tom Griffiths"],
        oldPrice: 489000,
        newPrice: 449000,
        category: "dsa",
        otherDetails: ["Holt McDougal", 368, 2017],
      },
      {
        image: "images/css-definitive-guide.jpg",
        title: "CSS: The Definitive Guide",
        authors: ["Eric Meyer", "Estelle Weyl"],
        oldPrice: 2209000,
        newPrice: 2049000,
        category: "css",
        otherDetails: ["O'Reilly Media", 1126, 2023],
      },
      {
        image: "images/java-beginners-guide.jpg",
        title: "Java: A Beginner's Guide",
        authors: ["Herbert Schildt"],
        oldPrice: 979000,
        newPrice: 909000,
        category: "java",
        otherDetails: ["McGraw-Hill Companies", 752, 2022],
      },
      {
        image: "images/cpp-programming-language.jpg",
        title: "The C++ Programming Language (Revised)",
        authors: ["Bjarne Stroustrup"],
        oldPrice: "2089000",
        newPrice: "1969000",
        category: "c/cpp",
        otherDetails: ["Addison-Wesley Professional", 1376, 2013],
      },
      {
        image: "images/effective-java.jpg",
        title: "Effective Java",
        authors: ["Joshua Bloch"],
        oldPrice: 1449000,
        newPrice: 1249000,
        category: "java",
        otherDetails: ["Addison-Wesley Professional", 416, 2018],
      },
      {
        image: "images/js-the-good-part.jpg",
        title: "Javascript: The Good Parts",
        authors: ["Douglas Crockford"],
        oldPrice: 739000,
        newPrice: 679000,
        category: "javascript",
        otherDetails: ["Yahoo Press", 172, 2008],
      },
      {
        image: "images/programming-typescript.jpg",
        title: "Programming Typescript: Making Your JavaScript Applications Scale",
        authors: ["Boris Cherny"],
        oldPrice: 1369000,
        newPrice: 1269000,
        category: "typescript",
        otherDetails: ["O'Reilly Media", 322, 2019],
      },
      {
        image: "images/head-first-c-sharp.jpg",
        title:
          "Head First C#: A Learner's Guide to Real-World Programming with C# and .Net Core",
        authors: ["Jennifer Greene", "Andrew Stellman"],
        oldPrice: 1719000,
        newPrice: 1599000,
        category: "csharp",
        otherDetails: ["O'Reilly Media", 785, 2021],
      },
      {
        image: "images/spring-in-action.jpg",
        title: "Spring in Action",
        authors: ["Craig Walls"],
        oldPrice: 1699000,
        newPrice: 1449000,
        category: "spring",
        otherDetails: ["Manning Publications", 520, 2022],
      },
      {
        image: "images/css-definitive-guide.jpg",
        title: "CSS: The Definitive Guide",
        authors: ["Eric Meyer", "Estelle Weyl"],
        oldPrice: 2209000,
        newPrice: 2049000,
        category: "css",
        otherDetails: ["O'Reilly Media", 1126, 2023],
      },
      {
        image: "images/cpp-crash-course.jpg",
        title: "C++ Crash Course: A Fast-Paced Introduction",
        authors: ["Josh Lospinoso"],
        oldPrice: 949000,
        newPrice: 889000,
        category: "c/cpp",
        otherDetails: ["No Starch Press", 792, 2019],
      },
      {
        image: "images/pro-angular.jpg",
        title: "Pro Angular: Build Powerful and Dynamic Web Apps",
        authors: ["Adam Freeman"],
        oldPrice: 1469000,
        newPrice: 1369000,
        category: "angular",
        otherDetails: ["Apress", 880, 2022],
      },
      {
        image: "images/regular-expression-recipes.jpg",
        title: "Regular Expression Recipes: A Problem-Solution Approach",
        authors: ["Nathan A. Good"],
        oldPrice: 859000,
        newPrice: 799000,
        category: "regex",
        otherDetails: ["Apress", 324, 2004],
      },
      {
        image: "images/sql-cookbook.jpg",
        title: "SQL Cookbook: Query Solutions and Techniques for All SQL Users",
        authors: ["Anthony Molinaro", "Robert de Graaf"],
        oldPrice: 1619000,
        newPrice: 1499000,
        category: "database",
        otherDetails: ["O'Reilly Media", 567, 2020],
      },
      {
        image: "images/fluent-python.jpg",
        title: "Fluent Python: Clear, Concise, and Effective Programming",
        authors: ["Luciano Ramalho"],
        oldPrice: 1959000,
        newPrice: 1819000,
        category: "python",
        otherDetails: ["O'Reilly Media", 1012, 2022],
      },
      {
        image: "images/head-first-java.jpg",
        title: "Head First Java: A Brain-Friendly Guide",
        authors: ["Trisha Gee", "Kathy Sierra", "Bert Bates"],
        oldPrice: 1959000,
        newPrice: 1829000,
        category: "java",
        otherDetails: ["O'Reilly Media", 752, 2022],
      },
      {
        image: "images/cpp-programming-language.jpg",
        title: "The C++ Programming Language (Revised)",
        authors: ["Bjarne Stroustrup"],
        oldPrice: 2089000,
        newPrice: 1969000,
        category: "c/cpp",
        otherDetails: ["Addison-Wesley Professional", 1376, 2013],
      },
      {
        image: "images/csharp-in-one-day.jpg",
        title:
          "Learn C# in One Day and Learn It Well: C# for Beginners with Hands-on Project",
        authors: ["Jamie Chan"],
        oldPrice: 399000,
        newPrice: 329000,
        category: "csharp",
        otherDetails: ["CreateSpace Independent Publishing Platform", 160, 2015],
      },
      {
        image: "images/head-first-c.jpg",
        title: "Head First C: A Brain-Friendly Guide",
        authors: ["Dawn Griffiths", "David Griffiths"],
        oldPrice: 1469000,
        newPrice: 1389000,
        category: "c/cpp",
        otherDetails: ["O'Reilly Media", 629, 2012],
      },
		];
		localStorage.setItem('product',JSON.stringify(productArray));
	}
}


const bestSellerBooks = [
  {
    image: "images/effective-java.jpg",
    title: "Effective Java",
    authors: ["Joshua Bloch"],
    oldPrice: 1449000,
    newPrice: 1249000,
    category: "java",
    otherDetails: ["Addison-Wesley Professional", 416, 2018],
  },
  {
    image: "images/js-the-good-part.jpg",
    title: "Javascript: The Good Parts",
    authors: ["Douglas Crockford"],
    oldPrice: 739000,
    newPrice: 679000,
    category: "javascript",
    otherDetails: ["Yahoo Press", 172, 2008],
  },
  {
    image: "images/programming-typescript.jpg",
    title: "Programming Typescript: Making Your JavaScript Applications Scale",
    authors: ["Boris Cherny"],
    oldPrice: 1369000,
    newPrice: 1269000,
    category: "typescript",
    otherDetails: ["O'Reilly Media", 322, 2019],
  },
  {
    image: "images/head-first-c-sharp.jpg",
    title:
      "Head First C#: A Learner's Guide to Real-World Programming with C# and .Net Core",
    authors: ["Jennifer Greene", "Andrew Stellman"],
    oldPrice: 1719000,
    newPrice: 1599000,
    category: "csharp",
    otherDetails: ["O'Reilly Media", 785, 2021],
  },
  {
    image: "images/spring-in-action.jpg",
    title: "Spring in Action",
    authors: ["Craig Walls"],
    oldPrice: 1699000,
    newPrice: 1449000,
    category: "spring",
    otherDetails: ["Manning Publications", 520, 2022],
  },
  {
    image: "images/css-definitive-guide.jpg",
    title: "CSS: The Definitive Guide",
    authors: ["Eric Meyer", "Estelle Weyl"],
    oldPrice: 2209000,
    newPrice: 2049000,
    category: "css",
    otherDetails: ["O'Reilly Media", 1126, 2023],
  },
  {
    image: "images/cpp-crash-course.jpg",
    title: "C++ Crash Course: A Fast-Paced Introduction",
    authors: ["Josh Lospinoso"],
    oldPrice: 949000,
    newPrice: 889000,
    category: "c/cpp",
    otherDetails: ["No Starch Press", 792, 2019],
  },
  {
    image: "images/pro-angular.jpg",
    title: "Pro Angular: Build Powerful and Dynamic Web Apps",
    authors: ["Adam Freeman"],
    oldPrice: 1469000,
    newPrice: 1369000,
    category: "angular",
    otherDetails: ["Apress", 880, 2022],
  },
  {
    image: "images/regular-expression-recipes.jpg",
    title: "Regular Expression Recipes: A Problem-Solution Approach",
    authors: ["Nathan A. Good"],
    oldPrice: 859000,
    newPrice: 799000,
    category: "regex",
    otherDetails: ["Apress", 324, 2004],
  },
  {
    image: "images/sql-cookbook.jpg",
    title: "SQL Cookbook: Query Solutions and Techniques for All SQL Users",
    authors: ["Anthony Molinaro", "Robert de Graaf"],
    oldPrice: 1619000,
    newPrice: 1499000,
    category: "database",
    otherDetails: ["O'Reilly Media", 567, 2020],
  },
  {
    image: "images/fluent-python.jpg",
    title: "Fluent Python: Clear, Concise, and Effective Programming",
    authors: ["Luciano Ramalho"],
    oldPrice: 1959000,
    newPrice: 1819000,
    category: "python",
    otherDetails: ["O'Reilly Media", 1012, 2022],
  },
  {
    image: "images/head-first-java.jpg",
    title: "Head First Java: A Brain-Friendly Guide",
    authors: ["Trisha Gee", "Kathy Sierra", "Bert Bates"],
    oldPrice: 1959000,
    newPrice: 1829000,
    category: "java",
    otherDetails: ["O'Reilly Media", 752, 2022],
  },
  {
    image: "images/cpp-programming-language.jpg",
    title: "The C++ Programming Language (Revised)",
    authors: ["Bjarne Stroustrup"],
    oldPrice: 2089000,
    newPrice: 1969000,
    category: "c/cpp",
    otherDetails: ["Addison-Wesley Professional", 1376, 2013],
  },
  {
    image: "images/csharp-in-one-day.jpg",
    title:
      "Learn C# in One Day and Learn It Well: C# for Beginners with Hands-on Project",
    authors: ["Jamie Chan"],
    oldPrice: 399000,
    newPrice: 329000,
    category: "csharp",
    otherDetails: ["CreateSpace Independent Publishing Platform", 160, 2015],
  },
  {
    image: "images/head-first-c.jpg",
    title: "Head First C: A Brain-Friendly Guide",
    authors: ["Dawn Griffiths", "David Griffiths"],
    oldPrice: 1469000,
    newPrice: 1389000,
    category: "c/cpp",
    otherDetails: ["O'Reilly Media", 629, 2012],
  },
];

// Danh sách các sản phẩm của phần Well-known
const wellKnownBooks = [
  {
    image: "images/python-crash-course.jpg",
    title:
      "Python Crash Course: A Hands-On, Project-Based Introduction to Programming",
    authors: ["Eric Matthes"],
    oldPrice: 1099000,
    newPrice: 1029000,
    category: "python",
    otherDetails: ["No Starch Press", 552, 2023],
  },
  {
    image: "images/head-first-design-patterns.jpg",
    title:
      "Head First Design Patterns: Building Extensible and Maintainable Object-Oriented Software",
    authors: ["Eric Freeman", "Elisabeth Robson"],
    oldPrice: 1959000,
    newPrice: 1829000,
    category: "design-pattern",
    otherDetails: ["O'Reilly Media", 669, 2021],
  },
  {
    image: "images/eloquent-javascript.jpg",
    title:
      "Eloquent Javascript, 3rd Edition: A Modern Introduction to Programming",
    authors: ["Marijn Haverbeke"],
    oldPrice: 979000,
    newPrice: 909000,
    category: "javascript",
    otherDetails: [""],
  },
  {
    image: "images/effective-java.jpg",
    title: "Effective Java",
    authors: ["Joshua Bloch"],
    oldPrice: 1449000,
    newPrice: 1249000,
    category: "java",
    otherDetails: ["No Starch Press", 472, 2018],
  },
  {
    image: "images/dsa-made-easy.jpg",
    title:
      "Data Structures and Algorithms Made Easy: Data Structures and Algorithmic Puzzles",
    authors: ["Narasimha Karumanchi"],
    oldPrice: 1129000,
    newPrice: 989000,
    category: "dsa",
    otherDetails: ["Careermonk Publications", 418, 2016],
  },
  {
    image: "images/head-first-ooad.jpg",
    title:
      "Head First Object-Oriented Analysis and Design: A Brain Friendly Guide to OOA&D",
    authors: ["Brett McLaughlin", "Gary Pollice", "David West"],
    oldPrice: 1719000,
    newPrice: 1599000,
    category: "ooad",
    otherDetails: ["O'Reilly Media", 634, 2007],
  },
  {
    image: "images/effective-c.jpg",
    title: "Effective C: An Introduction to Professional C Programming",
    authors: ["Robert C Seacord"],
    oldPrice: 1229000,
    newPrice: 1139000,
    category: "c/cpp",
    otherDetails: ["No Starch Press", 272, 2020],
  },
  {
    image: "images/spring-in-action.jpg",
    title: "Spring in Action",
    authors: ["Craig Walls"],
    oldPrice: 1699000,
    newPrice: 1449000,
    category: "spring",
    otherDetails: ["Manning Publications", 520, 2022],
  },
  {
    image: "images/practical-sql.jpg",
    title: "Practical SQL: A Beginner's Guide to Storytelling with Data",
    authors: ["Anthony Debarros"],
    oldPrice: 979000,
    newPrice: 909000,
    category: "database",
    otherDetails: ["No Starch Press", 464, 2022],
  },
  {
    image: "images/javascript-cookbook.jpg",
    title: "JavaScript Cookbook: Programming the Web",
    authors: ["Matthew MacDonald", "Shelley Powers", "Adam Scott"],
    oldPrice: 1959000,
    newPrice: 1819000,
    category: "javascript",
    otherDetails: ["O'Reilly Media", 535, 2021],
  },
  {
    image: "images/mastering-regex.jpg",
    title:
      "Mastering Regular Expressions: Understand Your Data and Be More Productive",
    authors: ["Jeffrey Friedl"],
    oldPrice: 1469000,
    newPrice: 1369000,
    category: "regex",
    otherDetails: ["O'Reilly Media", 542, 2006],
  },
  {
    image: "images/algorithms-to-live-by.jpg",
    title: "Algorithms to Live by: The Computer Science of Human Decisions",
    authors: ["Brian Christian", "Tom Griffiths"],
    oldPrice: 489000,
    newPrice: 449000,
    category: "dsa",
    otherDetails: ["Holt McDougal", 368, 2017],
  },
  {
    image: "images/css-definitive-guide.jpg",
    title: "CSS: The Definitive Guide",
    authors: ["Eric Meyer", "Estelle Weyl"],
    oldPrice: 2209000,
    newPrice: 2049000,
    category: "css",
    otherDetails: ["O'Reilly Media", 1126, 2023],
  },
  {
    image: "images/java-beginners-guide.jpg",
    title: "Java: A Beginner's Guide",
    authors: ["Herbert Schildt"],
    oldPrice: 979000,
    newPrice: 909000,
    category: "java",
    otherDetails: ["McGraw-Hill Companies", 752, 2022],
  },
  {
    image: "images/cpp-programming-language.jpg",
    title: "The C++ Programming Language (Revised)",
    authors: ["Bjarne Stroustrup"],
    oldPrice: "2089000",
    newPrice: "1969000",
    category: "c/cpp",
    otherDetails: ["Addison-Wesley Professional", 1376, 2013],
  },
];

// Hàm để định dạng số nguyên thành chuỗi giá tiền
const intToPriceString = (priceInt) =>
  priceInt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " đ";

// Hàm tạo một div product cho một sản phẩm book
const createProductDiv = (book) => {
  // tao div product (div bao quat ben ngoai)
  const productDiv = document.createElement("div"); //tạo thẻ div
  productDiv.classList.add("product"); //thêm class "product" vào trong phần tử div được tạo ở bước trước.

  // tao div product-img
  const productImg = document.createElement("div");
  productImg.classList.add("product-image");
  productImg.innerHTML = `<img src="${book.image}" alt="${book.title}" />`;

  // tao h2 book-title
  const productTitle = document.createElement("h2");
  productTitle.classList.add("book-title");
  productTitle.innerText = book.title;

  // tao h3 author
  const productAuthors = document.createElement("h3");
  productAuthors.classList.add("author");
  for (let i = 0; i < book.authors.length - 1; ++i) {
    productAuthors.append(book.authors[i], " & ");
  }
  productAuthors.append(book.authors[book.authors.length - 1]);

  // tao div price
  const productPrice = document.createElement("div");
  productPrice.classList.add("price");

  const oldPrice = document.createElement("h4");
  oldPrice.classList.add("old-price");
  oldPrice.append(intToPriceString(book.oldPrice));

  const newPrice = document.createElement("h4");
  newPrice.classList.add("new-price");
  newPrice.append(intToPriceString(book.newPrice));

  productPrice.append(oldPrice, newPrice);

  // tao nut button add-to-cart
  const addToCartIcon = document.createElement("ion-icon");
  addToCartIcon.classList.add("cart-icon");
  addToCartIcon.setAttribute("name", "cart-outline");

  const addToCartSpan = document.createElement("span");
  addToCartSpan.innerText = "Thêm vào giỏ";

  const addToCart = document.createElement("button");
  addToCart.append(addToCartIcon, addToCartSpan);
  addToCart.classList.add("add-to-cart");

  // them cac thanh phan vao div bao quat
  productDiv.append(
    productImg,
    productTitle,
    productAuthors,
    productPrice,
    addToCart
  );

  // tra ve div bao quat
  return productDiv;
};

// Thêm sách vào vùng chứa best-seller
const bestSellerProductsContainer = document.querySelector(
  ".best-seller .products"
);
for (book of bestSellerBooks) {
  bestSellerProductsContainer.append(createProductDiv(book));
}

// Thêm sách vào vùng chứa well-known
const wellKnownProductsContainer = document.querySelector(
  ".well-known .products"
); //

for (book of wellKnownBooks) {
  wellKnownProductsContainer.append(createProductDiv(book));
}

//-------------------------------------------------------
// Bổ sung sub-header
const subheaderItemTitles = [
  "Algorithms & Data Structures",
  "Angular",
  "C/C++",
  "C#",
  "CSS",
  "Database",
  "Java",
  "JavaScript",
  "Object-oriented Analysis & Design",
  "Python",
  "Regex",
  "Spring",
  "TypeScript",
];
const subheaderItemsContainer = document.querySelector(".sub-header");
// Thêm các mục vào sub-header
for (subheaderItemTitle of subheaderItemTitles) {
  const subheaderItemLink = document.createElement("a");
  subheaderItemLink.innerText = subheaderItemTitle;
  subheaderItemLink.classList.add("sub-header-item");
  subheaderItemLink.setAttribute("href", "");
  subheaderItemsContainer.append(subheaderItemLink);
}

/********************************************************
            PHẦN NÀY ĐỂ PHÂN TRANG
********************************************************/

const booksPerPage = 8;

// Hàm để phân trang cho một vùng chứa sản phẩm
const paginate = (containerSelector, books) => {
  // Chia mảng books thành các trang
  const pages = [];
  for (let i = 0; i < books.length; i += booksPerPage) {
    pages.push(books.slice(i, i + booksPerPage));
  }

  // Tạo các liên kết phân trang
  const pagination = document.querySelector(containerSelector + " .pagination");
  pagination.innerHTML = ""; // Xóa liên kết phân trang hiện tại
  for (let i = 0; i < pages.length; i++) {
    const link = document.createElement("a");
    link.href = "#";
    link.innerText = i + 1;
    link.classList.add("paginating-link");
    link.addEventListener("click", function (event) {
      event.preventDefault();
      displayPage(containerSelector, pages[i]);
    });
    pagination.appendChild(link);
  }

  // Hiển thị trang đầu tiên
  displayPage(containerSelector, pages[0]);
};

// Hàm để hiển thị sách cho trang hiện tại
const displayPage = (containerSelector, books) => {
  const productsContainer = document.querySelector(
    containerSelector + " .products"
  );
  productsContainer.innerHTML = ""; // Xóa sách trang hiện tại
  for (let book of books) {
    productsContainer.append(createProductDiv(book)); // Thêm sách mới
  }
};

// Phân trang cho bestSellerBooks và wellKnownBooks
paginate(".best-seller", bestSellerBooks);
paginate(".well-known", wellKnownBooks);
