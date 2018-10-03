/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var alphabetical = 
    ["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"];
var type = 
    ["Major", "Minor", "7th", "aug", "dim7", "m7", "m7♭5", "maj7", "sus4","sus2"];

function addPlay(evt)
{
    for(var i = 0; i<alphabetical.length; ++i)
    {
        for(var j = 0; j<type.length; ++j)
        {
            var click = document.getElementById("insideplay" + j.toString()+alphabetical[i]).addEventListener("click",play,false);
        }
    }
}

function play(evt)
{
    var ident = evt.target.id;
    var bois;
    if(!ident.includes("#"))
    {
        //if it's not a sharp chord, do all these fancy string manipulation things to determine which chord to play
        ident = ident.substr(10,ident.length-1);
        bois = parseInt(ident);
        ident = ident.substr(1) + " " + type[bois];
        if(ident.substr(2,ident.length-1) == type[6])
        {
            var audio = new Audio("Chords/"+ident.substr(0,1)+" m7flat5"+".mp3");
            playfix(audio);
        }
        else
        {
            var audio = new Audio("Chords/"+ident + ".mp3");
            playfix(audio);
        }
    }
    else
    {
        //if it's a sharp chord, do basically the same thing as above but account for the sharp being in the string 
        ident = ident.substr(10,ident.length-1);
        bois = parseInt(ident);
        ident = ident.substr(1) + " " + type[bois];
        if(ident.substr(3,ident.length-1) == type[6])
        {
            var audio = new Audio("Chords/"+ident.substr(0,1)+" m7flat5"+".mp3");
            playfix(audio);
        }
        else
        {
            var audio = new Audio("Chords/"+ident + ".mp3");
            playfix(audio);
        }
    }
}

function playfix(audio)
{
    while(audio.paused)
    {
        //don't do anything while it's paused, basically just wait here until whatever's playing gets done
        //believe it or not, I found that audio has this paused property from w3!
        //https://www.w3schools.com/tags/av_prop_paused.asp
    }
    audio.play();
}

function start()
{
    var navigate = document.createElement("NAV");
    navigate.className = "menu";
        
    for(var i = 0; i <alphabetical.length; ++i)
    {
        var navigate = document.createElement("NAV");
        navigate.className = "menu";
        var btn = document.createElement("DIV");
        btn.id = "button";
        var insides = document.createElement("P");
        insides.id = "inside" + i.toString();
        var t = document.createTextNode(alphabetical[i]);
        navigate.appendChild(btn);
        btn.appendChild(insides);
        insides.appendChild(t);
        for(var j = 0; j<type.length; ++j)
        {
            btn = document.createElement("DIV");
            btn.id = "buttonplay";
            insides = document.createElement("P");
            insides.id = "insideplay"+j.toString();
            insides.id += alphabetical[i];
            t = document.createTextNode(type[j]);
            navigate.appendChild(btn);
            btn.appendChild(insides);
            insides.appendChild(t);
        }
        document.body.appendChild(navigate);
        //essentially, make a div with the background image for each mouseover, then the things that show up when you mouse over it
    }
    addPlay();
}
window.addEventListener("load",start,false);//on load, run start