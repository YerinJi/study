var itemList = [];
var addBtn = document.querySelector("#add");
addBtn.addEventListener("click", addList);

function addList(){
    var item = document.querySelector("#item").value;
    if (item != null){
        itemList.push(item);
        document.querySelector("#item").value = "";
        document.querySelector("#item").focus();
    }
    showList();
}

function showList(){
    var list = "<ul>";
    for (var i=0; i<itemList.length; i++){
        list += "<li>" + itemList[i] + "<span class='close' id" + i +">X</span></li>";
    }
    list += "</ul>";
    document.querySelector("#itemList").innerHTML = list;
    
    var remove = document.querySelectorAll(".close"); 
    // 삭제 버튼을 변수로 저장. 배열 형태가 됨
    for(var i=0; i<remove.length; i++) {
        remove[i].addEventListener("click", removeList);
    }
}

function removeList() {
    var id = this.getAttribute("id");
    itemList.splice(id, 1);
    // itemList 배열에서 인덱스 값이 id인 요소 1개 삭제
    showList();
}
