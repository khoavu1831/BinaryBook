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
        title:
          "Eloquent Javascript, 3rd Edition: A Modern Introduction to Programming",
        authors: ["Marijn Haverbeke"],
        oldPrice: 979000,
        newPrice: 909000,
        category: "javascript",
        otherDetails: [""],
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
    ];
    localStorage.setItem("wellKnownBooks", JSON.stringify(wellKnownBooks));
  }
};
// Hàm khởi tạo tài khoản admin
const createAdmin = () => {
  // Nếu không thông tin tài khoản admin trong localStorage thì tạo nó và đẩy vào
  if (localStorage.getItem("users") === null) {
    const users = [];
    let user = {
      username: "admin",
      password: "admin",
      fullname: "Mai Trần Tuấn Kiệt",
      address: "273 An Dương Vương, P3, Q5, TP.HCM",
      phone: "0559413699",
      signupSince: "04-06-2004",
    };
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
  }
};
// Hàm kiểm tra chuỗi rỗng hoặc chir chứa khoảng trắng
const isEmptyStringOrWhiteSpaces = (string) => string.trim().length === 0;
// Hàm để định dạng số nguyên thành chuỗi giá tiền
const intToPriceString = (priceInt) =>
  priceInt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " đ";
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
// Hàm hiển thị các sản phẩm lên trang web
const showProducts = () => {
  // Thêm sách vào vùng chứa best-seller-----------------
  const bestSellerBooks = JSON.parse(localStorage.getItem("bestSellerBooks"));
  const bestSellerProductsContainer = document.querySelector(
    ".best-seller .products"
  );
  for (book of bestSellerBooks) {
    bestSellerProductsContainer.append(createProductDiv(book));
  }

  // Thêm sách vào vùng chứa well-known--------------------
  const wellKnownBooks = JSON.parse(localStorage.getItem("wellKnownBooks"));
  const wellKnownProductsContainer = document.querySelector(
    ".well-known .products"
  );
  for (book of wellKnownBooks) {
    wellKnownProductsContainer.append(createProductDiv(book));
  }

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
    paginate(".best-seller", bestSellerBooks);
    paginate(".well-known", wellKnownBooks);
  });
  // Hàm để phân trang cho một vùng chứa sản phẩm
  const paginate = (containerSelector, books) => {
    // Chia mảng books thành các trang
    const pages = [];
    for (let i = 0; i < books.length; i += booksPerPage) {
      pages.push(books.slice(i, i + booksPerPage));
    }
    // Tạo các liên kết phân trang
    const pagination = document.querySelector(
      containerSelector + " .pagination"
    );
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
  //----------------------------end
};
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
    subheaderItemLink.classList.add("sub-header-item");
    subheaderItemLink.setAttribute("href", "");
    nav.append(subheaderItemLink);
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
        moreDetails.remove(); // xóa moreDetails khỏi DOM
      });
    }
  });
};
// PHẦN NÀY ĐỂ THÊM SỰ KIỆN XEM CHO NÚT TÌM KIẾM
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
  input.setAttribute("placeholder", "Tìm theo tên sách, tên tác giả,...");

  const btn = document.createElement("button");
  btn.innerText = "Tìm kiếm";

  const searchForm = document.createElement("form");
  searchForm.classList.add("search-box");
  searchForm.id = "search-again";
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
    <input class="filter-price" type="text" id="from-price" placeholder="Từ (Việt Nam Đồng)"> — 
    <input class="filter-price" type="text" id="to-price" placeholder="Đến (Việt Nam Đồng)">`;

  searchForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của form
    const keyword = searchForm.querySelector(".input-search").value;
    const category = filter.querySelector(".filter-category").value;
    let fromPrice = filter.querySelector("#from-price").value;
    let toPrice = filter.querySelector("#to-price").value;
    if (fromPrice === "" && toPrice === "") {
      fromPrice = "0";
      toPrice = "999999999";
    }
    console.log("fn:" + fromPrice);
    console.log("fn:" + toPrice);
    console.log("fn:" + category);

    const books = searchBooks(keyword, category, fromPrice, toPrice);
    console.log(books);
    showSearchResults(books);
    searchResults.remove();
  });

  const safArea = document.createElement("div");
  safArea.classList.add("saf-area");
  safArea.append(searchForm, filter);

  // div.saf-products
  const products = document.createElement("div");
  products.classList.add("saf-products");
  for (let book of books) {
    products.append(createProductDiv(book));
  }

  // button.close-btn
  const closeBtn = document.createElement("button");
  closeBtn.classList.add("saf-close");
  closeBtn.innerText = "Đóng Tìm Kiếm";
  closeBtn.addEventListener("click", () => {
    searchResults.remove(); // xóa searchResults khỏi DOM
  });

  // section.search-and-filter
  const searchResults = document.createElement("section");
  searchResults.classList.add("search-and-filter", "full-screen-box");
  searchResults.append(safArea, products, closeBtn);
  document.querySelector(".main").append(searchResults); // hiển thị nó
};
// Hàm thực hiện đăng nhập
const signin = () => {
  const signinSection = document.querySelector(
    "section.signin-section.normal-box"
  );
  const form = signinSection.querySelector(".signin-main form");
  let usr = form.querySelector("input#username").value;
  let pass = form.querySelector("input#password").value;
  if (isEmptyStringOrWhiteSpaces(usr) || isEmptyStringOrWhiteSpaces(pass)) {
    alert("Không được bỏ trống bất kỳ trường nào!");
    signinSection.remove();
    showSigninSection();
    return false;
  }
  const users = JSON.parse(localStorage.getItem("users"));
  for (let i = 0; i < users.length; i++)
    if (usr == users[i].username)
      if (pass == users[i].password) {
        signinSection.remove();
        localStorage.setItem("activeUsers", JSON.stringify(users[i]));
        window.location.reload(true);
        return true;
      }

  alert("Kiểm tra lại thông tin đăng nhập!");
  signinSection.remove();
  showSigninSection();
  return false;
};
// Hàm để hiển thị phần đăng nhập
const showSigninSection = () => {
  // signin-header
  const title = document.createElement("h1");
  title.innerText = "Chào mừng bạn quay trở lại!";
  const closeBtn = document.createElement("button");
  closeBtn.innerText = "+";

  const header = document.createElement("header");
  header.classList.add("signin-header");
  header.append(title, closeBtn);

  // signin-main
  const form = document.createElement("form");
  form.innerHTML = `
  <div class="signin-column-one">
    <label for="username">Nhập tên đăng nhập:</label>
    <label for="password">Nhập mật khẩu:</label>
  </div>
  <div class="signin-column-two">
    <input type="text" placeholder="Tên đăng nhập" id="username" required />
    <input type="password" placeholder="Mật khẩu" id="password" required />
  </div>
