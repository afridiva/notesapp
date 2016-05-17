function NotesApplication(author) {
	this.author = author;
	this.notes = [];
	this.create = function(note_content) {
		this.notes.push(note_content);
	}
	this.listNotes = function() {
		var noteList = "";
		var empty = true;
		for(var i = 0; i < this.notes.length; i++){
			noteList += "Note ID: " + i + "<br>" + this.notes[i] + "<br><br>By Author " + this.author + "<br><br>";
			empty = false;
		}
		noteList = empty == true ? "There are no notes in the list" : noteList;
		document.write(noteList);
	}
	this.get = function(note_id) {
		
		if (this.validate(note_id) == true)
		{
			return this.notes[note_id];
		}
		return this.validate(note_id, 'get');
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
		if(this.validate(note_id) == true) {
			this.notes.splice(note_id, 1);
			return "Note at index " + note_id + " has been deleted";
		}
		else {
			return this.validate(note_id, 'delete');
		}
	}
	this.edit = function(note_id, new_content) {
		if (this.validate(note_id) == true) {
			this.notes[note_id] = new_content;
			return "Note at index " + note_id + " has been edited";
		}
		else {
			return this.validate(note_id, 'edit');
		}
	}
	// Validate the note_id by checking if it an index of the note list
	this.validate = function(note_id, operation) {
		if (note_id <= (this.notes.length - 1))
		{
			return true;
		}
		return "Note not found for " + operation + " operation at index " + note_id;
	}
}

var notesApplication = new NotesApplication('Chineze Nwosu');
// Tests
notesApplication.create('This is the first note');
notesApplication.create('This is the second note');
notesApplication.listNotes();
document.getElementById('test1').innerHTML = notesApplication.search('first');
document.getElementById('test2').innerHTML = notesApplication.delete(0);
document.getElementById('test2').innerHTML = notesApplication.get(0);
document.getElementById('test3').innerHTML = notesApplication.edit(1, "This is the first edit replacing the note at index 1");
notesApplication.listNotes();

