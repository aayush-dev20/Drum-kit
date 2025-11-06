const kits = ["crash","kick-bass","snare(1)","snare","tom-1","tom-2","tom-3","tom-4"]

const containerEl = document.querySelector(".container");

kits.forEach((kit) => {
  const btnEl = document.createElement("button");
  btnEl.classList.add("btn");
  btnEl.innerText = kit;

  // Add background image
  btnEl.style.backgroundImage = '\images/" + kit + ".png';

  // Create audio element
  const audioEl = document.createElement("audio");
  audioEl.src = "\audio/" + kit + ".mp3";

  // Play sound on click
  btnEl.addEventListener("click", () => {
    audioEl.play();
  });

  // Add button and audio
  containerEl.appendChild(btnEl);
  containerEl.appendChild(audioEl);

  btnEl.addEventListener("click" , ()=>{
    audioEl.play();
  })
  window.addEventListener("keydown",(Event)=>{
   if(event.key === kit.slice(0,1)){
    audioEl.play()
    btnEl.styletransform = "scale(.9)";
    setTimeout(()=>{
        btnEl.style.transform = "scale(1)";

    }, 100);
   }
    }
  )
});