`;
  const main = document.createElement("main");
  main.classList.add("signin-main");
  main.append(form);

  // signin-footer
  const signinBtn = document.createElement("button");
  signinBtn.innerText = "Đăng nhập ngay";

  const toRegister = document.createElement("p");
  toRegister.innerText = "Chưa có tài khoản? Nhấn vào đây để đăng ký";

  const footer = document.createElement("footer");
  footer.classList.add("signin-footer");
  footer.append(signinBtn, toRegister);

  const signinSection = document.createElement("section");
  signinSection.classList.add("signin-section", "normal-box");
  signinSection.append(header, main, footer);
  document.body.append(signinSection);

  closeBtn.addEventListener("click", () => {
    signinSection.remove();
  });
  signinBtn.addEventListener("click", signin);
};
createProducts();
createAdmin();
showProducts();
createSubheader();
createLinkColumn();
addShowMoreDetailsEvent(".main");
// Thêm sự kiện cho nút tìm kiếm
document.querySelector("#search").addEventListener("click", (event) => {
  event.preventDefault();
  showSearchResults([]);
});
// Thêm sự kiện cho nút signin
document.querySelector("#signin").addEventListener("click", (event) => {
  event.preventDefault();
  showSigninSection();
});

// PHẦN NÀY CHO PHẦN SLIDESHOW
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
if (width <= 1024 && signin.classList.contains("signin")) {
  signin.classList.toggle("navigation");
  signin.classList.toggle("signin");
  signin.innerHTML = '<ion-icon name="log-in-outline"></ion-icon>';
}

// ONLOAD
window.onload = () => {
  changeImg();
  changeHeaderNavArea();
};
