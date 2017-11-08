
/*
 A Small list of functions 
 I Found on the internet
 And modified for simple use
 Created by Yves
 */

// Simple Stuff

function writeText(TEXT){
    document.write(TEXT);
}

function writeTextln(TEXT){
    document.write(TEXT+'</br>');
}

// Plays sound 'audio_file.mp3'
function playSound(pathTOsound){
    var audio = new Audio(pathTOsound);
    audio.play();
}

// Just a Time Thing
function timeNow(){
    var date = new Date();
    var day  = date.getDate();
    var month = date.getMonth();
    var year  = date.getFullYear();
    
    // Fixing 0 = january
    month += 1;
    
    document.write("Day: "+day+'</br>');
    document.write("Month: "+month+'</br>');
    document.write("Year: "+year+'</br>');
}
