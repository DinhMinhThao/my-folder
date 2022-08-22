const simpleStatuts = (initial) => {
  let val = initial;
  return [
    () => val,
    (v) => {
      val = v;
    },
  ];
};

const data = [
  {
    id: 1,
    url: "./img/Vector.svg",
    name: "Doccument",
    chinden: [
      {
        id: 2,
        url: "./img/Vector.svg",
        name: "Setup",
        chinden: [],
      },
      {
        id: 3,
        url: "./img/Vector.svg",
        name: "Tài liệu",
        chinden: [
          {
            id: 4,
            url: "./img/Vector.svg",
            name: "Tài liệu mất",
            chinden: [
              {
                id: 5,
                url: "./img/DOC.svg",
                name: "Hướng đẫn tán gái để lấy làm vợ.doc",
                chinden: null,
              },
              {
                id: 6,
                url: "./img/DOC.svg",
                name: "Hướng đẫn xấu trai vẫn lấy được vợ.doc",
                chinden: null,
              },
            ],
          },
          {
            id: 7,
            url: "./img/DOC.svg",
            name: "Bài tập của tôi.doc",
            chinden: null,
          },
          {
            id: 8,
            url: "./img/DOC.svg",
            name: "Hướng dẫn làm đề án.doc",
            chinden: null,
          },
        ],
      },
      {
        id: 9,
        url: "./img/Vector.svg",
        name: "Ảnh của tôi",
        chinden: [
          {
            id: 10,
            url: "./img/JPG.svg",
            name: "Ảnh crush mặc đẹp.jpg",
            chinden: null,
          },
          {
            id: 11,
            url: "./img/JPG.svg",
            name: "Ảnh crush.jpg",
            chinden: null,
          },
          {
            id: 12,
            url: "./img/JPG.svg",
            name: "Được ôm crush.jpg",
            chinden: null,
          },
          {
            id: 13,
            url: "./img/JPG.svg",
            name: "Ảnh crush cười.jpg",
            chinden: null,
          },
        ],
      },
    ],
  },
  {
    id: 14,
    url: "./img/Vector.svg",
    name: "Doccument 1",
    chinden: [],
  },
  {
    id: 15,
    url: "./img/Vector.svg",
    name: "Doccument 2",
    chinden: [],
  },
  {
    id: 16,
    url: "./img/Vector.svg",
    name: "Doccument 3",
    chinden: [],
  },
];

console.log(data);

