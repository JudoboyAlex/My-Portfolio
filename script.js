
myFunction = () => {
    const x = document.querySelector("#myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }




  const typed = new Typed('#typed', {
    strings: ["a Full-Stack Web Developer", "a Jiu-Jitsu Black Belt", "a video game enthusiast", "a big Raptors fan", "based in Toronto"],
    typeSpeed: 100,
    backSpeed: 30,
    smartBackspace: true, 
    loop: true,
    loopCount: Infinity
  });
