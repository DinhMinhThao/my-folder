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
    img: "",
    name: "Doccument",
    share: "",
    chinden: [
      {
        id: 2,
        url: "./img/Vector.svg",
        img: "",
        name: "Setup",
        share: "",
        chinden: [],
      },
      {
        id: 3,
        url: "./img/Vector.svg",
        img: "",
        name: "Tài liệu",
        share: "",
        chinden: [
          {
            id: 4,
            url: "./img/Vector.svg",
            img: "",
            name: "Tài liệu mật",
            share: "",
            chinden: [
              {
                id: 5,
                url: "./img/DOC.svg",
                img: "",
                name: "Hướng đẫn tán gái để lấy làm vợ.doc",
                share: "",
                chinden: null,
              },
              {
                id: 6,
                url: "./img/DOC.svg",
                img: "",
                name: "Hướng đẫn xấu trai vẫn lấy được vợ.doc",
                share: "",
                chinden: null,
              },
            ],
          },
          {
            id: 7,
            url: "./img/DOC.svg",
            img: "",
            name: "Bài tập của tôi.doc",
            share: "",
            chinden: null,
          },
          {
            id: 8,
            url: "./img/DOC.svg",
            img: "",
            name: "Làm đề án.doc",
            share: "",
            chinden: null,
          },
        ],
      },
      {
        id: 9,
        url: "./img/Vector.svg",
        img: "",
        name: "Ảnh của tôi",
        share: "",
        chinden: [
          {
            id: 10,
            url: "./img/JPG.svg",
            img: "./img/crush.png",
            name: "Ảnh crush mặc đẹp.jpg",
            share: "",
            chinden: null,
          },
          {
            id: 11,
            url: "./img/JPG.svg",
            img: "./img/crush3.png",
            name: "Ảnh crush.jpg",
            share: "",
            chinden: null,
          },
          {
            id: 12,
            url: "./img/JPG.svg",
            img: "./img/crush2.jpeg",
            name: "Được ôm crush.jpg",
            share: "",
            chinden: null,
          },
          {
            id: 13,
            url: "./img/JPG.svg",
            img: "./img/crush1.jpeg",
            name: "Ảnh crush cười.jpg",
            share: "",
            chinden: null,
          },
        ],
      },
    ],
  },
  {
    id: 14,
    url: "./img/Vector.svg",
    img: "",
    name: "Doccument 1",
    share: "",
    chinden: [],
  },
  {
    id: 15,
    url: "./img/Vector.svg",
    img: "",
    name: "Doccument 2",
    share: "",
    chinden: [],
  },
  {
    id: 16,
    url: "./img/Vector.svg",
    img: "",
    name: "Doccument 3",
    share: "",
    chinden: [],
  },
];

const dsaf = data.flatMap((a) => [a, ...a.chinden]);
const flatDara = dsaf.flatMap((a) => [a, ...a.chinden]);
const flatData = [...flatDara, ...flatDara[6].chinden];
let delData = [];
let RecenData = [];
let RecenMobie = [];
let ShareData = [];

const EMAIL = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
const App = document.getElementById("project");

const [email, emailSet] = simpleStatuts("");
const [sear, searSet] = simpleStatuts("");

const renderForm = () => {
  App.innerHTML = `<div class="form row j-center a-center p-absolute">
    <div class="tittle-form column j-center a-center">
      <div class="text-head">
        <h1 class="form-text">Chào mừng đến trang lưu trữ của chúng tôi
        My Dive
        </h1>
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

const renderSeketon = () => {
  App.innerHTML = `<div class="seketon p-absolute row j-start a-center">
      <div class='seketon-items'>
      <h3 class='row'>Loadding...</h3>
      <div class="seketon-color row"></div>
      </div>
</div>`;
};

const renderdata = () => {
  App.innerHTML = `
    <nav class="nav-left p-absolute">
        <div class="row infor a-center">
          <div class="col-2 logo-name">
            <p class="logo-login">${email().slice(0, 1).toLocaleUpperCase()}</p>
          </div>
          <div class="col-10">
            <p class="name-user">${
              email().slice(0, email().indexOf("@")).length > 20
                ? email().slice(0, email().indexOf("@")).slice(0, 20) + "..."
                : email().slice(0, email().indexOf("@"))
            }</p>
            <p class="email-user">${
              email().length > 23 ? email().slice(0, 23) + "..." : email()
            }</p>
          </div>
        </div>
        <div class="nav-list-items">
          <div onclick='handlREN()' class="row a-center nav-list nav-list-focus">
            <div class="col-2">
              <img class="color-icon" src="./img/Folder.svg" alt="" />
            </div>
            <div  class="col-10">
              <p  class="name-user">Tệp của tôi</p>
            </div>
          </div>
          <div onclick='handlRecos()' class="row a-center nav-list">
            <div class="col-2">
              <img
                class="color-icon"
                src="./img/ClockCounterClockwise.svg"
                alt=""
              />
            </div>
            <div  class="col-10">
              <p  class="name-user">Gần đây</p>
            </div>
          </div>
          <div onclick='handlShare()' class="row a-center nav-list">
            <div class="col-2">
              <img class="color-icon" src="./img/Users.svg" alt="" />
            </div>
            <div class="col-10">
              <p class="name-user">Đã chia sẻ</p>
            </div>
          </div>
          <div onclick='handlShowDele()' class="row a-center nav-list">
            <div class="col-2">
              <img class="color-icon" src="./img/Trash.svg" alt="" />
            </div>
            <div class="col-10">
              <p class="name-user">Thùng rác</p>
            </div>
          </div>
        </div>

        <div class="acout-action">
            <div class="row a-center nav-list">
                <div class="col-2">
                  <img class="color-icon" src="./img/VectorUser.svg" alt="" />
                </div>
                <div class="col-10">
                  <p class="name-user">Thông tin tài khoàn</p>
                </div>
              </div>
              <div onclick='handlLogout()' class="row a-center nav-list">
                <div class="col-2">
                  <img class="color-icon" src="./img/OutSimple2.svg" alt="" />
                </div>
                <div class="col-10">
                  <p class="name-user">Đăng xuất</p>
                </div>
              </div>
              <div onclick='handlClose()' class="row a-center j-center nav-list-end">
                <p class="name-user-2">Đóng</p>
            </div>
        </div>
    </nav>


      <div class="head-table p-relative">
            ${renderTabe(data)}
      </div>
    `;
};

const handlLogout = () => {
  renderForm();
};

const renderTabe = (obj) => {
  return `
  <div class='render-next'>
      <div class='header-hese'>${header()}</div>
        <div class='mobie'>
        <div class='row a-center head-text-mobie'>
          <div class='row a-center' onclick='handlClickHome()'>
            <img class='img-in-mobie' src='./img/House.svg'/>
            <p class='btnHome'>My file</p>

          </div>
            <div class='comback'></div>
        </div>
          <div class='data-render'>
          ${renderMobie(obj)}
          </div>
      </div>
      <div class='folder-action-items'>
          <div class="tree-table row">
                  <div class='tree-table-left'>
                    <div class='name-tre row a-center'>
                        <p>My folder</p>
                    </div>
                    <div class='render-data'>
                    ${renderFolder(obj)}
                    </div>
          </div>
          <div class='tree-table-right'>
                    <div id='name-tree' class='name-tre row name-tre-1'>
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
  if (!EMAIL.test(email())) {
    alert("Hay nhap dia chi email hop le.\nExample@gmail.com");
    return false;
  } else {
    inputval.value = "";
    frFom.classList.toggle("d-none");
    renderSeketon();
    setTimeout(renderdata, 3000);
  }
};

