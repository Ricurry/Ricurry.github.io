var active = 0;
var repo = 0;
var menu = document.getElementsByName("menu");
var cascade = document.getElementsByName("menu1");
var stats = document.getElementsByName("stats");
$(document).keydown(function(event) 
{
switch (event.which) 
{
  case 38:
    if (active > 0)  
    {
      active = active - 1;
      menu[active].innerHTML = "*" + menu[active].innerHTML.toString();
      if (menu[active-1]){
        menu[active - 1].innerHTML = menu[active-1].innerHTML.toString().replace("*", "");
      }
      if(menu[active+1]){
      menu[active + 1].innerHTML = menu[active+1].innerHTML.toString().replace("*", "");
      }
    }
    break;
  case 40:
    if (active < 10 ) 
    {
       active = active +1;
       menu[active].innerHTML = "*" + menu[active].innerHTML.toString();
       if(menu[active-1]) {
         menu[active-1].innerHTML = menu[active-1].innerHTML.toString().replace("*", "");
       }
       if(menu[active+1]) 
      {
        menu[active+1].innerHTML = menu[active+1].innerHTML.toString().replace("*","");
      }
    }
  break;
  case 87:
    if (cascade[0].innerHTML.toString().includes("Ricurry")) 
    {
      if (repo > 0) 
      {
        repo = repo -1;
        cascade[repo].innerHTML = "*" + cascade[repo].innerHTML.toString();
        if (cascade[repo-1]){
          cascade[repo - 1].innerHTML = cascade[repo-1].innerHTML.toString().replace("*", "");
        }
        if(cascade[repo+1]){
          cascade[repo + 1].innerHTML = cascade[repo+1].innerHTML.toString().replace("*", "");
        }
      }
    }
  break;
    case 83:
      if (cascade[0].innerHTML.toString().includes("Ricurry")) 
      {
        if (repo < 9) 
        {
          repo = repo +1;
          cascade[repo].innerHTML = "*" + cascade[repo].innerHTML.toString();
          if (cascade[repo-1]){
            cascade[repo - 1].innerHTML = cascade[repo-1].innerHTML.toString().replace("*", "");
          }
          if(cascade[repo+1]){
            cascade[repo + 1].innerHTML = cascade[repo+1].innerHTML.toString().replace("*", "");
          }
        }
      }
      break;
      case 90: // I am commiting a sin, but fuck you.
        if (cascade[0].innerHTML.toString().startsWith("*")) 
        {
            var save1 = cascade[0].innerHTML.toString(); // more sinning here.
            cascade[0].innerHTML = "Redirecting..";
            setTimeout(donothing,5000);
            window.open("https://github.com/Ricurry/FacialRecog", '_blank');
            cascade[0].innerHTML = save1;
        }
        else if (cascade[1].innerHTML.toString().startsWith("*")) 
        {
            var save2 = cascade[1].innerHTML.toString();
            cascade[1].innerHTML = "Redirecting..";
            setTimeout(donothing,5000);
            window.open("https://github.com/Ricurry/WallStreetBot", '_blank');
            cascade[1].innerHTML = save2;
        }
        else if (cascade[2].innerHTML.toString().startsWith("*")) 
        {
          var save3 = cascade[2].innerHTML.toString();
          cascade[2].innerHTML = "Redirecting..";
          setTimeout(donothing, 5000);
          window.open("https://github.com/Zojack/calisto-js", '_blank');
          cascade[2].innerHTML = save3;
        }
        else if (cascade[3].innerHTML.toString().startsWith("*")) 
        {
          var save4 = cascade[3].innerHTML.toString();
          cascade[3].innerHTML = "Redirecting..";
          setTimeout(donothing, 5000);
          window.open("https://github.com/Zojack/calisto-js", '_blank');
          cascade[3].innerHTML = save4;
        }
        else if (cascade[4].innerHTML.toString().startsWith("*")) 
        {
          var save5 = cascade[4].innerHTML.toString();
          cascade[4].innerHTML = "Redirecting..";
          setTimeout(donothing, 5000);
          window.open("https://github.com/Zojack/calisto-js", '_blank');
          cascade[4].innerHTML = save5;
        }
        else if (cascade[5].innerHTML.toString().startsWith("*")) 
        {
          var save6 = cascade[5].innerHTML.toString();
          cascade[5].innerHTML = "Redirecting..";
          setTimeout(donothing, 5000);
          window.open("https://github.com/Zojack/calisto-js", '_blank');
          cascade[5].innerHTML = save6;
        }
        else if (cascade[6].innerHTML.toString().startsWith("*")) 
        {
          var save7 = cascade[6].innerHTML.toString();
          cascade[6].innerHTML = "Redirecting..";
          setTimeout(donothing, 5000);
          window.open("https://github.com/Zojack/calisto-js", '_blank');
          cascade[6].innerHTML = save7;
        }
        else if (cascade[7].innerHTML.toString().startsWith("*")) 
        {
          var save8 = cascade[7].innerHTML.toString();
          cascade[7].innerHTML = "Redirecting..";
          setTimeout(donothing, 5000);
          window.open("https://github.com/Zojack/calisto-js", '_blank');
          cascade[7].innerHTML = save8;
        }
        else if (cascade[8].innerHTML.toString().startsWith("*")) 
        {
          var save9 = cascade[8].innerHTML.toString();
          cascade[8].innerHTML = "Redirecting..";
          setTimeout(donothing, 5000);
          window.open("https://github.com/Zojack/calisto-js", '_blank');
          cascade[8].innerHTML = save9;
        }
        else if (cascade[9].innerHTML.toString().startsWith("*")) 
        {
          var save10 = cascade[9].innerHTML.toString();
          cascade[9].innerHTML = "Redirecting..";
          setTimeout(donothing, 5000);
          window.open("https://github.com/Zojack/calisto-js", '_blank');
          cascade[9].innerHTML = save10;
        }

        break;
  case 13:
    switch (active) 
    {
        case 0:
          stats[0].src= "";
          cascade[0].style.color="rgb(255, 73, 118)";
          cascade[1].style.color="rgb(255, 73, 118)";
          cascade[2].style.color="rgb(255, 73, 118)";
          cascade[3].style.color="rgb(255, 73, 118)";
          cascade[4].style.color="rgb(255, 73, 118)";
          // Until 9
          cascade[5].style.color="rgb(255, 73, 118)";
          cascade[6].style.color="rgb(255, 73, 118)";
          cascade[7].style.color="rgb(255, 73, 118)";
          cascade[8].style.color="rgb(255, 73, 118)";
          cascade[9].style.color="rgb(255, 73, 118)";


          cascade[0].innerHTML = 
          "Ricurry/Recognition - \n My first project using Artificial Intelligence.  \n Uses Python/Tensorflow as well as OpenCV to render the AI. \n Uses a Convolutional Neural Network to recognize generally the upper body of a person. It runs on any webcam and runs real time.";
          cascade[1].innerHTML =
          "Ricurry/Stocks - \n Scrapes data from Wall Street Bets, a subreddit, and uses a sentiment analysis or getting the emotion from a large selections of people all at once to determine whether the stock is a buy or not. It uses Python and NTLK to do so";
          cascade[2].innerHTML =
          "Ricurry/calisto-js - \n Personal Discord Bot! Can play music, and verify people through MongoDB! Discord is a chatting app, in it, there is a call option. It takes a lot of bandwidth playing music and being in a call simultaneously.";
          cascade[3].innerHTML = 
          "Ricurry/Visualizer - \n A music visualizer that uses OpenGL + OpenAL to render the audio. It is a C++ project and is able to render the audio in real time. It is also able to render the audio in a 2D space.";
          cascade[4].innerHTML =
          "Ricurry/DivertSocket - \n A Socket system that can redivert receiving data in a computer. Very network based. Made with C++.BSD Sockets. It is able to redivert data from one computer to another, and is able to redivert data.";
          cascade[5].innerHTML =
          "Ricurry/MongoDB - \n A simple project that uses MongoDB to store data. It is able to store data from a Discord bot, and is able to store data from a simple program.";
          cascade[6].innerHTML =
          "Ricurry/Winsock - \n A simple project that uses Winsock to send data from one computer to another. It is able to send data from one computer to another. Was used for multiplayer in a Unity Engine.";
          cascade[7].innerHTML =
          "Ricurry/ShellcodeSocket - \n A simple project that uses Winsock to send shellcode from one computer to another. It is able to send shellcode from one computer to another. For example, it could prompt a windows PC to shutdown remotely.";
          cascade[8].innerHTML =
          "Ricurry/AIMouse - \n A simple project that uses Tensorflow to recognize hand gestures. It is able to recognize hand gestures and move the mouse accordingly.";
          cascade[9].innerHTML =
          "Ricurry/EPGAssBlast - \n A Titanfall 2 game mod that made a custom gamemode where a popular weapon, the EPG, could be used to shoot super fast and move around the map, in a battle of attrition, or team deathmatch."


          break;
      case 1:
        stats[0].src= "";


        cascade[0].style.color="rgb(255, 73, 118)";
        cascade[1].style.color="rgb(255, 73, 118)";
        cascade[2].style.color="rgb(255, 73, 118)";
        cascade[0].innerHTML = 
        "Yo! \n  I am a programmer based in Houston, Texas, and is very proficient in network solutions, Tensorflow/AI, as well as audio programming and MongoDB/Database.   \n My family is from Pakistan, but as for me, I was born here.  \n My favorite hobbies are gaming and Tennis~!";
        cascade[1].innerHTML =
        " - If you are interested in something other than the above, I am also a programmer for Discord bots, and I am able to make a bot for you! \n \n - I can also implement databases alongside a bot of your choice or any project in order to store user data.";
        cascade[2].innerHTML =
        " - Let's talk hobbies, earlier, or no, rather a few years ago, I used to go biking in forests with a couple of friends. As a result, we ended up going to trails and nowadays I spend a lot of my time there. Other than that, you will usually see me with my family at any swimming pool.  \n                   MY LANGUAGES|FRAMEWORKS:                 \n C++|Aquila + OpenAL (audio.) / Winsock / OpenCV + OpenGL \n JS |Howl.JS + MongoDB (audio + DB.) + Discord.js + REST \n PY | Tensorflow + Keras (AI.) + OpenCV as well as Scikit and NLP. ( Mostly AI.)"; 
        break;
      case 2:
        cascade[0].innerHTML = 
          "";
          cascade[1].innerHTML =
          "";
          cascade[2].innerHTML =
          "";
        window.open("https://discord.gg/WhG84A87AK", '_blank');
        stats[0].src= "";
        break;
      case 3:
        cascade[0].innerHTML = 
          "";
          cascade[1].innerHTML =
          "";
          cascade[2].innerHTML =
          "";
        stats[0].src= "https://github-readme-stats.vercel.app/api?username=Ricurry&theme=dracula&show_icons=false";
        // Center stats[0]
        stats[0].style.textAlign = "center";
        break;
    }
}})
function donothing() {
  //
}
