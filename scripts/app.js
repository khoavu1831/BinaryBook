// Hàm khởi tạo sản phẩm
const createProducts = () => {
  // Nếu không thấy các mảng sản phẩm trong localStorage thì tạo nó và đẩy vào
  if (localStorage.getItem("bestSellerBooks") === null) {
    // Danh sách các sản phẩm của phần Best Seller
    const bestSellerBooks = [
      {
        id: "bs1",
        image: "images/effective-java.jpg",
        title: "Effective Java",
        authors: ["Joshua Bloch"],
        oldPrice: 1449000,
        newPrice: 1249000,
        category: "java",
        otherDetails: ["Addison-Wesley Professional", 416, 2018],
      },
      {
        id: "bs2",
        image: "images/js-the-good-part.jpg",
        title: "Javascript: The Good Parts",
        authors: ["Douglas Crockford"],
        oldPrice: 739000,
        newPrice: 679000,
        category: "javascript",
        otherDetails: ["Yahoo Press", 172, 2008],
      },
      {
        id: "bs3",
        image: "images/programming-typescript.jpg",
        title:
          "Programming Typescript: Making Your JavaScript Applications Scale",
        authors: ["Boris Cherny"],
        oldPrice: 1369000,
        newPrice: 1269000,
        category: "typescript",
        otherDetails: ["O'Reilly Media", 322, 2019],
      },
      {
        id: "bs4",
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
        id: "bs5",
        image: "images/css-definitive-guide.jpg",
        title: "CSS: The Definitive Guide",
        authors: ["Eric Meyer", "Estelle Weyl"],
        oldPrice: 2209000,
        newPrice: 2049000,
        category: "css",
        otherDetails: ["O'Reilly Media", 1126, 2023],
      },
      {
        id: "bs6",
        image: "images/cpp-crash-course.jpg",
        title: "C++ Crash Course: A Fast-Paced Introduction",
        authors: ["Josh Lospinoso"],
        oldPrice: 949000,
        newPrice: 889000,
        category: "c/cpp",
        otherDetails: ["No Starch Press", 792, 2019],
      },
      {
        id: "bs7",
        image: "images/regular-expression-recipes.jpg",
        title: "Regular Expression Recipes: A Problem-Solution Approach",
        authors: ["Nathan A. Good"],
        oldPrice: 859000,
        newPrice: 799000,
        category: "regex",
        otherDetails: ["Apress", 324, 2004],
      },
      {
        id: "bs8",
        image: "images/sql-cookbook.jpg",
        title: "SQL Cookbook: Query Solutions and Techniques for All SQL Users",
        authors: ["Anthony Molinaro", "Robert de Graaf"],
        oldPrice: 1619000,
        newPrice: 1499000,
        category: "database",
        otherDetails: ["O'Reilly Media", 567, 2020],
      },
      {
        id: "bs9",
        image: "images/fluent-python.jpg",
        title: "Fluent Python: Clear, Concise, and Effective Programming",
        authors: ["Luciano Ramalho"],
        oldPrice: 1959000,
        newPrice: 1819000,
        category: "python",
        otherDetails: ["O'Reilly Media", 1012, 2022],
      },
      {
        id: "bs10",
        image: "images/head-first-java.jpg",
        title: "Head First Java: A Brain-Friendly Guide",
        authors: ["Trisha Gee", "Kathy Sierra", "Bert Bates"],
        oldPrice: 1959000,
        newPrice: 1829000,
        category: "java",
        otherDetails: ["O'Reilly Media", 752, 2022],
      },
      {
        id: "bs11",
        image: "images/cpp-programming-language.jpg",
        title: "The C++ Programming Language (Revised)",
        authors: ["Bjarne Stroustrup"],
        oldPrice: 2089000,
        newPrice: 1969000,
        category: "c/cpp",
        otherDetails: ["Addison-Wesley Professional", 1376, 2013],
      },
      {
        id: "bs12",
        image: "images/csharp-in-one-day.jpg",
        title:
          "Learn C# in One Day and Learn It Well: C# for Beginners with Hands-on Project",
        authors: ["Jamie Chan"],
        oldPrice: 399000,
        newPrice: 329000,
        category: "csharp",
        otherDetails: [
          "CreateSpace Independent Publishing Platform",
          160,
          2015,
        ],
      },
      {
        id: "bs13",
        image: "images/head-first-c.jpg",
        title: "Head First C: A Brain-Friendly Guide",
        authors: ["Dawn Griffiths", "David Griffiths"],
        oldPrice: 1469000,
        newPrice: 1389000,
        category: "c/cpp",
        otherDetails: ["O'Reilly Media", 629, 2012],
      },
      {
        id: "bs14",
        image: "images/css-in-depth.jpg",
        title: "CSS in Depth",
        authors: ["Keith J. Grant"],
        oldPrice: 1199000,
        newPrice: 1079000,
        category: "css",
        otherDetails: ["Manning Publications", 375, 2018],
      },
      {
        id: "bs15",
        image: "images/automate-the-boring-stuff.jpg",
        title: "Automate the Boring Stuff with Python",
        authors: ["Al Sweigart"],
        oldPrice: 1079000,
        newPrice: 999000,
        category: "python",
        otherDetails: ["No Starch Press", 592, 2023],
      },
    ];
    localStorage.setItem("bestSellerBooks", JSON.stringify(bestSellerBooks));
  }

  if (localStorage.getItem("wellKnownBooks") === null) {
    // Danh sách các sản phẩm của phần Well-known
    const wellKnownBooks = [
      {
        id: "wk1",
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
        id: "wk2",
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
        id: "wk3",
        image: "images/eloquent-javascript.jpg",
        title: "Eloquent Javascript: A Modern Introduction to Programming",
        authors: ["Marijn Haverbeke"],
        oldPrice: 979000,
        newPrice: 909000,
        category: "javascript",
        otherDetails: ["No Starch Press", 472, 2018],
      },
      {
        id: "wk4",
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
        id: "wk5",
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
        id: "wk6",
        image: "images/effective-c.jpg",
        title: "Effective C: An Introduction to Professional C Programming",
        authors: ["Robert C Seacord"],
        oldPrice: 1229000,
        newPrice: 1139000,
        category: "c/cpp",
        otherDetails: ["No Starch Press", 272, 2020],
      },
      {
        id: "wk7",
        image: "images/practical-sql.jpg",
        title: "Practical SQL: A Beginner's Guide to Storytelling with Data",
        authors: ["Anthony Debarros"],
        oldPrice: 979000,
        newPrice: 909000,
        category: "database",
        otherDetails: ["No Starch Press", 464, 2022],
      },
      {
        id: "wk8",
        image: "images/javascript-cookbook.jpg",
        title: "JavaScript Cookbook: Programming the Web",
        authors: ["Matthew MacDonald", "Shelley Powers", "Adam Scott"],
        oldPrice: 1959000,
        newPrice: 1819000,
        category: "javascript",
        otherDetails: ["O'Reilly Media", 535, 2021],
      },
      {
        id: "wk9",
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
        id: "wk10",
        image: "images/algorithms-to-live-by.jpg",
        title: "Algorithms to Live by: The Computer Science of Human Decisions",
        authors: ["Brian Christian", "Tom Griffiths"],
        oldPrice: 489000,
        newPrice: 449000,
        category: "dsa",
        otherDetails: ["Holt McDougal", 368, 2017],
      },
      {
        id: "wk11",
        image: "images/java-beginners-guide.jpg",
        title: "Java: A Beginner's Guide",
        authors: ["Herbert Schildt"],
        oldPrice: 979000,
        newPrice: 909000,
        category: "java",
        otherDetails: ["McGraw-Hill Companies", 752, 2022],
      },
      {
        id: "wk12",
        image: "images/javascript-the-definitive-guide.jpg",
        title:
          "Javascript: The Definitive Guide - Master the World's Most-Used Programming Language",
        authors: ["David Flanagan"],
        oldPrice: 1929000,
        newPrice: 1789000,
        category: "javascript",
        otherDetails: ["O'Reilly Media", 704, 2020],
      },
      {
        id: "wk13",
        image: "images/postgresql-up-and-running.jpg",
        title:
          "PostgreSQL: Up and Running - A Practical Guide to the Advanced Open Source Database",
        authors: ["Leo Hsu", "Regina Obe"],
        oldPrice: 1329000,
        newPrice: 1269000,
        category: "database",
        otherDetails: ["O'Reilly Media", 312, 2017],
      },
      {
        id: "wk14",
        image: "images/elements-reusable-object-oriented.jpg",
        title: "Design Patterns: Elements of Reusable Object-Oriented Software",
        authors: [
          "Erich Gamma",
          "Richard Helm",
          "Ralph Johnson",
          "John Vlissides",
          "Grady Booch",
        ],
        oldPrice: 1549000,
        newPrice: 1449000,
        category: "design-pattern",
        otherDetails: ["Addison-Wesley Professional", 416, 1994],
      },
      {
        id: "wk15",
        image: "images/learning-typescript.jpg",
        title:
          "Learning TypeScript: Enhance Your Web Development Skills Using Type-Safe JavaScript",
        authors: ["Josh Goldberg"],
        oldPrice: 1349000,
        newPrice: 1249000,
        category: "typescript",
        otherDetails: ["O'Reilly Media", 318, 2022],
      },
    ];
    localStorage.setItem("wellKnownBooks", JSON.stringify(wellKnownBooks));
  }
};
// Hàm khởi tạo tài khoản admin
const createAdmin = () => {
  // Nếu không thông tin tài khoản admin trong localStorage thì tạo nó và đẩy vào
  if (localStorage.getItem("users") === null) {
    const users = [];
    const user = {
      username: "admin",
      password: "admin",
      fullName: "Mai Trần Tuấn Kiệt",
      address: "273 An Dương Vương, P3, Q5, TP.HCM",
      phone: "0559413699",
      signupSince: "04-06-2004",
    };
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
  }
};
// Hàm kiểm tra xem một chuỗi có phải là một số điện thoại hợp lệ hay không
const isValidPhoneNumber = (phoneNumber) => {
  const regex = /^0[35789]\d{8}$/;
  return regex.test(phoneNumber);
};
// Hàm kiểm tra xem một chuỗi có phải là một username hợp lệ hay không
const isValidUsername = (username) => {
  const regex = /^[a-zA-Z]\w{5,17}$/;
  return regex.test(username);
};
// Hàm kiểm tra xem một chuỗi có phải là một password hợp lệ hay không
const isValidPassword = (password) => {
  const regex = /^[A-Za-z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,24}$/;
  return regex.test(password);
};
// Hàm để định dạng số nguyên thành chuỗi giá tiền
const intToPriceString = (priceInt) =>
  priceInt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " đ";
