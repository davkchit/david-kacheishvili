let language = document.querySelector(".language");

language.addEventListener("click", function () {
  let usaEvent = language.classList.toggle("usa");
  let rusEvent = language.classList.toggle("rus");
  let david = document.querySelector(".hero__h1");
  let frontend = document.querySelector(".hero__h3");
  let p = document.querySelector(".hero__p");
  let aboutme = document.querySelector(".aboutme__text");
  let footerP = document.querySelector(".footer__p");
  let skills = document.querySelector(".skills__title");
  let works = document.querySelector(".works__title")
  if (usaEvent) {
    david.textContent = "Давид Кач";
    frontend.textContent = "Фронтенд Разработчик"
    p.textContent = "Приветствую, меня зовут Давид. Я думаю, нет большого смысла говорить кто я, так что листайте вниз, чтобы узнать мои способности";
    aboutme.textContent = "Совсем недавно я начал интересоваться IT-технологиями и, в частности, кибербезопасностью и другими темами. И с этого момента я погрузился в эту сферу.";
    footerP.textContent = "Если вы оценили мои работы, я готов поговорить с вами.";
    skills.textContent = "Мои навыки";
    works.textContent = "Мои пет-проекты";
  } 
  if (rusEvent) {
    david.textContent = "David Kach";
    frontend.textContent = "Frontend Developer";
    p.textContent = "Hello, my name is David. I think you don't care who I am and my hobbies. I know perfectly well that you only need to know my skills and my technology stacks.";
    aboutme.textContent = "Just recently, I began to be interested in IT technologies and in particular cybersecurity and other topics. And from that moment I plunged into this sphere.";
    footerP.textContent = "If you liked my work and you need me, I'mready to talk to you.";
    skills.textContent = "My Skills";
    works.textContent = "My works";
  }
})
