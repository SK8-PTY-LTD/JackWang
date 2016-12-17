/**
 * Created by wanghao on 13/12/2016.
 */
//play the song

function Playlist(){
    this.songs=[];
}
Playlist.prototype.add = function(song){
    this.songs.push(song);
}

var playlist = new Playlist();
playlist.add("audio/Westlife,%20Written%20in%20the%20Stars---with%20lyrics.mp3");
playlist.add("audio/Ke$ha%20-%20TiK%20ToK.mp3");
playlist.add("audio/Miss%20You%20-%20Westlife%20-%20Lyrics%20%5BKara%20Vietsub%20-%20Engsub%5D.mp3")
playlist.add("audio/Ariana%20Grande%20-%20Problem%20ft.%20Iggy%20Azalea.mp3");
playlist.add("audio/pharrell-williams-happy.mp3");
var audio = document.createElement("audio");




var list=document.getElementsByTagName("label");
window.onload = function () {
    choose(0);
    var button = document.getElementsByTagName("button")
    button.onmouseover = function(){

        for (var i=0;i<button.length;i++)
        {
            button[i].style.backgroundColor=null;
            button[i].style.color=null;
        }
        this.style.backgroundColor="blue";
        this.style.color="white";
        this.focus();
    }
}
//choose a song to play
function choose(song){
    for(var i=0;i<list.length;i++)
    {
        list[i].style.backgroundColor=null;
        list[i].style.color=null;
    }
    list[song].style.backgroundColor="blue";
    list[song].style.color="white";
    audio.src=playlist.songs[song];
    audio.play();
}

//keep playing
function playsong(){
    audio.play();

}

//pause
function pausesong(){
    if (!audio.paused){
        audio.pause();
    }
}

function replay(){
    if (!audio.paused){
        audio.currentTime=0;
        audio.play();
    }
}