// Loại bỏ ký hiệu tiền tệ và dấu chấm, sau đó chuyển đổi chuỗi thành số nguyên
const priceStringToInt = (priceString) =>
  parseInt(priceString.replace(" đ", "").replace(/\./g, ""));
// Hàm tạo một div product cho một sản phẩm book
const createProductDiv = (book) => {
  // tao div product (div bao quat ben ngoai)
  const productDiv = document.createElement("div");
  productDiv.classList.add("product");
  productDiv.id = book.id; // Thêm id của sách vào div.product
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
  addToCartIcon.setAttribute("name", "cart");
  addToCartIcon.style.fontWeight = "bold";

  const addToCartSpan = document.createElement("span");
  addToCartSpan.innerText = "Thêm vào giỏ";
  addToCartSpan.style.padding = "0 .2rem";

  const addToCart = document.createElement("button");
  addToCart.append(addToCartIcon, addToCartSpan);
  addToCart.classList.add("add-to-cart");
  addToCart.addEventListener("click", () => {
    if (!localStorage.getItem("activeUser")) {
      alert("Bạn phải đăng nhập để mua hàng!");
      return;
    }

    let cart = [];
    if (localStorage.getItem("cart"))
      cart = JSON.parse(localStorage.getItem("cart"));

    addedBook = book;
    // Kiểm tra nếu đã có sản phẩm này trong giỏ hàng
    if (cart.some((book) => JSON.stringify(book) === JSON.stringify(addedBook)))
      alert("Bạn đã thêm sản phẩm này vào giỏ từ trước rồi :))");
    else {
      cart.unshift(addedBook);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert(
        `${addedBook.title} đã được thêm vào giỏ! Hãy kiểm tra giỏ hàng và nhận sách ngay!`
      );
    }
  });

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
// Hàm để thêm sách vào vùng chứa
const addBooksToContainer = (containerSelector, books) => {
  const productsContainer = document.querySelector(containerSelector);
  for (book of books) {
    productsContainer.append(createProductDiv(book));
  }
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
// Hàm để phân trang cho một vùng chứa sản phẩm
const paginate = (containerSelector, books, booksPerPage) => {
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
    link.addEventListener("click", (event) => {
      event.preventDefault();

      // Xóa kiểu CSS của trang hiện tại
      const currentLink = pagination.querySelector(".current-page");
      if (currentLink) {
        currentLink.classList.remove("current-page");
      }

      // Cập nhật trang hiện tại và áp dụng kiểu CSS
      currentPage = i;
      link.classList.add("current-page");

      displayPage(containerSelector, pages[i]);
    });
    pagination.appendChild(link); // Thêm liên kết phân trang vào
  }

  // Hiển thị trang đầu tiên
  displayPage(containerSelector, pages[0]);
  pagination.querySelector(".paginating-link").classList.add("current-page"); // Áp dụng kiểu CSS cho trang đầu tiên
};
// Hàm hiển thị sách lên trang web
const showProducts = () => {
  // Thêm sách vào vùng chứa best-seller-----------------
  const bestSellerBooks = JSON.parse(localStorage.getItem("bestSellerBooks"));
  addBooksToContainer(".best-seller .products", bestSellerBooks);

  // Thêm sách vào vùng chứa well-known--------------------
  const wellKnownBooks = JSON.parse(localStorage.getItem("wellKnownBooks"));
  addBooksToContainer(".well-known .products", wellKnownBooks);

  // PHẦN NÀY ĐỂ PHÂN TRANG
  const width = window.innerWidth;
  let currentPage = 0; // Biến để lưu trữ trang hiện tại
  let booksPerPage = 8; // Số sách tối đa cho mỗi trang
  if (width < 480) {
    booksPerPage = 2;
  } else if (width < 768) {
    booksPerPage = 4;
  } else if (width < 1024) {
    booksPerPage = 6;
  }
  // Thay đổi số sách cho phù hợp với kích thước màn hình
  window.addEventListener("resize", () => {
    const width = window.innerWidth;
    if (width <= 480) booksPerPage = 3;
    else if (width <= 768) booksPerPage = 4;
    else if (width <= 1024) booksPerPage = 6;
    else booksPerPage = 8;

    // Gọi lại hàm paginate sau khi booksPerPage thay đổi
    paginate(".best-seller", bestSellerBooks, booksPerPage);
    paginate(".well-known", wellKnownBooks, booksPerPage);
  });

  // Phân trang cho bestSellerBooks và wellKnownBooks
  paginate(".best-seller", bestSellerBooks, booksPerPage);
  paginate(".well-known", wellKnownBooks, booksPerPage);
  //----------------------------end
};

// PHẦN NÀY ĐỂ HIỂN THỊ SUBHEADER VÀ LINKCOLUMN CHO TRANG WEB
// Hàm bổ sung sub-header
const createSubheader = () => {
  const subheaderItemTitles = [
    ["Algorithms & Data Structures", "dsa"],
    ["C/C++", "c/cpp"],
    ["C#", "csharp"],
    ["CSS", "css"],
    ["Database", "database"],
    ["Design Pattern", "design-pattern"],
    ["Java", "java"],
    ["JavaScript", "javascript"],
    ["Object-oriented Analysis & Design", "ooad"],
    ["Python", "python"],
    ["Regex", "regex"],
    ["TypeScript", "typescript"],
  ];
  const subheaderItemsContainer = document.querySelector(".sub-header");
  // Thêm các mục vào sub-header
  const nav = document.createElement("nav");
  nav.classList.add("sub-header-nav");
  for (subheaderItemTitle of subheaderItemTitles) {
    const subheaderItemLink = document.createElement("a");
    subheaderItemLink.innerText = subheaderItemTitle[0];
    const category = subheaderItemTitle[1];
    subheaderItemLink.classList.add("sub-header-item");
    subheaderItemLink.setAttribute("href", "");
    nav.append(subheaderItemLink);

    // Thêm sự kiện khi click
    subheaderItemLink.addEventListener("click", (event) => {
      event.preventDefault();

      const bestSellerBooks = JSON.parse(
        localStorage.getItem("bestSellerBooks")
      );
      const wellKnownBooks = JSON.parse(localStorage.getItem("wellKnownBooks"));
      const allBooks = [...bestSellerBooks, ...wellKnownBooks];

      const filteredBooks = allBooks.filter(
        (book) => book.category === category
      );

      showSearchResults(filteredBooks);
    });
  }
  subheaderItemsContainer.append(nav);
};
// Hàm bổ sung link-column
const createLinkColumn = () => {
  const linkColumnItems = [
    ["Giới thiệu", "#"],
    ["Hỗ trợ & Giúp đỡ", "#"],
    ["Liên hệ với chúng tôi", "#"],
    ["Điều khoản", "#"],
    ["Nhà đầu tư", "#"],
    ["Đơn vị liên kết", "#"],
    ["Cài đặt cookie", "#"],
    ["Sơ đồ trang web", "#"],
    ["Chính sách về Quyền riêng tư", "#"],
  ];
  const linkColumnItemsContainer = document.querySelector(".link-column");
  // Thêm các mục vào link-column
  for (item of linkColumnItems) {
    const link = document.createElement("a");
    link.setAttribute("href", item[1]);
    link.innerText = item[0];

    const li = document.createElement("li");
    li.append(link);

    linkColumnItemsContainer.append(li);
  }
};

// HÀM NÀY ĐỂ THÊM SỰ KIỆN XEM THÊM THÔNG TIN SÁCH KHI NGƯỜI DÙNG CLICK VÀO ẢNH
const addShowMoreDetailsEvent = (ctn) => {
  const bestSellerBooks = JSON.parse(localStorage.getItem("bestSellerBooks"));
  const wellKnownBooks = JSON.parse(localStorage.getItem("wellKnownBooks"));

  const container = document.querySelector(ctn);
  container.addEventListener("click", (event) => {
    const img = event.target.closest(".product-image");
    if (img) {
      document.querySelector(".hide-screen").style.display = "block";
      const product = img.closest(".product");
      const bookId = product.id; // Lấy id của sách từ id của div.product
      const book = [...bestSellerBooks, ...wellKnownBooks].find(
        (b) => b.id === bookId
      ); // Tìm đối tượng sách tương ứng

      const fdcImgContainer = document.createElement("div");
      fdcImgContainer.classList.add("fdc-img-container");
      fdcImgContainer.innerHTML = `<img src="${book.image}" alt="${book.title}">`;

      const closeBtn = document.createElement("button");
      closeBtn.classList.add("close-btn");
      closeBtn.innerText = "Ẩn thông tin";

      const firstDetailsContainer = document.createElement("div");
      firstDetailsContainer.classList.add("first-details-container");
      firstDetailsContainer.append(fdcImgContainer, closeBtn);

      const secondDetailsContainer = document.createElement("div");
      secondDetailsContainer.classList.add("second-details-container");
      secondDetailsContainer.innerHTML = `
        <h2 class="details-big-text">${book.title}</h2>
        <p class="details-normal-text">Tác giả: ${book.authors.join(", ")}</p>
        <p class="details-normal-text">Nhà xuất bản: ${book.otherDetails[0]}</p>
        <p class="details-normal-text">Năm xuất bản: ${book.otherDetails[2]}</p>
        <p class="details-normal-text">Số trang: ${book.otherDetails[1]}</p>
        <p class="details-normal-text">Giá sách: ${intToPriceString(
          book.newPrice
        )}</p>
      `;

      const moreDetails = document.createElement("div");
      moreDetails.classList.add("details", "normal-box");
      moreDetails.append(firstDetailsContainer, secondDetailsContainer);
      container.append(moreDetails); // hiển thị nó

      closeBtn.addEventListener("click", () => {
        moreDetails.remove();
        document.querySelector(".hide-screen").style.display = "none";
      });
    }
  });
};

// PHẦN NÀY CHO CHỨC NĂNG TÌM KIẾM
// Hàm tìm kiếm sách theo từ khóa, loại và khoảng giá
const searchBooks = (
  keyword,
  category = "all",
  fromPrice = "0",
  toPrice = "999999999"
) => {
  const bestSellerBooks = JSON.parse(localStorage.getItem("bestSellerBooks"));
  const wellKnownBooks = JSON.parse(localStorage.getItem("wellKnownBooks"));
  fromPrice = parseInt(fromPrice);
  toPrice = parseInt(toPrice);
  const allBooks = [...bestSellerBooks, ...wellKnownBooks];
  let filteredBooks = allBooks; // Đổi tên biến lọc theo category thành filteredBooks
  if (category !== "all") {
    filteredBooks = allBooks.filter((book) => {
      return book.category === category;
    });
  }
  return filteredBooks.filter(
    (book) =>
      (book.title.toLowerCase().includes(keyword.toLowerCase()) ||
        book.authors.some((author) =>
          author.toLowerCase().includes(keyword.toLowerCase())
        )) &&
      book.newPrice >= fromPrice &&
      book.newPrice <= toPrice
  );
};
// Hàm hiển thị kết quả tìm kiếm
const showSearchResults = (books) => {
  // div.saf-area
  const input = document.createElement("input");
  input.classList.add("input-search");
  input.setAttribute("type", "text");
  input.setAttribute(
    "placeholder",
    "Tìm theo tên sách hoặc tên tác giả, sử dụng bộ lọc nếu cần"
  );

  const btn = document.createElement("button");
  btn.innerText = "Tìm kiếm";

  const closeBtn = document.createElement("button");
  closeBtn.classList.add("signin-close-button");
  closeBtn.innerText = "+";

  const searchForm = document.createElement("form");
  searchForm.classList.add("search-box");
  searchForm.append(input, btn);

  const filter = document.createElement("div");
  filter.classList.add("filter");
  filter.innerHTML = `
    <select class="filter-category">
      <option value="all" selected="">Tất cả</option>
      <option value="dsa">Algorithms & Data Structures</option>
      <option value="c/cpp">C/C++</option>
      <option value="csharp">C#</option>
      <option value="database">Database</option>
      <option value="design-pattern">Design Pattern</option>
      <option value="database">Database</option>
      <option value="java">Java</option>
      <option value="javascript">JavaScript</option>
      <option value="ooad">Object-oriented Analysis & Design</option>
      <option value="python">Python</option>
      <option value="regex">Regex</option>
      <option value="typescript">TypeScript</option>
    </select>
    <input class="filter-price" type="number" min="0" id="from-price" placeholder="Từ (VNĐ)">—
    <input class="filter-price" type="number" min="0" id="to-price" placeholder="Đến (VNĐ)">`;

  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const keyword = searchForm.querySelector(".input-search").value;
    const category = filter.querySelector(".filter-category").value;
    let fromPrice = filter.querySelector("#from-price").value;
    let toPrice = filter.querySelector("#to-price").value;
    if (!fromPrice && !toPrice) {
      fromPrice = "0";
      toPrice = "999999999";
    }

    const books = searchBooks(keyword, category, fromPrice, toPrice);

    showSearchResults(books);
    searchResults.remove();
  });

  const safArea = document.createElement("div");
  safArea.classList.add("saf-area");
  safArea.append(searchForm, filter, closeBtn);

  // div.saf-products
  const products = document.createElement("div");
  products.classList.add("saf-products");
  for (let book of books) {
    products.append(createProductDiv(book));
  }

  // section.search-and-filter
  const searchResults = document.createElement("section");
  searchResults.classList.add("search-and-filter", "full-screen-box");
  searchResults.append(safArea, products);
  document.querySelector(".main").prepend(searchResults);

  // close-button
  closeBtn.addEventListener("click", () => {
    searchResults.remove();
  });
};

