/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function buildZombo()
{
    var numTime = document.getElementById("numTimes").value;
    if(numTime == "demo")
    {
        runDemo();
    }
    else
    {
        numTime = parseInt(numTime);
        for(i = 0; i<numTime;i++)
        {
            var x = Math.floor(Math.random()*10000);
            //as many times as asked, make an audio object with the zombocom audio, a set of the spinny circles, and the zombo text
            var fills = document.createElement("nav");
            var zombotext = document.createElement("a");
            zombotext.id = "zom";
            zombotext.innerHTML = "Zombo";
            var spinnies = document.createElement("img");
            spinnies.src = "Zombo/zombocom-gif.gif";
            fills.appendChild(zombotext);
            fills.appendChild(spinnies);
            zombotext.style.textAlign = "center";
            fills.style.height = (window.innerHeight/numTime);
            fills.style.width = (window.innerWidth/numTime);
            fills.style.display = "table";
            zombotext.style.display = "table-header-group";
            spinnies.style.display = "inline-block";
            spinnies.style.maxWidth = "50%";
            spinnies.style.maxHeight = "50%";
            spinnies.style.paddingLeft = "25%";
            document.body.appendChild(fills);
            var audio = document.createElement("audio");
            audio.src = "Zombo/zombocom.mp3";
            if(i>0)
            {
                setTimeout(function(){audio.play();},x);//credit where credit's due, the ability to include realtime waits were from stackoverflow
                //from here http://stackoverflow.com/questions/11973673/have-audio-tag-play-after-a-delay 
            }
            else
            {
                audio.play();
            }
            //play the first audio as soon as we're done making things
            // but after that, play it at a random delay from 0 - 10 seconds
            
        }
    }   
}

function clearPage()
{
    var element = document.getElementById("numTimes");
    var elementagain = document.getElementById("submit");
    element.parent.removeChild(element);
    elementagain.parent.removeChild(element);
}

function runDemo()
{
    //make an audio object with the changes demo in it, then play it
    var audio = new Audio("zombocom changes demo.mp3");
    audio.play();
}

function start()
{
    document.getElementById("submit").addEventListener('click',buildZombo, false);
    //set the submit button to run multizombo
}

window.addEventListener("load",start,false);//on load, run start