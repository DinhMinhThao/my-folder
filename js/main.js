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
    chinden: [
      {
        id: 2,
        url: "./img/Vector.svg",
        img: "",
        name: "Setup",
        chinden: [],
      },
      {
        id: 3,
        url: "./img/Vector.svg",
        img: "",
        name: "Tài liệu",
        chinden: [
          {
            id: 4,
            url: "./img/Vector.svg",
            img: "",
            name: "Tài liệu mật",
            chinden: [
              {
                id: 5,
                url: "./img/DOC.svg",
                img: "",
                name: "Hướng đẫn tán gái để lấy làm vợ.doc",
                chinden: null,
              },
              {
                id: 6,
                url: "./img/DOC.svg",
                img: "",
                name: "Hướng đẫn xấu trai vẫn lấy được vợ.doc",
                chinden: null,
              },
            ],
          },
          {
            id: 7,
            url: "./img/DOC.svg",
            img: "",
            name: "Bài tập của tôi.doc",
            chinden: null,
          },
          {
            id: 8,
            url: "./img/DOC.svg",
            img: "",
            name: "Hướng dẫn làm đề án.doc",
            chinden: null,
          },
        ],
      },
      {
        id: 9,
        url: "./img/Vector.svg",
        img: "",
        name: "Ảnh của tôi",
        chinden: [
          {
            id: 10,
            url: "./img/JPG.svg",
            img: "./img/crush.svg",
            name: "Ảnh crush mặc đẹp.jpg",
            chinden: null,
          },
          {
            id: 11,
            url: "./img/JPG.svg",
            img: "./img/crush3.svg",
            name: "Ảnh crush.jpg",
            chinden: null,
          },
          {
            id: 12,
            url: "./img/JPG.svg",
            img: "./img/crush2.svg",
            name: "Được ôm crush.jpg",
            chinden: null,
          },
          {
            id: 13,
            url: "./img/JPG.svg",
            img: "./img/crush1.svg",
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
    img: "",
    name: "Doccument 1",
    chinden: [],
  },
  {
    id: 15,
    url: "./img/Vector.svg",
    img: "",
    name: "Doccument 2",
    chinden: [],
  },
  {
    id: 16,
    url: "./img/Vector.svg",
    img: "",
    name: "Doccument 3",
    chinden: [],
  },
];

const dsaf = data.flatMap((a) => [a, ...a.chinden]);
const flatDara = dsaf.flatMap((a) => [a, ...a.chinden]);
const flatData = [...flatDara, ...flatDara[6].chinden];
let delData=[];
let RecenData=[];

const EMAIL = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
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
    <nav class="nav-left">
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
              <p class="name-user">Thùng rác</p>
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
      <div class='header-hese '>${header()}</div>


        <div class="tree-table row">
        <div class='tree-table-left'>
        <div class='name-tre'>
            <p>My folder</p>
        </div>
        <div class='render-data'>
        ${renderFolder(data)}
        </div>
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
              <input onchange='handlOnfile(event)' class='d-none' type='file' id='file' name='file'/>
              <label for='file' class="upload row a-center">
                <img class="color-icon" src="./img/ArrowLineUp.svg" alt="upload" />
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
                  <div onclick='handlClickAdd(event)' class='but-tn'>Không</div>
                  <div onclick ='hanldCkickAddtree(event)' class='but-tn'>Tạo mới</div>
                  </div>
                  </div>

                </div>
              </div>
              <button onclick='handlDetele1()' >
              <img class='color-icon lager' src='./img/Trash.svg' alt='thung rac'/>
              </button>
            <button  class="addfile">
              <img class="color-icon lager" src="./img/Table.svg" alt="" />
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
  const asc = document.querySelector(".table-right-item");
  console.log(sear());
  const find = flatData.filter((a) =>
    a.name.toLocaleLowerCase().includes(sear().toLocaleLowerCase())
  );
  asc.innerHTML = renderFolderFilter(find);
  document.querySelector(".center-header").classList.toggle("d-none");
};

const [fileo, fileoSet] = simpleStatuts("");

const handlOnfile = (event) => {
  const casd = document.querySelector(".render-data");
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

  casd.innerHTML= renderFolder(adfads);
};
let adfads;
const renderFolder = (obj) => {
  adfads=obj;
  let outpt = "";
  return (
    outpt +
    obj
      .map(
        (a) => `
        <div>
        <div onclick='handlGetId(${a.id})' class='row folder-item j-between a-center'>  
            <div class='row a-center items'>
                <img class='color-icon-folder' src='${a.url}'/>
                <p onclick='handlClickFolder(${a.id})' >${a.name}</p>
            </div>
            <div class='icon-tree'>
                <img src='./img/CaretRight.svg'/>
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

let csdcc ;
const renderFolderbig = (obj) => {
  csdcc = obj;
  let out = "";
  return (out += obj
    .map(
      (a) => `
        <div onclick='handlGetId(${a.id})' class=' row folder-item-2 j-between a-center'>
            <div  class='row a-center items'>
                <img class='color-icon-folder' src='${a.url}'/>
                <p onclick='handlC2(${a.id})' >${a.name}</p>
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
                <img src='./img/DotsThreeVertical.svg'/>
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

  const arr = adfads.find((a) => {
    fixNameSet(a.name);
    return a.id === id;
  });

  nameLink.innerHTML = `<p onclick='handlClickFolder(${id})' class='numbet1 row a-center'><img src='./img/CaretRight.svg'> ${fixName()}</p>`;
  nameLink1.style.display = "none";
  nameLink2.style.display = "none";
  if (arr.chinden === null) {
    console.log("khong co thu muc");
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

  const asc = document.querySelector(".table-right-item");
  const arr2 = aray.find((a) => {
    fixName1Set(a.name);
    return a.id === id;
  });
  nameLink1.style.display = "block";
  nameLink1.innerHTML = `<p onclick='handlC2(${id})' class='numbet1 row a-center'><img src='./img/CaretRight.svg'> ${fixName1()}</p>`;
  nameLink2.style.display = "none";
  if (arr2.chinden === null) {
    console.log("khong co thu muc");
  } else if (arr2.chinden.length === 0) asc.innerHTML = "Thư mục này trống";
  else {
    asc.innerHTML = arr2.chinden
      .map((a) => {
        return `<div onclick='handlGetId(${a.id})'  class='row folder-item-2 j-between a-center'>
                    <div class='row a-center items'>
                        <img class='color-icon-folder' src='${a.url}'/>
                        <p onclick='handlC23(${a.id})'>${a.name}</p>
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
  headed.innerHTML = renderHeader(id, aray2);
};

const handlClickAdd = (event) => {
  const acsc = document.querySelector(".form-add");
  acsc.classList.toggle("d-none");
};

const hanldCkickAddtree = (event) => {
  event.preventDefault();
  const iputvl = document.querySelector(".input-create");
  const redr = document.querySelector(".render-data");
  const acsc = document.querySelector(".form-add");

  const myobj = {
    id: 19 + adfads.length,
    name: iputvl.value,
    url: "./img/Vector.svg",
    img: "",
    chinden: [],
  };
  flatData.push(myobj);
  RecenData.push(myobj);
  if (myobj.name.length > 2) {
    adfads.push(myobj);
    redr.innerHTML = renderFolder(adfads);
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
    console.log("khong co muc");
  } else if (arr2.chinden.length === 0)
    asc.innerHTML = `<p style="padding: 10px;">Thư mục này trống</p>`;
  else {
    asc.innerHTML = arr2.chinden
      .map(
        (a) => `
                <div onclick='handlGetId(${a.id})' class='row folder-item-2 j-between a-center'>
                    <div class='row a-center items'>
                        <img class='color-icon-folder' src='${a.url}'/>
                        <p onclick='handlC234(${a.id})' >${a.name}</p>
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
    console.log("khong co muc");
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
                        <img src='./img/DotsThreeVertical.svg'/>
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
                  <input onchange='handlOnfile1(event)' class='d-none' type='file' id='file' name='file'/>
                  <label for='file' class="upload row a-center">
                    <img class="color-icon" src="./img/ArrowLineUp.svg" alt="upload" />
                    <p class="upload-text">Upload</p>
                  </label>
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
                      <div onclick='hanldCkickAddtree1(event,${id})' class='but-tn'>Tạo mới</div>
                      </div>
                      </div>
    
                    </div>
                  </div>
                  <button onclick='handlDetele1()' >
                  <img class='color-icon lager' src='./img/Trash.svg' alt='thung rac'/>
                  </button>
                <button  class="addfile">
                  <img class="color-icon lager" src="./img/Table.svg" alt="" />
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
const handlClickAdd1 = (event, id) => {
  const acsc = document.getElementById(`a${id}`);
  acsc.classList.toggle("d-none");
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
  idting=id;
}

const handlDetele1 = () => {
  const redr1 = document.querySelector(".table-right-item");
  const redr = document.querySelector(".render-data");
  const del = adfads.find(a=>a.id === idting)
  const redel = adfads.filter(a=>a.id !== idting)
  redr.innerHTML = renderFolder(redel);

  const del1 = csdcc.find(a=>a.id === idting )
  const redel1 = csdcc.filter(a=>a.id !== idting )

  redr1.innerHTML = renderFolderbig(redel1)
}