// PHẦN NÀY CỦA CHỨC NĂNG ĐĂNG NHẬP ĐĂNG KÝ
// Hàm thực hiện đăng nhập
const signin = (event) => {
  event.preventDefault();

  const signinSection = document.querySelector(
    "section.signin-section.normal-box"
  );
  const errorsArea = signinSection.querySelector(".show-errors");

  const form = signinSection.querySelector(".signin-main form");
  let username = form.querySelector("#username").value;
  let password = form.querySelector("#password").value;

  // Kiểm tra nếu có trường bị bỏ trống
  if (!username || !password) {
    if (errorsArea.querySelector("#empty-field")) {
      return false;
    }

    const emptyField = document.createElement("li");
    emptyField.id = "empty-field";
    emptyField.innerHTML =
      '<ion-icon name="alert-circle-outline" class="error-icon"></ion-icon>Không được bỏ trống bất cứ trường nào!';

    errorsArea.append(emptyField);
    errorsArea.style.display = "block";

    return false;
  } else {
    errorsArea.innerHTML = "";
    errorsArea.style.display = "none";
  }

  const users = JSON.parse(localStorage.getItem("users"));
  for (let user of users)
    if (username === user.username && password === user.password) {
      signinSection.remove();
      // set active user
      localStorage.setItem("activeUser", JSON.stringify(user));
      // set cart
      localStorage.setItem("cart", JSON.stringify([]));
      // reload
      window.location.reload(true);
      return true;
    }

  if (!errorsArea.querySelector("#incorrect-input")) {
    const incorrectInput = document.createElement("li");
    incorrectInput.id = "incorrect-input";
    incorrectInput.innerHTML =
      '<ion-icon name="alert-circle-outline" class="error-icon"></ion-icon>Kiểm tra lại thông tin đăng nhập!';
    errorsArea.append(incorrectInput);
    errorsArea.style.display = "block";
  }

  return false;
};
// Hàm để hiển thị phần đăng nhập
const showSigninSection = () => {
  document.querySelector(".hide-screen").style.display = "block";
  // signin-header
  const title = document.createElement("h1");
  title.innerText = "Chào mừng bạn quay trở lại!";
  const closeBtn = document.createElement("button");
  closeBtn.classList.add("signin-close-button");
  closeBtn.innerText = "+";

  const header = document.createElement("header");
  header.classList.add("signin-header");
  header.append(title);

  // signin-main
  const form = document.createElement("form");
  form.innerHTML = `
    <ul class="show-errors"></ul>
    <label for="username">Nhập tên đăng nhập:</label>
    <input type="text" placeholder="Tên đăng nhập" id="username" />
    <label for="password">Nhập mật khẩu:</label>
    <input type="password" placeholder="Mật khẩu" id="password" />
    <input type="submit" value="Đăng nhập ngay" class="signin-btn"/>
`;

  const main = document.createElement("main");
  main.classList.add("signin-main");
  main.append(form);

  // signin-footer
  const toSignup = document.createElement("p");
  toSignup.innerText = "Chưa có tài khoản? Nhấn vào đây để đăng ký";

  const footer = document.createElement("footer");
  footer.classList.add("signin-footer");
  footer.append(toSignup);

  const signinSection = document.createElement("section");
  signinSection.classList.add("signin-section", "normal-box");
  signinSection.append(closeBtn, header, main, footer);
  document.body.prepend(signinSection);

  closeBtn.addEventListener("click", () => {
    signinSection.remove();
    document.querySelector(".hide-screen").style.display = "none";
  });

  // sự kiện của nút Đăng nhập ngay
  signinSection.querySelector(".signin-btn").addEventListener("click", signin);

  toSignup.addEventListener("click", () => {
    signinSection.remove();
    showSignupSection();
  });
};
// Hàm thực hiện đăng ký
const signup = (event) => {
  event.preventDefault();

  const signupSection = document.querySelector(
    "section.signin-section.normal-box"
  );

  const errorsArea = signupSection.querySelector(".show-errors");

  const fullName = signupSection.querySelector("#fullName").value;
  const address = signupSection.querySelector("#address").value;
  const phone = signupSection.querySelector("#phone").value;
  const username = signupSection.querySelector("#username").value;
  const password = signupSection.querySelector("#password").value;
  const repassword = signupSection.querySelector("#repassword").value;

  // Kiểm tra nếu có bất kỳ trường nào bị bỏ trống
  if (
    !fullName ||
    !address ||
    !phone ||
    !username ||
    !password ||
    !repassword
  ) {
    if (errorsArea.querySelector("#empty-field")) {
      return false;
    }

    const emptyField = document.createElement("li");
    emptyField.id = "empty-field";
    emptyField.innerHTML =
      '<ion-icon name="alert-circle-outline" class="error-icon"></ion-icon>Không được bỏ trống bất cứ trường nào!';

    errorsArea.append(emptyField);
    errorsArea.style.display = "block";

    return false;
  } else {
    errorsArea.innerHTML = "";
    errorsArea.style.display = "none";
  }

  // Kiểm tra nếu số điện thoại không hợp lệ
  if (!isValidPhoneNumber(phone)) {
    if (errorsArea.querySelector("#invalid-phone-number")) {
      return false;
    }

    const invalidPhoneNumber = document.createElement("li");
    invalidPhoneNumber.id = "invalid-phone-number";
    invalidPhoneNumber.innerHTML =
      '<ion-icon name="alert-circle-outline" class="error-icon"></ion-icon>Số điện thoại không hợp lệ! Xin lưu ý rằng bạn không thể vượt qua lớp bảo mật của chúng tôi bằng cách nhập một số điện thoại di động không tồn tại ở Việt Nam!!!';

    errorsArea.append(invalidPhoneNumber);
    errorsArea.style.display = "block";

    signupSection.querySelector("#phone").focus();
    return false;
  } else {
    errorsArea.innerHTML = "";
    errorsArea.style.display = "none";
  }

  // Kiểm tra nếu username không hợp lệ
  if (!isValidUsername(username)) {
    if (errorsArea.querySelector("#invalid-username")) {
      return false;
    }

    const invalidUsername = document.createElement("li");
    invalidUsername.id = "invalid-username";
    invalidUsername.innerHTML =
      '<ion-icon name="alert-circle-outline" class="error-icon"></ion-icon>Tên đăng nhập nên có độ dài tối thiểu 6 và tối đa 18 kí tự, chỉ bao gồm chữ cái và số, kí tự đầu tiên phải là một chữ cái!';

    errorsArea.append(invalidUsername);
    errorsArea.style.display = "block";

    signupSection.querySelector("#username").focus();
    return false;
  } else {
    errorsArea.innerHTML = "";
    errorsArea.style.display = "none";
  }

  // Kiểm tra nếu mật khẩu không hợp lệ
  if (!isValidPassword(password)) {
    if (errorsArea.querySelector("#invalid-password")) {
      return false;
    }

    const invalidPassword = document.createElement("li");
    invalidPassword.id = "invalid-password";
    invalidPassword.innerHTML =
      '<ion-icon name="alert-circle-outline" class="error-icon"></ion-icon>Mật khẩu nên có độ dài tối thiểu 8 và tối đa 24 kí tự!';

    errorsArea.append(invalidPassword);
    errorsArea.style.display = "block";

    signupSection.querySelector("#password").focus();
    return false;
  } else {
    errorsArea.innerHTML = "";
    errorsArea.style.display = "none";
  }

  // Kiểm tra nếu mật khẩu xác nhận không khớp
  if (repassword !== password) {
    if (errorsArea.querySelector("#invalid-repassword")) {
      return false;
    }

    const invalidRepassword = document.createElement("li");
    invalidRepassword.id = "invalid-repassword";
    invalidRepassword.innerHTML =
      '<ion-icon name="alert-circle-outline" class="error-icon"></ion-icon>Mật khẩu xác nhận không đúng!';

    errorsArea.append(invalidRepassword);
    errorsArea.style.display = "block";

    signupSection.querySelector("#repassword").focus();
    return false;
  } else {
    errorsArea.innerHTML = "";
    errorsArea.style.display = "none";
  }

  const users = JSON.parse(localStorage.getItem("users"));
  // Kiểm tra nếu tên đăng nhập đã tồn tại
  for (let user of users)
    if (username === user.username) {
      if (errorsArea.querySelector("#username-already-exists")) {
        return false;
      }

      const usernameAlreadyExists = document.createElement("li");
      usernameAlreadyExists.id = "username-already-exists";
      usernameAlreadyExists.innerHTML =
        '<ion-icon name="alert-circle-outline" class="error-icon"></ion-icon>Tên đăng nhập đã tồn tại!';

      errorsArea.append(usernameAlreadyExists);
      errorsArea.style.display = "block";

      signupSection.querySelector("#username").focus();
      return false;
    } else {
      errorsArea.innerHTML = "";
      errorsArea.style.display = "none";
    }

  const date = new Date();
  const signupSince =
    date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();

  // tạo ra đối tượng user mới
  const newUser = {
    username: username,
    password: password,
    fullName: fullName,
    address: address,
    phone: phone,
    signupSince: signupSince,
  };

  users.push(newUser); // đưa user mới vào mảng
  localStorage.setItem("users", JSON.stringify(users));

  alert("Bạn đã đăng ký thành công! Hãy đăng nhập để tiếp tục mua hàng!");
  signupSection.remove();
  showSigninSection();
};
// Hàm để hiển thị phần đăng ký
const showSignupSection = () => {
  document.querySelector(".hide-screen").style.display = "block";
  // signup-header
  const title = document.createElement("h1");
  title.innerText = "Tạo tài khoản mới!";
  const closeBtn = document.createElement("button");
  closeBtn.classList.add("signin-close-button");
  closeBtn.innerText = "+";

  const header = document.createElement("header");
  header.classList.add("signin-header");
  header.append(title);

  // signup-main
  const form = document.createElement("form");
  form.innerHTML = `
    <ul class="show-errors"></ul>
    <label for="fullName">Nhập họ và tên:</label>
    <input type="text" placeholder="Họ và tên" id="fullName" />
    <label for="address">Nhập địa chỉ:</label>
    <input type="text" placeholder="Địa chỉ" id="address" />
    <label for="phone">Nhập số điện thoại:</label>
    <input type="text" placeholder="Số điện thoại" id="phone" />
    <label for="username">Nhập tên đăng nhập:</label>
    <input type="text" placeholder="Tên đăng nhập" id="username" />
    <label for="password">Nhập mật khẩu:</label>
    <input type="password" placeholder="Mật khẩu" id="password" />
    <label for="repassword">Xác nhận lại mật khẩu:</label>
    <input type="password" placeholder="Nhập lại mật khẩu" id="repassword" />
    <input type="submit" value="Đăng ký ngay" class="signin-btn"/>
`;

  const main = document.createElement("main");
  main.classList.add("signin-main");
  main.append(form);

  // signup-footer
  const toSignin = document.createElement("p");
  toSignin.innerText = "Đã có tài khoản? Nhấn vào đây để đăng nhập";

  const footer = document.createElement("footer");
  footer.classList.add("signin-footer");
  footer.append(toSignin);

  const signupSection = document.createElement("section");
  signupSection.classList.add("signin-section", "normal-box");
  signupSection.append(closeBtn, header, main, footer);
  document.body.prepend(signupSection);

  closeBtn.addEventListener("click", () => {
    signupSection.remove();
    document.querySelector(".hide-screen").style.display = "none";
  });

  signupSection.querySelector(".signin-btn").addEventListener("click", signup);
  toSignin.addEventListener("click", () => {
    signupSection.remove();
    showSigninSection();
  });
};