const EMAIL_REGEX =
  /\A[a-zA-Z0-9.!\#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\z/;
const App = document.getElementById("project");

const [email, emailSet] = simpleStatuts("");
const [sear, searSet] = simpleStatuts("");

const renderForm = () => {
  App.innerHTML = `<div class="form row j-center a-center p-absolute">
    <div class="tittle-form column j-center a-center">
      <div class="text-head">
        <h1 class="form-text">Chào mừng đến trang lưu trữ của chúng tôi</h1>
      </div>
      <form type="submit" onsubmit="handlSubmit(event)" class="p-relative">
        <input
          class="input-res"
          name="email"
          type="text"
            value="${email()}"
          placeholder="Nhập email để trải nghiệm"
        />
        <button class="btn p-absolute" type="submit" />Trải Nghiệm</button>
      </form>
    </div>
    </div>`;
};
renderForm();

const renderdata = () => {
  App.innerHTML = `
    <nav class="nav-left">
        <div class="row infor a-center">
          <div class="col-2 logo-name">
            <p class="logo-login">${email().slice(0, 1).toLocaleUpperCase()}</p>
          </div>
          <div class="col-10">
            <p class="name-user">${email().slice(0, email().indexOf("@"))}</p>
            <p class="email-user">${email()}</p>
          </div>
        </div>
        <div class="nav-list-items">
          <div class="row a-center nav-list nav-list-focus">
            <div class="col-2">
              <img class="color-icon" src="./img/Folder.svg" alt="" />
            </div>
            <div class="col-10">
              <p class="name-user">Tệp của tôi</p>
            </div>
          </div>
          <div class="row a-center nav-list">
            <div class="col-2">
              <img
                class="color-icon"
                src="./img/ClockCounterClockwise.svg"
                alt=""
              />
            </div>
            <div class="col-10">
              <p class="name-user">Gần đây</p>
            </div>
          </div>
          <div class="row a-center nav-list">
            <div class="col-2">
              <img class="color-icon" src="./img/Users.svg" alt="" />
            </div>
            <div class="col-10">
              <p class="name-user">Đã chia sẻ</p>
            </div>
          </div>
          <div class="row a-center nav-list">
            <div class="col-2">
              <img class="color-icon" src="./img/Trash.svg" alt="" />
            </div>
            <div class="col-10">
              <p class="name-user">Xóa</p>
            </div>
          </div>
        </div>

        <div class="acout-action">
            <div class="row a-center nav-list">
                <div class="col-2">
                  <img class="color-icon" src="./img/Folder.svg" alt="" />
                </div>
                <div class="col-10">
                  <p class="name-user">Thông tin tài khoàn</p>
                </div>
              </div>
              <div class="row a-center nav-list">
                <div class="col-2">
                  <img class="color-icon" src="./img/Folder.svg" alt="" />
                </div>
                <div class="col-10">
                  <p class="name-user">Đăng xuất</p>
                </div>
              </div>
        </div>
      </nav>
      <div class="head-table p-relative">
      ${header()}

        <div class="tree-table row">
        <div class='tree-table-left'>
        <div class='name-tre'>
            <p>My folder</p>
        </div>
        ${renderFolder(data)}
        </div>
        <div class='tree-table-right'>
            <div class='name-tre row name-tre-1'>
             <p class='numbe'>My file</p>
             <p class='numbe1'></p>
             <p class='numbe2'></p>
             <p class='numbe3'></p>
            </div>
            <div class='table-right-item'></div>
        </div>
        </div>
      </div>
    `;
};

const frFom = document.querySelector(".form");

const handlSubmit = (event) => {
  event.preventDefault();
  const inputval = document.querySelector(".input-res");
  emailSet(inputval.value);
  inputval.value = "";
  frFom.classList.toggle("d-none");
  renderdata();
};

const header = () => {
  return `
  <header class="header row a-center j-between ">
        <div class="item-left">
          <div class="row a-center">
            <div class="icon-main">
              <img class="color-icon" src="./img/DotsNine.svg" alt="9 chấm" />
            </div>
            <div class="text-main">
              <p class="text-main-text">My Dive</p>
            </div>
          </div>
        </div>
        <div class="item-right">
          <div class="row a-center">
              <input class='d-none' type='file' id='file' name='file'/>
            <label for='file' class="upload row a-center">
              <img class="color-icon" src="./img/ArrowLineUp.svg" alt="upload" />
              <p class="upload-text">Upload</p>
            </label>
            <button onclick='handleClickShow()'>
            <img class='color-icon lager' src="./img/MagnifyingGlass.svg" alt="Soi" />
            </button>
            <button class="addfile">
              <img
                class="color-icon"
                src="./img/FolderNotchPlus.svg"
                alt=""
              />
            </button>
            <button class="addfile">
              <img class="color-icon" src="./img/Table.svg" alt="" />
            </button>
          </div>
        </div>
        <div class="center-header p-absolute row a-center j-center d-none">       
        <input onchange='handlChane(event)' class="input-header p-relative" type="text" placeholder="Tìm kiếm mọi thứ" />
        <button onclick='handlClickFilter()' class='btn-header-input p-absolute'>Tìm kiếm</button>
       </div>
      </header>
  `;
};

const handleClickShow = () => {
  document.querySelector(".center-header").classList.toggle("d-none");
  document.querySelector(".input-header").value = "";
};

const handlChane = (event) => {
  searSet(event.target.value);
};

const handlClickFilter = () => {
  console.log(sear());
  //code logic o day
  document.querySelector(".center-header").classList.toggle("d-none");
};

const renderFolder = (obj) => {
  let outpt = "";
  return (
    outpt +
    obj
      .map(
        (a) => `
        <div onclick='handlClickFolder(${a.id})' class='row folder-item j-between a-center'>
            <div class='row a-center items'>
                <img class='color-icon-folder' src='${a.url}'/>
                <p>${a.name}</p>
            </div>
            <div class='icon-tree'>
                <img src='./img/CaretRight.svg'/>
            </div>

        </div>
    `
      )
      .join(",")
      .replaceAll(/,/g, "")
  );
};

const renderFolderbig = (obj) => {
  let out = "";
  return (out += obj
    .map(
      (a) => `
        <div onclick='handlC2(${a.id})' class='row folder-item j-between a-center'>
            <div class='row a-center items'>
                <img class='color-icon-folder' src='${a.url}'/>
                <p>${a.name}</p>
            </div>
            <div class='icon-tree'>
                <img src='./img/DotsThreeVertical.svg'/>
            </div>
     </div>

        `
    )
    .join(",")
    .replaceAll(/,/g, ""));
};
const [fixName, fixNameSet] = simpleStatuts("");
let aray;
const handlClickFolder = (id) => {
    const nameLink = document.querySelector(".numbe1");
  const nameLink1 = document.querySelector(".numbe2");
  const nameLink2 = document.querySelector(".numbe3");
  const asc = document.querySelector(".table-right-item");
  const arr = data.find((a) =>{ 
    fixNameSet(a.name)
    return a.id === id;

});

nameLink.innerHTML=`<p onclick='handlClickFolder(${id})' class='numbet1 row a-center'><img src='./img/CaretRight.svg'> ${fixName()}</p>`
nameLink1.style.display='none';
nameLink2.style.display='none';
  if (arr.chinden === null) {
    console.log("khong co thu muc");
  } else if (arr.chinden.length === 0) asc.innerHTML = "Thư mục này trống";
  else {
    asc.innerHTML = renderFolderbig(arr.chinden);
  }
  aray = arr.chinden;
};

const [fixName1, fixName1Set] = simpleStatuts("");
let aray2;
const handlC2 = (id) => {
const nameLink = document.querySelector(".numbe1");
  const nameLink1 = document.querySelector(".numbe2");
  const nameLink2 = document.querySelector(".numbe3");

  const asc = document.querySelector(".table-right-item");
  const arr2 = aray.find((a) =>{ 
    fixName1Set(a.name)
    return a.id === id;

});
nameLink1.style.display='block';
nameLink1.innerHTML=`<p onclick='handlC2(${id})' class='numbet1 row a-center'><img src='./img/CaretRight.svg'> ${fixName1()}</p>`
nameLink2.style.display='none';
  if (arr2.chinden === null) {
    console.log("khong co thu muc");
  } else if (arr2.chinden.length === 0) asc.innerHTML = "Thư mục này trống";
  else {
    asc.innerHTML = arr2.chinden
      .map((a) => {
        return `<div onclick='handlC23(${a.id})' class='row folder-item j-between a-center'>
                    <div class='row a-center items'>
                        <img class='color-icon-folder' src='${a.url}'/>
                        <p>${a.name}</p>
                    </div>
                    <div class='icon-tree'>
                        <img src='./img/DotsThreeVertical.svg'/>
                    </div>
             </div>
        
                `;
      })
      .join(",")
      .replaceAll(/,/g, "");
  }
  aray2 = arr2.chinden;
};
const [fixName2, fixName2Set] = simpleStatuts("");
const handlC23 = (id) => {
    const nameLink = document.querySelector(".numbe1");
    const nameLink1 = document.querySelector(".numbe2");
    const nameLink2 = document.querySelector(".numbe3");

  const asc = document.querySelector(".table-right-item");
  const arr2 = aray2.find((a) => { 
    fixName2Set(a.name)
    return a.id === id;

});
nameLink2.style.display='block';
nameLink2.innerHTML=`<p onclick='handlC23(${id})' class='numbet1 row a-center'>
<img src='./img/CaretRight.svg'>
${fixName2()}</p>`
  if (arr2.chinden === null) {
    console.log("khong co thu muc");
  } else if (arr2.chinden.length === 0)
    asc.innerHTML = `<p style="padding: 10px;">Thư mục này trống</p>`;
  else {
    asc.innerHTML = arr2.chinden
      .map(
        (a) => `
                <div onclick='handlC234(${a.id})' class='row folder-item j-between a-center'>
                    <div class='row a-center items'>
                        <img class='color-icon-folder' src='${a.url}'/>
                        <p>${a.name}</p>
                    </div>
                    <div class='icon-tree'>
                        <img src='./img/DotsThreeVertical.svg'/>
                    </div>
             </div>
        
                `
      )
      .join(",")
      .replaceAll(/,/g, "");
  }
};

const handlC234 = (id) => {
  console.log("chay roi");
};