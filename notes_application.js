function NotesApplication(author) {
	this.author = author;
	this.notes = [];
	this.create = function(note_content) {
		this.notes.push(note_content);
	}
	this.listNotes = function() {
		var noteList = "";
		for(var i = 0; i < this.notes.length; i++){
			noteList += "Note ID: " + i + "<br>" + this.notes[i] + "<br><br>By Author " + this.author + "<br><br>";
		}
		document.write(noteList);
	}
	this.get = function(note_id) {
		return this.notes[note_id];
	}
	this.search = function(search_text) {
		var resultList = "Showing results for search '&lt;" + search_text + "&gt;'<br><br>";
		var empty = true;
		for(var i = 0; i < this.notes.length; i++){
			if(this.notes[i].includes(search_text))
			{
				resultList += "Note ID: " + i + "<br>" + this.notes[i] + "<br><br>By Author " + this.author + "<br><br>";
				empty = false;
			}
		}
		return empty == true ? "No results found for search '&lt;" + search_text + "&gt;'<br><br>" : resultList ;
	}
	this.delete = function(note_id) {
		this.notes.splice(note_id, 1);
	}
	this.edit = function(note_id, new_content) {
		this.notes[note_id] = new_content;
	}
}

var notesApplication = new NotesApplication('Chineze Nwosu');
notesApplication.create('This is the first note');
notesApplication.create('This is the second note');
notesApplication.listNotes();
document.getElementById('note1').innerHTML = notesApplication.search('you');
notesApplication.edit(1, "This is the first edit replacing the 0 index note");
notesApplication.delete(0);
notesApplication.listNotes();
document.getElementById('note2').innerHTML = notesApplication.get(0);