// PHẦN NÀY CHO GIỎ HÀNG VÀ LỊCH SỬ ĐẶT HÀNG
// Hàm để hiển thị giỏ hàng
const showCartSection = () => {
  // close button
  const closeBtn = document.createElement("button");
  closeBtn.classList.add("signin-close-button");
  closeBtn.innerText = "+";

  // cart title
  const activeUser = JSON.parse(localStorage.getItem("activeUser"));
  const title = document.createElement("div");
  title.classList.add("cart-section-title");
  title.innerHTML = `<h1>${activeUser.fullName} ơi,</h1> 
        <h2>kiểm tra lại các mục đã chọn và nhấn Chốt đơn ngay để nhận sách bạn nhé!</h2>`;

  // cart-container
  const cartContainer = document.createElement("div");
  cartContainer.classList.add("cart-ctn");
  cartContainer.innerHTML = `<h2 class="cart-title">Giỏ hàng của bạn</h2>`;

  // cart section
  const cartSection = document.createElement("section");
  cartSection.classList.add("full-screen-box", "cart-section");
  cartSection.append(closeBtn, title, cartContainer);
  document.body.prepend(cartSection);

  // nếu trong giỏ hàng chưa có gì
  if (
    localStorage.getItem("cart") === null ||
    localStorage.getItem("cart") === "[]"
  ) {
    cartContainer.innerHTML = "<p>- Không có sản phẩm nào trong giỏ! :(</p>";
  }
  // nếu trong giỏ hàng đã có sản phẩm
  else {
    const cart = JSON.parse(localStorage.getItem("cart"));
    // Hàm tính tổng tiền
    const totalCosting = () => {
      let totalCost = 0;
      const allTotals = cartSection.querySelectorAll("#total-cost");

      for (total of allTotals) {
        totalCost += priceStringToInt(total.innerText);
      }
      return totalCost;
    };

    // cart-thead
    const thead = document.createElement("div");
    thead.classList.add("cart-thead");
    thead.innerHTML = `<div class="cart-tr">
        <div class="cart-th">Sản phẩm</div>
        <div class="cart-th">Giá</div>
        <div class="cart-th">S.lượng</div>
        <div class="cart-th">Tổng</div>
        <div class="cart-th"></div>
        </div>`;

    // cart-tbody
    const tbody = document.createElement("div");
    tbody.classList.add("cart-tbody");

    // Mỗi item tương ứng một hàng trong giỏ
    for (item of cart) {
      // Cột đầu tiên chứa ảnh và tên mặt hàng
      const columnOfProduct = document.createElement("div");
      columnOfProduct.classList.add("cart-td", "cart-product");
      columnOfProduct.innerHTML = `<div class="cart-product-image">
          <img src="${item.image}" alt="${item.title}">
          </div>
          <div class="cart-product-name">${item.title}</div>`;

      // cột thứ hai chứa giắ mặt hàng
      const columnOfPrice = document.createElement("div");
      columnOfPrice.classList.add("cart-td");
      columnOfPrice.innerText = intToPriceString(item.newPrice);

      // cột thứ ba để người dùng chọn số lượng cần mua
      const columnOfQuantity = document.createElement("div");
      columnOfQuantity.classList.add("cart-td");
      columnOfQuantity.innerHTML = `<div class="cart-quantity">
          <input type="number" class="quantity" value="1" min="1" max="100">
          </div>`;

      // cột thứ tư là tổng giá của mặt hàng = số lượng * giá
      const columnOfTotal = document.createElement("div");
      columnOfTotal.id = "total-cost";
      columnOfTotal.classList.add("cart-td");
      columnOfTotal.innerText = intToPriceString(item.newPrice);

      // cột thứ 5 chứa nút để người dùng xóa mặt hàng
      const deleteItem = document.createElement("div");
      deleteItem.classList.add("cart-td");
      deleteItem.innerHTML =
        '<ion-icon class="cart-delete-item" name="trash-outline"></ion-icon>';

      // hàng hoàn chỉnh
      const rowOfItem = document.createElement("div");
      rowOfItem.id = `${item.id}`;
      rowOfItem.classList.add("cart-tr");
      rowOfItem.append(
        columnOfProduct,
        columnOfPrice,
        columnOfQuantity,
        columnOfTotal,
        deleteItem
      );

      const quantity = rowOfItem.querySelector(`.quantity`);

      // Sử dụng một hàm ẩn danh để lưu trữ giá của mặt hàng, khi người dùng thay đổi số lượng
      // thì tổng giá tự động thay đổi
      (function (price, totalElement) {
        quantity.addEventListener("input", () => {
          totalElement.innerText = intToPriceString(price * quantity.value);
          const finalTotalCost = cartTable.querySelector("#final-total-cost");
          if (finalTotalCost) {
            finalTotalCost.innerText = intToPriceString(totalCosting());
          }
        });
      })(item.newPrice, columnOfTotal);

      // Thêm sự kiện xóa mặt hàng
      rowOfItem.addEventListener("click", (event) => {
        if (
          event.target.closest(".cart-delete-item") &&
          confirm("Bạn có chắc muốn xóa sản phẩm này?")
        ) {
          for (let i = 0; i < cart.length; ++i) {
            if (cart[i].id === rowOfItem.id) {
              cart.splice(i, 1);
              localStorage.setItem("cart", JSON.stringify(cart));
              break;
            }
          }

          // nếu giỏ hàng không còn gì
          if (cart.length === 0) {
            document.querySelector(".full-screen-box.cart-section").remove();
            showCartSection();
          } else {
            rowOfItem.remove();
            const finalTotalCost = cartTable.querySelector("#final-total-cost");
            if (finalTotalCost) {
              finalTotalCost.innerText = intToPriceString(totalCosting());
            }
          }
        }
      });

      // thêm hàng vào giỏ hàng
      tbody.append(rowOfItem);
    }

    // cart table
    const cartTable = document.createElement("div");
    cartTable.classList.add("cart-table");
    cartTable.append(thead, tbody);

    cartContainer.append(cartTable);

    // cart-tfoot
    const tfoot = document.createElement("div");
    tfoot.classList.add("cart-tfoot");
    tfoot.innerHTML = `<div class="cart-tr">
        <div class="cart-th"></div>
        <div class="cart-th"></div>
        <div class="cart-th"></div>
        <div id="final-total-cost" class="cart-th">${intToPriceString(
          totalCosting()
        )}</div>
        <div class="cart-th"></div>
        </div>`;
    cartTable.append(tfoot);

    // cart-options
    const deleteAllItems = document.createElement("button");
    deleteAllItems.classList.add("delete-all-items");
    deleteAllItems.innerText = "Xóa tất cả";
    deleteAllItems.addEventListener("click", () => {
      if (confirm("Bạn có chắc muốn xóa tất cả sản phẩm trong giỏ???")) {
        localStorage.removeItem("cart");
        cartSection.remove();
        showCartSection();
      }
    });

    const placeAnOrder = document.createElement("button");
    placeAnOrder.classList.add("place-an-order");
    placeAnOrder.innerText = "Chốt đơn ngay <3";
    placeAnOrder.addEventListener("click", () => {
      // tạo các thuộc tính cho bill
      const customer = JSON.parse(localStorage.getItem("activeUser"));
      const finalTotalCost = totalCosting();
      const d = new Date();
      const orderDate = `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`;
      let orderInformation = "";
      const allItems = cartSection.querySelectorAll(".cart-tbody .cart-tr");
      for (item of allItems) {
        const itemName = item.querySelector(".cart-product-name").innerText;
        const itemQuantity = item.querySelector(".quantity").value;
        orderInformation += `${itemQuantity} x ${itemName}; `;
      }

      // tạo ra bill
      let bills = [];
      if (localStorage.getItem("bills")) {
        bills = JSON.parse(localStorage.getItem("bills"));
      }
      const bill = {
        id: bills.length,
        orderInformation: orderInformation.trim(),
        finalTotalCost: finalTotalCost,
        customer: customer,
        orderDate: orderDate,
        status: "Chưa xử lý",
      };

      // cập nhật bills lên localStorage
      bills.unshift(bill);
      localStorage.setItem("bills", JSON.stringify(bills));

      // xóa cart và cập nhật lại màn hình
      alert(
        "Đặt hàng thành công! Đơn hàng của bạn sẽ được phê duyệt trong 1 giờ. Cảm ơn bạn đã tin tưởng BinaryBook <3!!!"
      );
      localStorage.removeItem("cart");
      cartSection.remove();
      showCartSection();
    });

    const cartOptions = document.createElement("div");
    cartOptions.classList.add("cart-options");
    cartOptions.append(deleteAllItems, placeAnOrder);

    cartContainer.append(cartOptions);
  }

  // Nếu đã có lịch sử đặt hàng
  if (localStorage.getItem("bills") && localStorage.getItem("bills") !== "[]") {
    // Kiểm tra xem có bill nào thuộc về người dùng hiện tại hay không
    const temp = JSON.parse(localStorage.getItem("bills"));
    const bills = temp.filter(
      (bill) => JSON.stringify(bill.customer) === JSON.stringify(activeUser)
    );

    if (bills.length > 0) {
      const orderHistory = document.createElement("div");
      orderHistory.classList.add("oh-ctn");
      orderHistory.innerHTML = `<h2 class="oh-title">Xem lịch sử đặt hàng của bạn ở đây</h2>
          <div class="oh-table">
            <div class="oh-thead">
              <div class="oh-tr">
              <div class="oh-th">Đơn hàng gồm</div>
              <div class="oh-th">Tổng tiền</div>
              <div class="oh-th">Ngày đặt</div>
              <div class="oh-th">Trạng thái</div>
            </div>
          </div>
            <div class="oh-tbody"></div>
          </div>
      `;
      const orderTable = orderHistory.querySelector(".oh-table");

      const orderTbody = orderHistory.querySelector(".oh-tbody");
      // đưa các bill vào bảng
      for (bill of bills) {
        // Cột đầu tiên chứa thông tin đơn
        const columnOfOrderInformation = document.createElement("div");
        columnOfOrderInformation.classList.add("oh-td");
        columnOfOrderInformation.style.fontWeight = "bold";
        columnOfOrderInformation.style.lineHeight = "1.25";
        columnOfOrderInformation.innerText = bill.orderInformation;

        // cột thứ hai chứa tổng tiền
        const columnOfFinalTotalCost = document.createElement("div");
        columnOfFinalTotalCost.classList.add("oh-td");
        columnOfFinalTotalCost.innerText = intToPriceString(
          bill.finalTotalCost
        );

        // cột thứ ba chứa ngày đặt
        const columnOfOrderDate = document.createElement("div");
        columnOfOrderDate.classList.add("oh-td");
        columnOfOrderDate.innerText = bill.orderDate;

        // cột thứ tư chứa trạng thái
        const columnOfStatus = document.createElement("div");
        columnOfStatus.classList.add("oh-td");
        columnOfStatus.innerText = bill.status;

        // hàng hoàn chỉnh
        const rowOfBill = document.createElement("div");
        rowOfBill.classList.add("oh-tr");
        rowOfBill.append(
          columnOfOrderInformation,
          columnOfFinalTotalCost,
          columnOfOrderDate,
          columnOfStatus
        );

        orderTbody.append(rowOfBill);
      }

      orderTable.append(orderTbody);
      cartSection.append(orderHistory);
    }
  }

  // Thêm sự kiện cho nút close
  closeBtn.addEventListener("click", () => {
    cartSection.remove();
  });
};