const header = () => {
  return `
  <header class="header row a-center j-between ">
        <div onclick='handlREN2()' class="item-left">
          <div  class="row a-center">
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
              <input onchange='handlOnfile(event)' class='d-none' type='file' id='file' name='file'/>
              <label for='file' class="upload row a-center">
                <img class="color-icon icon-upload" src="./img/ArrowLineUp.svg" alt="upload" />
                <p class="upload-text">Upload</p>
              </label>
            <button onclick='handleClickShow()'>
              <img class='color-icon lager' src="./img/MagnifyingGlass.svg" alt="Soi" />
            </button>
            <button onclick='handlClickAdd()' class="addfile">
              <img
                class="color-icon lager"
                src="./img/FolderNotchPlus.svg"
                alt=""
              />
            </button>
            <div class='form-add p-absolute row a-center j-center d-none'>
                <div class='form-add-items row a-center j-center'>
                  <div class='form-add-item'>
                   <h3>Tạo mới folder</h3>
                  <input class='input-create' type='text' placeholder='Nhập tên folder' />
                  <div class='team-butn row a-center j-end'>
                  <div onclick='handlClickAdd()' class='but-tn'>Không</div>
                  <div onclick ='hanldCkickAddtree(event)' class='but-tn but-tn-1'>Tạo mới</div>
                  </div>
                  </div>

                </div>
              </div>
              <button onclick='handlDetele1()' >
              <img class='color-icon lager' src='./img/Trash.svg' alt='thung rac'/>
              </button>
            <button onclick='showNav()'  class="tab-nav">
              <img class="color-icon lager" src="./img/Table.svg" alt="" />
            </button>
          </div>
        </div>
        <div class="center-header p-absolute row a-center j-center d-none">       
          <input onchange='handlChane(event)' class="input-header p-relative" type="text" placeholder="Tìm kiếm mọi thứ" />
          <button onclick='handlClickFilter()' class='btn-header-input p-absolute'>Tìm kiếm
          </button>
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
  const asc = document.querySelector(".table-right-item");
  const nameLink = document.querySelector(".numbe1");
  const nameLink1 = document.querySelector(".numbe2");
  const nameLink2 = document.querySelector(".numbe3");
  document.querySelector(".center-header").classList.toggle("d-none");
  const find = flatData.filter((a) =>
    a.name.toLocaleLowerCase().includes(sear().toLocaleLowerCase())
  );
  const Elment = document.querySelector(".data-render");
  Elment.innerHTML = renderMobieSmaill(find);
  asc.innerHTML = renderFolderFilter(find);
  nameLink.style.display = "none";
  nameLink1.style.display = "none";
  nameLink2.style.display = "none";
};

const [fileo, fileoSet] = simpleStatuts("");

const handlOnfile = (event) => {
  const casd = document.querySelector(".render-data");
  const casd2 = document.querySelector(".data-render");
  fileoSet(event.target.files[0].name);
  const newonj = {
    id: 40 + data.length,
    url: "./img/JPG.svg",
    img: "",
    name: fileo().length < 15 ? fileo() : fileo().slice(0, 14) + "...",
    chinden: null,
  };
  flatData.push(newonj);
  RecenData.push(newonj);
  RecenMobie.push(newonj);
  let na = newonj.name.slice(newonj.name.indexOf(".") + 1).toLocaleLowerCase();
  if (
    na === "jpeg" ||
    na === "jpg" ||
    na === "pdf" ||
    na === "gif" ||
    na === "fsd" ||
    na === "row" ||
    na === "ai" ||
    na === "eps"
  ) {
    adfads.push(newonj);
  } else {
    newonj.url = "./img/DOC.svg";
    adfads.push(newonj);
  }

  casd.innerHTML = renderFolder(adfads);
  casd2.innerHTML = renderMobieSmaill(dataface);
};

let adfads;
const renderFolder = (obj) => {
  adfads = obj;
  let outpt = "";
  return (
    outpt +
    obj
      .map(
        (a) => `
        <div  onmouseover="hover(${a.id})" onclick='handlGetId(${a.id})'>
        <div id='d${a.id}'   onclick='handlClickFolder(${a.id})' class='row folder-item j-between a-center'>  
            <div class='row a-center items'>
                <img class='color-icon-folder' src='${a.url}'/>
                <p  >${a.name}</p>
            </div>
            <div class='icon-tree'>
                <img class='' src='./img/CaretRight.svg'/>
            </div>
            </div>

            <div class='header-here p-absolute header-items-tre'></div>

        </div>
    `
      )
      .join(",")
      .replaceAll(/,/g, "")
  );
};

let csdcc;
const renderFolderbig = (obj) => {
  csdcc = obj;
  let out = "";
  return (out += obj
    .map(
      (a) => `
      <div id='tre${a.id}' onclick ='coloset(${a.id})' class='p-relative'>
        <div  onclick='handlGetId(${a.id})' class=' row folder-item-2 j-between a-center'>
            <div  class='row a-center items'>
                <img class='color-icon-folder' src='${a.url}'/>
                <p onclick='handlC2(${a.id})' >${a.name}</p>
            </div>
            <div class='icon-tree '>
                <img onclick='handlClickLis(${a.id})' class=' icon-action-list' src='./img/DotsThreeVertical.svg'/>

            </div>
        </div>
        <ul id='text${a.id}' class='list-action-dothree p-absolute d-none'>
          <li class='head-dot row j-center'>${a.name}</li>
          <li>Tải xuống</li>
          <li onclick='handlRename(${a.id})' >Đổi tên</li>
          <li onclick = 'handlShareCl(${a.id})'>Chia sẻ</li>
          <li>Di chuyển tới</li>
          <li onclick='handlDetele1()'>Xóa</li>
        </ul>

        </div>
        `
    )
    .join(",")
    .replaceAll(/,/g, ""));
};

const renderFolderFilter = (obj) => {
  let out = "";
  return (out += obj
    .map(
      (a) => `
        <div  class='row folder-item-2 j-between a-center'>
            <div  class='row a-center items'>
                <img class='color-icon-folder' src='${a.url}'/>
                <p onclick='handlClickSearh(${a.id})' >${a.name}</p>
            </div>
            <div class='icon-tree'>
                <img class='' src='./img/DotsThreeVertical.svg'/>
            </div>

     </div>

        `
    )
    .join(",")
    .replaceAll(/,/g, ""));
};
const [fixName, fixNameSet] = simpleStatuts("");
const [trs, trsSet] = simpleStatuts(false);
let aray;

const handlClickFolder = (id) => {
  trsSet(!trs());
  const nameLink = document.querySelector(".numbe1");
  const nameLink1 = document.querySelector(".numbe2");
  const nameLink2 = document.querySelector(".numbe3");
  const asc = document.querySelector(".table-right-item");
  const headed = document.querySelector(".header-hese");
  const listBack = document.querySelectorAll(".folder-item");
  const fdca = document.getElementById(`d${id}`);

  [...listBack].forEach(
    (a) =>
      (a.style.cssText = `
  background-color:#FFFFFF;
  `)
  );
  fdca.style.cssText = `
  background-color:#f1f3ce;
  `;

  const arr = adfads.find((a) => {
    fixNameSet(a.name);
    return a.id === id;
  });
  nameLink.style.display = "block";
  nameLink.innerHTML = `<p onclick='handlClickFolder(${id})' class='numbet1 row a-center'><img src='./img/CaretRight.svg'> ${fixName()}</p>`;
  nameLink1.style.display = "none";
  nameLink2.style.display = "none";
  if (arr.chinden === null) {
    asc.innerHTML = renderDetail(arr)
  } else if (arr.chinden.length === 0) asc.innerHTML = "Thư mục này trống";
  else {
    asc.innerHTML = renderFolderbig(arr.chinden);
  }
  aray = arr.chinden;
  headed.innerHTML = renderHeader(id, aray);
};

const [fixName1, fixName1Set] = simpleStatuts("");
let aray2;

const handlC2 = (id) => {
  const nameLink = document.querySelector(".numbe1");
  const nameLink1 = document.querySelector(".numbe2");
  const headed = document.querySelector(".header-hese");
  const nameLink2 = document.querySelector(".numbe3");
  const ktre = document.getElementById(`tre${id}`);

  const asc = document.querySelector(".table-right-item");
  const arr2 = aray.find((a) => {
    fixName1Set(a.name);
    return a.id === id;
  });
  nameLink.style.display = "block";
  nameLink1.style.display = "block";
  nameLink1.innerHTML = `
    <p onclick='handlC2(${id})' class='numbet1 row a-center'>
    <img src='./img/CaretRight.svg'> ${fixName1()}</p>`;
  nameLink2.style.display = "none";
  if (arr2.chinden === null) {
    asc.innerHTML = renderDetail(arr2)
  } else if (arr2.chinden.length === 0) asc.innerHTML = "Thư mục này trống";
  else {
    asc.innerHTML = arr2.chinden
      .map((a) => {
        return `
        <div id='tre3${a.id}' onclick= coloset3(${a.id}) class='p-relative' >
          <div  onclick='handlGetId(${a.id})'  class='row folder-item-2 j-between a-center'>
                      <div class='row a-center items'>
                        <img class='color-icon-folder' src='${a.url}'/>
                        <p  onclick='handlC23(${a.id})'>${a.name}</p>
                    </div>
                    <div class='icon-tree '>
                    <img onclick='handlClickLis(${a.id})' class=' icon-action-list' src='./img/DotsThreeVertical.svg'/>
    
                </div>
            </div>
            <ul id='text${a.id}' class='list-action-dothree p-absolute d-none'>
              <li class='head-dot row j-center'>${a.name}</li>
              <li>Tải xuống</li>
              <li onclick='handlRename(${a.id})'>Đổi tên</li>
              <li onclick = 'handlShareCl(${a.id})'>Chia sẻ</li>
              <li>Di chuyển tới</li>
              <li onclick='handlDetele1()'>Xóa</li>
            </ul>

            </div>
                `;
      })
      .join(",")
      .replaceAll(/,/g, "");
  }
  aray2 = arr2.chinden;
  headed.innerHTML = renderHeader(id, aray2);
};

const handlClickAdd = () => {
  const acsc = document.querySelector(".form-add");
  acsc.classList.toggle("d-none");
};

const hanldCkickAddtree = (event) => {
  event.preventDefault();
  const iputvl = document.querySelector(".input-create");
  const redr = document.querySelector(".render-data");
  const acsc = document.querySelector(".form-add");
  const red2s = document.querySelector(".data-render");

  const myobj = {
    id: 19 + adfads.length,
    name: iputvl.value,
    url: "./img/Vector.svg",
    img: "",
    chinden: [],
  };
  flatData.push(myobj);
  RecenData.push(myobj);
  RecenMobie.push(myobj);
  if (myobj.name.length > 2) {
    adfads.push(myobj);
    redr.innerHTML = renderFolder(adfads);
    red2s.innerHTML = renderMobieSmaill(adfads);
    iputvl.value = "";
    acsc.classList.toggle("d-none");
  } else alert("Nhập ít nhất 3 ký tự");
};

let aray3;
const [fixName2, fixName2Set] = simpleStatuts("");

const handlC23 = (id) => {
  const nameLink = document.querySelector(".numbe1");
  const nameLink1 = document.querySelector(".numbe2");
  const nameLink2 = document.querySelector(".numbe3");
  const headed = document.querySelector(".header-hese");

  const asc = document.querySelector(".table-right-item");
  const arr2 = aray2.find((a) => {
    fixName2Set(a.name);
    return a.id === id;
  });
  nameLink2.style.display = "block";
  nameLink2.innerHTML = `<p onclick='handlC23(${id})' class='numbet1 row a-center'>
<img src='./img/CaretRight.svg'>
${fixName2()}</p>`;
  if (arr2.chinden === null) {
    asc.innerHTML = renderDetail(arr2)
  } else if (arr2.chinden.length === 0)
    asc.innerHTML = `<p style="padding: 10px;">Thư mục này trống</p>`;
  else {
    asc.innerHTML = arr2.chinden
      .map(
        (a) => `
              <div id='tre2${a.id}' onclick= coloset3(${a.id}) class='p-relative' >
                <div  onclick='handlGetId(${a.id})'  class='row folder-item-2 j-between a-center'>
                    <div class='row a-center items'>
                        <img class='color-icon-folder' src='${a.url}'/>
                        <p  onclick='handlC234(${a.id})' >${a.name}</p>
                    </div>
                    <div class='icon-tree '>
                    <img onclick='handlClickLis(${a.id})' class='icon-action-list' src='./img/DotsThreeVertical.svg'/>
    
                </div>
            </div>
            <ul id='text${a.id}' class='list-action-dothree p-absolute d-none'>
              <li class='head-dot row j-center'>${a.name}</li>
              <li>Tải xuống</li>
              <li onclick='handlRename(${a.id})'>Đổi tên</li>
              <li onclick = 'handlShareCl(${a.id})'>Chia sẻ</li>
              <li>Di chuyển tới</li>
              <li onclick='handlDetele1()'>Xóa</li>
            </ul>

            </div>
                `
      )
      .join(",")
      .replaceAll(/,/g, "");
  }
  aray3 = aray2.chinden;
  headed.innerHTML = renderHeader(id, aray3);
};

const handlC234 = (id) => {
  const headed = document.querySelector(".header-hese");
  headed.innerHTML = renderHeader(id);
  console.log("chay roi");
};

const handlClickSearh = (id) => {
  const asc = document.querySelector(".table-right-item");
  const headed = document.querySelector(".header-hese");
  headed.innerHTML = renderHeader(id);
  const arr4 = flatData.find((a) => a.id === id);
  if (arr4.chinden === null) {
    asc.innerHTML = renderDetail(arr4)
  } else if (arr4.chinden.length === 0)
    asc.innerHTML = `<p style="padding: 10px;">Thư mục này trống</p>`;
  else {
    asc.innerHTML = arr4.chinden
      .map(
        (a) => `
                <div  class='row folder-item-2 j-between a-center'>
                    <div class='row a-center items'>
                        <img class='color-icon-folder' src='${a.url}'/>
                        <p onclick='handlC234(${a.id})' >${a.name}</p>
                    </div>
                    <div class='icon-tree'>
                        <img class='' src='./img/DotsThreeVertical.svg'/>
                    </div>
             </div>
        
                `
      )
      .join(",")
      .replaceAll(/,/g, "");
  }
};

let aisz;
const renderHeader = (id, obj) => {
  aisz = obj;
  return `
  
  <header class="header row a-center j-between ">
            <div onclick='handlREN2()' class="item-left">
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
                  <input onchange='handlOnfile1(event)' class='d-none' type='file' id='file' name='file'/>
                  <label for='file' class="upload row a-center">
                    <img class="color-icon icon-upload" src="./img/ArrowLineUp.svg" alt="upload" />
                    <p class="upload-text">Upload</p>
                  </label>
                  <button class='row a-center'>
                  <img class='color-icon icon-upload' src="./img/ArrowLineDown.svg" alt="Soi" />
                  <p class='upload-text down-load'>Download</p>
                </button>
                <button onclick='handleClickShow()' >
                  <img class='color-icon lager' src="./img/MagnifyingGlass.svg" alt="Soi" />
                </button>
                <button  onclick='handlClickAdd1(event,${id})'   class="addfile">
                  <img
                    class="color-icon lager"
                    src="./img/FolderNotchPlus.svg"
                    alt=""
                  />
                </button>
                <div  id='a${id}' class='form-add p-absolute row a-center j-center d-none'>
                    <div class='form-add-items row a-center j-center'>
                      <div class='form-add-item'>
                       <h3>Tạo mới folder</h3>
                      <input id='b${id}' class='input-create' type='text' placeholder='Nhập tên folder' />
                      <div class='team-butn row a-center j-end'>
                      <div onclick='handlClickAdd1(event,${id})'  class='but-tn'>Không</div>
                      <div onclick='hanldCkickAddtree1(event,${id})' class='but-tn but-tn-1'>Tạo mới</div>
                      </div>
                      </div>
    
                    </div>
                  </div>
                  <button id ='z-${id}' onclick='handlDetele1()' >
                  <img class='color-icon lager' src='./img/Trash.svg' alt='thung rac'/>
                  </button>
                  <button onclick='showNav()'  class="tab-nav">
                  <img class="color-icon lager" src="./img/Table.svg" alt="" />
                </button>
              </div>
            </div>
            <div class="center-header p-absolute row a-center j-center d-none">       
            <input onchange='handlChane(event)' class="input-header p-relative" type="text" placeholder="Tìm kiếm mọi thứ" />
            <button onclick='handlClickFilter()' class='btn-header-input p-absolute'>Tìm kiếm</button>
           </div>
           <div id='rename${id}' class='rename row a-center j-center p-absolute j-center d-none'>
           <form onsubmit='handlSubmitbtn(event,${id})' class='form-rename'>
           <p class='text-rename'>Nhập tên vào đây</p>
           <input class='input-rename' type='text' placeholder='Nhập tên mới' />
           <button type='submit' class='but-rename'>Thay đổi</button>
           </form>
        </div>

        <div id='share${id}' class='rename row a-center j-center p-absolute j-center d-none'>
        <form onsubmit='handlSubmitShare2(event,${id})' class='form-rename'>
        <p class='text-rename'>Chia sẻ cho email:</p>
        <input class='input-share' type='text' placeholder='Nhập email' />
        <button type='submit' class='but-rename'>Share</button>
        </form>

          </header>
  `;
};
const handlClickAdd1 = (event, id) => {
  const acsc = document.getElementById(`a${id}`);
  acsc.classList.toggle("d-none");
};
const handlRename = (id) => {
  const ElFormRename = document.getElementById(`rename${id}`);
  const teds = document.getElementById(`text${id}`);
  ElFormRename.classList.toggle("d-none");
  teds.classList.toggle("d-block");

};

const handlSubmitShare2 = (event,id) => {
  event.preventDefault();
  const ElFormRename = document.getElementById(`share${id}`);
  ElFormRename.classList.toggle("d-none");
  const EliputShare = document.querySelector(".input-share");
  const itemis = csdcc.find((a) => a.id === id);
  const newnames = {
    ...itemis,
    share: EliputShare.value === "" ? itemis.share : EliputShare.value,
  };
  if (newnames.share !== "") {
    ShareData.push(newnames);
  }
}

const handlSubmitbtn = (event, id) => {
  event.preventDefault();
  const ElFormRename = document.getElementById(`rename${id}`);
  ElFormRename.classList.toggle("d-none");
  const Elinput = document.querySelector(".input-rename");
};

const hanldCkickAddtree1 = (event, id) => {
  event.preventDefault();
  const iputvl = document.getElementById(`b${id}`);
  const redr = document.querySelector(".table-right-item");
  const acsc = document.getElementById(`a${id}`);

  const myobj = {
    id: 90 + aisz.length,
    name: iputvl.value,
    url: "./img/Vector.svg",
    img: "",
    chinden: [],
  };
  RecenData.push(myobj);
  flatData.push(myobj);
  if (myobj.name.length > 2) {
    aisz.push(myobj);
    redr.innerHTML = renderFolderbig(aisz);
    iputvl.value = "";
    acsc.classList.toggle("d-none");
  } else alert("Nhập ít nhất 3 ký tự");
};

const [fileo1, fileo1Set] = simpleStatuts("");

const handlOnfile1 = (event) => {
  const redr = document.querySelector(".table-right-item");
  fileo1Set(event.target.files[0].name);
  const newonj = {
    id: 200 + aisz.length,
    url: "./img/JPG.svg",
    img: "",
    name: fileo1(),
    chinden: null,
  };
  flatData.push(newonj);
  RecenData.push(newonj);
  let na = newonj.name.slice(newonj.name.indexOf(".") + 1).toLocaleLowerCase();
  if (
    na === "jpeg" ||
    na === "jpg" ||
    na === "pdf" ||
    na === "gif" ||
    na === "fsd" ||
    na === "row" ||
    na === "ai" ||
    na === "eps"
  ) {
    aisz.push(newonj);
  } else {
    newonj.url = "./img/DOC.svg";
    aisz.push(newonj);
  }

  redr.innerHTML = renderFolderbig(aisz);
};

let idting;
const handlGetId = (id) => {
  idting = id;
};

const handlDetele1 = () => {
  const redr1 = document.querySelector(".table-right-item");
  const redr = document.querySelector(".render-data");

  const del = adfads.find((a) => a.id === idting);
  const redel = adfads.filter((a) => a.id !== idting);

  redr.innerHTML = renderFolder(redel);

  const del1 = csdcc.find((a) => a.id === idting);

  if (del !== undefined) {
    delData.push(del);
  } else {
    console.log("");
  }

  const redel1 = csdcc.filter((a) => a.id !== idting);
  if (del1 !== undefined) {
    delData.push(del1);
  } else {
    console.log("");
  }

  redr1.innerHTML = renderFolderbig(redel1);
};

const hover = (id) => {
  const fdca = document.getElementById(`d${id}`);
  fdca.classList.toggle("hover-item");
};
const [fixBg, fixBgSet] = simpleStatuts(false);

const coloset = (id) => {
  fixBgSet(!fixBg());
  const colorEl = document.getElementById(`tre${id}`);

  fixBg()
    ? (colorEl.style.cssText = `
background-color:#f1f3ce;
`)
    : (colorEl.style.cssText = `
background-color:#FAFAFA;
`);
};

const [fixBg1, fixBg1Set] = simpleStatuts(false);

const coloset1 = (id) => {
  fixBg1Set(!fixBg1());
  const colorEl = document.getElementById(`tre${id}`);

  fixBg1()
    ? (colorEl.style.cssText = `
background-color:#f1f3ce;

`)
    : (colorEl.style.cssText = `
background-color:#FAFAFA;

`);
};

const [fixBg2, fixBg2Set] = simpleStatuts(false);

const coloset2 = (id) => {
  fixBg2Set(!fixBg2());
  const colorEl = document.getElementById(`tre2${id}`);

  fixBg2()
    ? (colorEl.style.cssText = `
background-color:#f1f3ce;

`)
    : (colorEl.style.cssText = `
background-color:#FAFAFA;

`);
};

const [fixBg3, fixBg3Set] = simpleStatuts(false);

const coloset3 = (id) => {
  fixBg3Set(!fixBg3());
  const colorEl = document.getElementById(`tre3${id}`);

  fixBg3()
    ? (colorEl.style.cssText = `
background-color:#f1f3ce;

`)
    : (colorEl.style.cssText = `
background-color:#FAFAFA;

`);
};

const handlClickLis = (id) => {
  const shows = document.getElementById(`text${id}`);
  shows.classList.toggle("d-block");
  const headed = document.querySelector(".header-hese");
  headed.innerHTML = renderHeader(id);
};
window.onclick = function (event) {
  if (!event.target.matches(".icon-action-list")) {
    var dropdowns = document.getElementsByClassName("list-action-dothree");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("d-block")) {
        openDropdown.classList.remove("d-block");
      }
    }
  }
};
// Share
const handlShare = () => {
  const redr = document.querySelector(".data-render");
  const TextEl = document.querySelector(".head-text-mobie");

  const redbde = document.querySelector(".tree-table");
  redbde.innerHTML = `
    <div class='item-recen'>
    <p class='head-Recen row'>Bạn đã chia sẻ các file:</p>
    <div class='row all-file-recen'>
          ${
            ShareData.length === 0
              ? `<div class='NoneF row a-center j-center'><p>Không có file nào được chia sẻ</p></div>`
              : ShareData.map(
                  (a) => `

              <div class='col-2 wid-item'>
                <div class='items-re'>
                  <img class='img-recos' src='${a.url}'/>
                  <p>${
                    a.name.length < 12 ? a.name : a.name.slice(0, 11) + "..."
                  }</p>
                </div>
              </div>
          `
                )
                  .join(",")
                  .replaceAll(/,/g, "")
          }
        </div>
    </div>
  `;
  ShareData.length === 0
    ? (redr.innerHTML = `<p>Thư mục trống</p>`)
    : (redr.innerHTML = renderMobieSmaill(ShareData));
  TextEl.innerHTML = `<p>File và Folder đã được chia sẻ</p>`;
  const navbar = document.querySelector(".nav-left");
  navbar.classList.toggle("hidenone");
};

// Recos

const handlRecos = () => {
  const redr = document.querySelector(".data-render");
  const TextEl = document.querySelector(".head-text-mobie");

  const redbde = document.querySelector(".tree-table");
  redbde.innerHTML = `
    <div class='item-recen'>
    <p class='head-Recen row'>Gần đây bạn đã tạo và upload các file:</p>
    <div class='row all-file-recen'>
          ${
            RecenData.length === 0
              ? `<div class='NoneF row a-center j-center'><p>Gần đây bạn không có hoạt động</p></div>`
              : RecenData.map(
                  (a) => `

              <div class='col-2 wid-item'>
                <div class='items-re'>
                  <img class='img-recos' src='${a.url}'/>
                  <p>${
                    a.name.length < 12 ? a.name : a.name.slice(0, 11) + "..."
                  }</p>
                </div>
              </div>
          `
                )
                  .join(",")
                  .replaceAll(/,/g, "")
          }
        </div>
    </div>
  `;
  RecenMobie.length === 0
    ? (redr.innerHTML = `<p>Thư mục trống</p>`)
    : (redr.innerHTML = renderMobieSmaill(RecenMobie));
  TextEl.innerHTML = `<p>File và Folder đã thêm gần đây</p>`;
  const navbar = document.querySelector(".nav-left");
  navbar.classList.toggle("hidenone");
};

const handlShowDele = () => {
  const redr = document.querySelector(".data-render");
  const TextEl = document.querySelector(".head-text-mobie");

  const redbde = document.querySelector(".tree-table");
  redbde.innerHTML = `
    <div class='item-recen'>
    <p class='head-Recen row'>Bạn đã xóa các file này:</p>
    <div class='row all-file-recen'>
          ${
            delData.length === 0
              ? `<div class='NoneF row a-center j-center'><p>Gần đây bạn không xóa file nào</p></div>`
              : delData
                  .map(
                    (a) => `

              <div class='col-2 wid-item'>
                <div class='items-re'>
                  <img class='img-recos' src='${a.url}'/>
                  <p>${
                    a.name.length < 12 ? a.name : a.name.slice(0, 11) + "..."
                  }</p>
                </div>
              </div>
          `
                  )
                  .join(",")
                  .replaceAll(/,/g, "")
          }
        </div>
    </div>
  `;
  delData.length === 0
    ? (redr.innerHTML = `<p>Thư mục trống</p>`)
    : (redr.innerHTML = renderMobieSmaill(delData));

  TextEl.innerHTML = `<p>File và Folder đã xóa</p>`;
  const navbar = document.querySelector(".nav-left");
  navbar.classList.toggle("hidenone");
};

const handlREN = () => {
  const flera = document.querySelector(".head-table");
  flera.innerHTML = renderTabe(adfads);
  const navbar = document.querySelector(".nav-left");
  navbar.classList.toggle("hidenone");
};

const handlREN2 = () => {
  const flera = document.querySelector(".head-table");
  flera.innerHTML = renderTabe(dataface);
};

const showNav = () => {
  const navbar = document.querySelector(".nav-left");
  navbar.classList.toggle("hidenone");
};

const handlClose = () => {
  const navbar = document.querySelector(".nav-left");
  navbar.classList.toggle("hidenone");
};

//// mobile
let dataface = [];
const renderMobie = (obj) => {
  dataface = obj;
  let redut = "";

  return (redut += [...obj]
    .map(
      (a) => `
  <div id='mobie${a.id}' onclick='mobiClickHead(${a.id})' class='tree-mobie-small row j-between a-center p-relative'>
      <div class='row a-center items'>
          <img class='color-icon' src='${a.url}'/>
          <p onclick='handlClickMobie(${a.id})' >${a.name}</p>
      </div>
      <div class='icon-t-mobie'>
          <img onclick='handlClickLis2(${a.id})' class='' src='./img/DotsThreeVertical.svg'/>
      </div>
      <ul id='text2${a.id}' class='list-action-dothree p-absolute d-none'>
      <li class='head-dot row j-center'>${a.name}</li>
      <li>Tải xuống</li>
      <li onclick='handlRename2(${a.id})'>Đổi tên</li>
      <li onclick = 'handlShareCl(${a.id})' >Chia sẻ</li>
      <li>Di chuyển tới</li>
      <li onclick='handDeteMobie(${a.id})'>Xóa</li>
    </ul>

  </div>
  `
    )
    .join(",")
    .replaceAll(/,/g, ""));
};

let arrayMobi;
const renderMobieSmaill = (obj) => {
  arrayMobi = obj;

  let redut = "";

  return (redut += [...obj]
    .map(
      (a) => `
  <div id='mobie${a.id}' onclick='mobiClickHead(${a.id})' class='tree-mobie-small row j-between a-center p-relative'>
      <div class='row a-center items items-mobie'>
          <img class='color-icon' src='${a.url}'/>
          <p onclick='handlClickMobie2(${a.id})' >${a.name}</p>
          <p id='share-name${a.id}' class=''> /${a.share===''? 'Riêng tư':a.share}</p>
      </div>
      <div class='icon-t-mobie'>
          <img onclick='handlClickLis2(${a.id})' class='' src='./img/DotsThreeVertical.svg'/>
      </div>
      <ul id='text2${a.id}' class='list-action-dothree p-absolute d-none'>
      <li class='head-dot row j-center'>${a.name}</li>
      <li>Tải xuống</li>
      <li onclick='handlRename2(${a.id})'>Đổi tên</li>
      <li onclick = 'handlShareCl(${a.id})'>Chia sẻ</li>
      <li>Di chuyển tới</li>
      <li onclick='handDeteMobie(${a.id})'>Xóa</li>
    </ul>

  </div>
  `
    )
    .join(",")
    .replaceAll(/,/g, ""));
};
let dataFilll;
const renderHeader2 = (id, obj) => {
  dataFilll = obj;
  return `
  
  <header class="header row a-center j-between ">
            <div onclick='handlREN2()' class="item-left">
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
                  <input onchange='handlOnfileMobie(event,${id})' class='d-none' type='file' id='file' name='file'/>
                  <label for='file' class="upload row a-center">
                    <img class="color-icon icon-upload" src="./img/ArrowLineUp.svg" alt="upload" />
                    <p class="upload-text">Upload</p>
                  </label>
                  <button class='row a-center'>
                  <img class='color-icon icon-upload' src="./img/ArrowLineDown.svg" alt="Soi" />
                  <p class='upload-text down-load'>Download</p>
                </button>
                <button onclick='handleClickShow()' >
                  <img class='color-icon lager' src="./img/MagnifyingGlass.svg" alt="Soi" />
                </button>
                <button  onclick='handlClickAdd1(event,${id})'   class="addfile">
                  <img
                    class="color-icon lager"
                    src="./img/FolderNotchPlus.svg"
                    alt=""
                  />
                </button>
                <div  id='a${id}' class='form-add p-absolute row a-center j-center d-none'>
                    <div class='form-add-items row a-center j-center'>
                      <div class='form-add-item'>
                       <h3>Tạo mới folder</h3>
                      <input id='b${id}' class='input-create' type='text' placeholder='Nhập tên folder' />
                      <div class='team-butn row a-center j-end'>
                      <div onclick='handlClickAdd1(event,${id})'  class='but-tn'>Không</div>
                      <div onclick='hanldCkickAddMobie(event,${id})' class='but-tn but-tn-1'>Tạo mới</div>
                      </div>
                      </div>
    
                    </div>
                  </div>
                  <button id ='z-${id}' onclick='handDeteMobie(${id})' >
                  <img class='color-icon lager' src='./img/Trash.svg' alt='thung rac'/>
                  </button>
                  <button onclick='showNav()'  class="tab-nav">
                  <img class="color-icon lager" src="./img/Table.svg" alt="" />
                </button>
              </div>
            </div>
            <div class="center-header p-absolute row a-center j-center d-none">       
            <input onchange='handlChane(event)' class="input-header p-relative" type="text" placeholder="Tìm kiếm mọi thứ" />
            <button onclick='handlClickFilter()' class='btn-header-input p-absolute'>Tìm kiếm</button>
           </div>

           <div id='rename2${id}' class='rename row a-center j-center p-absolute j-center d-none'>
           <form onsubmit='handlSubmitbtn2(event,${id})' class='form-rename'>
           <p class='text-rename'>Nhập tên vào đây</p>
           <input class='input-rename' type='text' placeholder='Nhập tên mới' />
           <button type='submit' class='but-rename'>Thay đổi</button>
           </form>
          </div>

           <div id='share${id}' class='rename row a-center j-center p-absolute j-center d-none'>
           <form onsubmit='handlSubmitShare(event,${id})' class='form-rename'>
           <p class='text-rename'>Chia sẻ cho email:</p>
           <input class='input-share' type='text' placeholder='Nhập email' />
           <button type='submit' class='but-rename'>Share</button>
           </form>
           
        </div>

          </header>
  `;
};
const handlClickMobie = (id) => {
  const Elment = document.querySelector(".data-render");
  const newdat = [...dataface].find((a) => a.id === id);
  const camback = document.querySelector(".comback");
  const headed = document.querySelector(".header-hese");

  camback.innerHTML = `<p class='text-mean-mobie' >/ ${newdat.name}</p>`;

  if (newdat.chinden === null) {
    Elment.innerHTML=renderDetail(newdat)

  } else if (newdat.chinden.length === 0) {
    Elment.innerHTML = `<p >Thư mục này trống</p>`;
    headed.innerHTML = renderHeader2(id, newdat.chinden);
  } else {
    Elment.innerHTML = renderMobieSmaill(newdat.chinden);
    headed.innerHTML = renderHeader2(id, newdat.chinden);
  }
};

const handlClickMobie2 = (id) => {
  const camback = document.querySelector(".comback");
  const Elment = document.querySelector(".data-render");
  const newdat = [...arrayMobi].find((a) => a.id === id);

  const headed = document.querySelector(".header-hese");
  camback.innerHTML = `<p class='text-mean-mobie' >/ ${newdat.name}</p>`;
  if (newdat.chinden === null) {
    Elment.innerHTML=renderDetail(newdat)
  } else if (newdat.chinden.length === 0) {
    Elment.innerHTML = `<p>Thư mục này trống</p>`;
    headed.innerHTML = renderHeader2(id, newdat.chinden);
  } else {
    Elment.innerHTML = renderMobieSmaill(newdat.chinden);
    headed.innerHTML = renderHeader2(id, newdat.chinden);
  }
};

const handlOnfileMobie = (event, id) => {
  const casd = document.querySelector(".data-render");
  fileoSet(event.target.files[0].name);
  const newonj = {
    id: 9000 + RecenMobie.length,
    url: "./img/JPG.svg",
    img: "",
    name: fileo().length < 15 ? fileo() : fileo().slice(0, 14) + "...",
    chinden: null,
  };
  flatData.push(newonj);
  RecenMobie.push(newonj);
  let na = newonj.name.slice(newonj.name.indexOf(".") + 1).toLocaleLowerCase();
  if (
    na === "jpeg" ||
    na === "jpg" ||
    na === "pdf" ||
    na === "gif" ||
    na === "fsd" ||
    na === "row" ||
    na === "ai" ||
    na === "eps"
  ) {
    dataFilll.push(newonj);
  } else {
    newonj.url = "./img/DOC.svg";
    dataFilll.push(newonj);
  }

  casd.innerHTML = renderMobieSmaill(dataFilll);
};

const hanldCkickAddMobie = (event) => {
  event.preventDefault();
  const iputvl = document.querySelector(".input-create");
  const redr = document.querySelector(".data-render");
  const acsc = document.querySelector(".form-add");

  const myobj = {
    id: 700 + RecenMobie.length,
    name: iputvl.value,
    url: "./img/Vector.svg",
    img: "",
    chinden: [],
  };
  flatData.push(myobj);
  RecenMobie.push(myobj);
  if (myobj.name.length > 2) {
    dataFilll.push(myobj);
    redr.innerHTML = renderMobieSmaill(dataFilll);
    iputvl.value = "";
    acsc.classList.toggle("d-none");
  } else alert("Nhập ít nhất 3 ký tự");
};

let idding;
const mobiClickHead = (id) => {
  idding = id;
  const allMobie = document.querySelectorAll(".tree-mobie-small");
  const cardMobie = document.getElementById(`mobie${id}`);
  allMobie.forEach((a) => (a.style.backgroundColor = "#FFFFFF"));
  cardMobie.style.backgroundColor = "#f1f3ce";
};

const handlClickHome = () => {
  const Elment = document.querySelector(".data-render");
  const ElPmobie = document.querySelector(".text-mean-mobie");
  Elment.innerHTML = renderMobieSmaill(dataface);
  ElPmobie?.classList.toggle("d-none");
};

const handDeteMobie = (id) => {
  const redr = document.querySelector(".data-render");
  const delte = arrayMobi.find((a) => a.id === idding);
  arrayMobi.splice(arrayMobi.indexOf(delte), 1);

  if (delte !== undefined) {
    delData.push(delte);
  } else {
    console.log("khong co gia tri");
  }
  redr.innerHTML = renderMobieSmaill(arrayMobi);
};

const handlClickLis2 = (id) => {
  const headed = document.querySelector(".header-hese");
  headed.innerHTML = renderHeader2(id, arrayMobi);
  const shows = document.getElementById(`text2${id}`);
  shows.classList.toggle("d-none");
};

const handlRename2 = (id) => {
  const ElFormRename = document.getElementById(`rename2${id}`);
  const teds = document.getElementById(`text2${id}`);
  ElFormRename.classList.toggle("d-none");
  teds.classList.toggle("d-none");
};

const handlSubmitbtn2 = (event, id) => {
  event.preventDefault();
  const ElFormRename = document.getElementById(`rename2${id}`);
  ElFormRename.classList.toggle("d-none");
  const Elinput = document.querySelector(".input-rename");
  const itemis = dataFilll.map((a) => {
    if (a.id === id) {
     return { ...a,
      name :Elinput.value===''?a.name:Elinput.value
    }
    }
    return a;
  });
  const redr = document.querySelector(".data-render");
  redr.innerHTML = renderMobieSmaill(itemis);
};

const handlShareCl = (id) => {
  const ELShare = document.getElementById(`share${id}`);
  const teds = document.getElementById(`text2${id}`);
  ELShare.classList.toggle("d-none");
  teds.classList.toggle("d-none");
};

const handlSubmitShare = (event, id) => {
  event.preventDefault();
  const ElFormRename = document.getElementById(`share${id}`);
  ElFormRename.classList.toggle("d-none");
  const EliputShare = document.querySelector(".input-share");
  const itemis = dataFilll.find((a) => a.id === id);
  const newnames = {
    ...itemis,
    share: EliputShare.value === "" ? itemis.share : EliputShare.value,
  };
  if (newnames.share !== "") {
    ShareData.push(newnames);
  }
};


const renderDetail = (obj) => {
  return `
  <div class='detail'>
    <div class='nav-detail'>
        <p>Ảnh của bạn</p> 
    </div>
    <div class='img-detail'>
        <img class='img-crust' src='${obj.img}'/>
    </div>
  </div>
  `
}