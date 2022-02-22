const inputText = document.querySelector(".input-text");
const addButton = document.querySelector(".add-button");
const list = document.querySelector(".list");

const likeButtons = document.querySelectorAll(".like")//여러 개일 경우. 

function addItem(){
if(inputText.value.trim() === "" )return; //값이 입력되지 않았을 때 실행되지 않음. 

    //like
    const like = document.createElement("span");
    const likeIcon = document.createElement("i");
    like.classList.add("like"); //클래스 추가
    likeIcon.classList.add("material-icons");
    likeIcon.innerText = "favorite_border";
    like.appendChild(likeIcon);

    //item
    const item = document.createElement("span");
    item.classList.add("item");
    item.innerText = inputText.value; //value는 inputText에 입력된 값

    //manage
    const manage = document.createElement("span");
    const checkIcon = document.createElement("i");
    const clearIcon = document.createElement("i");
    checkIcon.classList.add("material-icons","check");
    clearIcon.classList.add("material-icons","clear");
 
    checkIcon.innerText ="check-icons";
    clearIcon.innerText="clear-icons";
    manage.classList.add("manage");
    manage.appendChild(checkIcon);
    manage.appendChild(clearIcon);
    
    const li = document.createElement("li");

    //like이벤트 추가(위의 함수는 기존 likeButtons함수에만 적용되기 때문.)
    like.addEventListener("click",(e)=>{
       const target = e.target;
       const text = target.innerText === "favorite" ? "favorite_border" : "favorite";
  target.innerText = text;
    })

    checkIcon.addEventListener("click",(e)=>{
      const target = e.target.parentNode.parentNode;
      target.classList.add("done");

     })

     clearIcon.addEventListener("click",(e)=>{
        const target = e.target.parentNode.parentNode;
        list.removeChild(target);
     })


    li.appendChild(like);
    li.appendChild(item);
    li.appendChild(manage);
    list.appendChild(li);
    //함수에 html요소 추가 -> 자식요소 추가 
    inputText.value="";
    inputText.focus();

}
inputText.addEventListener("keypress",(e)=>{
if(e.keyCode === 13) {
addItem()
}
})

addButton.addEventListener("click",addItem)