// PHẦN NÀY ĐỂ KIỂM TRA ĐĂNG NHẬP
const checkSignin = () => {
  const getActiveUser = localStorage.getItem("activeUser");
  const headerNav = document.querySelector(".header-nav-area");
  // Nếu đã đăng nhập
  if (getActiveUser) {
    const activeUser = JSON.parse(getActiveUser);
    // nếu là admin
    if (activeUser.username === "admin") {
      headerNav.innerHTML = `<span href="" class="navigation" id="logout">
          <ion-icon name="log-out-outline"></ion-icon>
        </span>
        <span href="" class="navigation" id="settings">
          <ion-icon name="settings-outline"></ion-icon>
        </span>
        <span href="" class="navigation" id="search">
          <ion-icon name="search-outline"></ion-icon>
        </span>
        <span href="" class="navigation" id="cart">
          <ion-icon name="cart-outline"></ion-icon>
        </span>
      `;
    }
    // nếu không phải admin
    else {
      headerNav.innerHTML = `<span href="" class="navigation" id="logout">
          <ion-icon name="log-out-outline"></ion-icon>
        </span>
        <span href="" class="navigation" id="search">
          <ion-icon name="search-outline"></ion-icon>
        </span>
        <span href="" class="navigation" id="cart">
          <ion-icon name="cart-outline"></ion-icon>
        </span>
      `;
    }
  }
  //Nếu chưa đăng nhập
  else {
    // Thêm sự kiện cho nút đăng nhập
    headerNav.querySelector("#signin").addEventListener("click", (event) => {
      event.preventDefault();
      showSigninSection();
    });
  }

  // Thêm sự kiện cho nút giỏ hàng
  document.querySelector(".header").addEventListener("click", (event) => {
    event.preventDefault();
    const cart = event.target.closest("#cart");
    const toCart = event.target.closest("#to-cart");
    if (cart || toCart)
      if (getActiveUser) showCartSection();
      else alert("Hãy đăng nhập để mở giỏ hàng của bạn!");
  });

  // Thêm sự kiện cho nút đăng xuất và nút quản trị của admin
  headerNav.addEventListener("click", (event) => {
    const logout = event.target.closest("#logout");
    const settings = event.target.closest("#settings");
    if (logout) {
      if (confirm("Bạn có chắc muốn đăng xuất? Chúng tôi sẽ rất nhớ bạn :((")) {
        localStorage.removeItem("activeUser");
        localStorage.removeItem("cart");
        window.location.href = "index.html";
      }
    }
    if (settings) {
      window.location.href = "admin/management.html";
    }
  });

  // Thêm sự kiện khi người dùng click vào hộp quà
  document.querySelector("#gift-clicked").addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector(".hide-screen").style.display = "block";

    const closeBtn = document.createElement("button");
    closeBtn.classList.add("signin-close-button");
    closeBtn.innerText = "+";

    const giftCLicked = document.createElement("div");
    giftCLicked.classList.add("gift-clicked", "normal-box");
    giftCLicked.innerHTML = `<p>Nhập email của bạn và nhận giảm giá 15% cho đơn hàng tiếp theo!!!</p>
        <input id="gift-email" type="email" placeholder="Chúng tôi sẽ gửi phiếu giảm giá đến email này">
        <button class="gift-receive">Nhận ưu đãi ngay :))</button>
        <button class="gift-reject">Từ chối ưu đãi này :((</button>`;
    giftCLicked.prepend(closeBtn);

    headerNav.append(giftCLicked);

    // Thêm sự kiện cho nút đóng
    closeBtn.addEventListener("click", () => {
      document.querySelector(".hide-screen").style.display = "none";
      giftCLicked.remove();
    });

    // Thêm sự kiện cho nút nhận ưu đãi
    giftCLicked.querySelector(".gift-receive").addEventListener("click", () => {
      if (!document.querySelector("#gift-email").value) {
        alert("Vui lòng nhập email và thực hiện lại");
        return;
      }

      alert(
        "Chúng tôi đã gửi Phiếu giảm giá cho bạn. Đừng quên kiểm tra thư mục spam nếu bạn không tìm thấy nó!"
      );
      document.querySelector(".hide-screen").style.display = "none";
      giftCLicked.remove();
    });

    // Thêm sự kiện cho nút từ chối ưu đãi
    giftCLicked.querySelector(".gift-reject").addEventListener("click", () => {
      alert(
        "Bạn biết gì không? BinaryBook không ngừng nổ lực để đáp ứng tất cả mong đợi của khách hàng!"
      );
      document.querySelector(".hide-screen").style.display = "none";
      giftCLicked.remove();
    });
  });
};

