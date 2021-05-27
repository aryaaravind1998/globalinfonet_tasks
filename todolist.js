function myfunction(){
    //var notes=prompt("enter the notes here:");
    var notes=document.getElementById('todoin').value;
    var newele=document.createElement('p');
    var textanswer=document.createTextNode('gud work' +notes);
    newele.setAttribute('id','notes');
    newele.appendChild(textanswer);
    document.getElementById('flex-box-result').appendChild(newele);
    console.log(notes);

}

function reset(){
    document.getElementById('notes').remove();
}