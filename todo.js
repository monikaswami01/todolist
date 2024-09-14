 let item=document.getElementById('item')
 let box=document.getElementById('todobox')
 item.addEventListener('keyup',function(e){
    if(e.key=="Enter"){
        addtodo(this.value)
        this.value=""
        //here we will clear the box
    }
 })
 const addtodo=(item)=>{
  const listitem=  document.createElement("li")
  listitem.innerHTML=`${item}<i class="fa-solid fa-xmark"></i>`
 listitem.addEventListener('click',function(){
    this.classList.toggle(done)
 })
    listitem.querySelector('i').addEventListener('click',function(){
        listitem.remove()
    })
    box.appendChild(listitem)
 }