// GỌI CÁC HÀM CẦN THIẾT
createProducts();
createAdmin();

// PHẦN NÀY ĐỂ HIỂN THỊ SLIDESHOW
let slideshowImgIdx = 1;
const slideshowContainer = document.querySelector(".slideshow");
const changeImg = () => {
  // Chọn ảnh cần thay đổi
  const img = document.querySelector(".slideshow-img");
  // Điều chỉnh chỉ số nếu cần
  if (slideshowImgIdx > 6) slideshowImgIdx = 1;
  // Chỉnh sửa thuộc tính cho ảnh
  img.setAttribute("src", `images/bnr${slideshowImgIdx++}.jpg`);
  // Chờ 3 giây
  setTimeout(changeImg, 3000);
};

// PHẦN NÀY ĐỂ THAY ĐỔI TRÊN header-nav-area
const changeHeaderNavArea = () => {
  window.addEventListener("resize", () => {
    if (!document.querySelector("#signin")) return;
    const width = window.innerWidth;
    const signin = document.querySelector("#signin");
    if (width <= 768 && signin.classList.contains("signin")) {
      signin.classList.toggle("navigation");
      signin.classList.toggle("signin");
      signin.innerHTML = '<ion-icon name="log-in-outline"></ion-icon>';
    } else if (width > 768 && signin.classList.contains("navigation")) {
      signin.classList.toggle("navigation");
      signin.classList.toggle("signin");
      signin.innerText = "Đăng nhập";
    }
  });
};
const width = window.innerWidth;
const signinId = document.querySelector("#signin");
if (width <= 1024 && signinId.classList.contains("signin")) {
  signinId.classList.toggle("navigation");
  signinId.classList.toggle("signin");
  signinId.innerHTML = '<ion-icon name="log-in-outline"></ion-icon>';
}

// ONLOAD
window.onload = () => {
  showProducts();
  createSubheader();
  createLinkColumn();
  addShowMoreDetailsEvent(".main");
  changeImg();
  changeHeaderNavArea();
  checkSignin();

  // Thêm sự kiện cho nút tìm kiếm
  document.querySelector("#search").addEventListener("click", (event) => {
    event.preventDefault();
    showSearchResults([]);
  });
};
