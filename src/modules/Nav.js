export default function testingNav(){
  let navigation = document.querySelectorAll("ul.navbar-nav > li");
  let content = document.querySelectorAll("div.content > div.section");
  let contentTitle = document.querySelector(".page-title");

  for(let i = 0; i < navigation.length; i++){
    navigation[i].addEventListener("click", () => {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      navigation[i].className += " active"; 
      console.log(content);
      for(let j = 0; j < content.length; j++){
        //let currentContainer = document.getElementsByClassName("on");
        //currentContainer[0].className = currentContainer[0].className.replace(" on", "")
        if(navigation[i].getAttribute("id") == content[j].getAttribute("id")){
          let currentContainer = document.getElementsByClassName("on");
          currentContainer[0].className = currentContainer[0].className.replace(" on", "");
          content[j].classList.add("on");
          contentTitle.textContent = content[j].getAttribute("id");
        }
      } 
   })
  }
}
