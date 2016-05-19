function NotesApplication(author) {
	this.author = author;
	this.notes = [];

	// Create function
	this.create = function(note_content) {
		// If note content is defined and not empty
		if(note_content) {
			this.notes.push(note_content);
			return "New note has been created";
		}
		else {
			return "Note was not created because note content is empty";
		}
	}

	// List Notes function
	this.listNotes = function() {
		var noteList = "";
		var empty = true;
		for(var i = 0; i < this.notes.length; i++){
			noteList += this.formatNote(i);
			empty = false;
		}
		noteList = empty == true ? "There are no notes in the list" : noteList;
		// document.write(noteList);
		return noteList;
	}

	// Get function
	this.get = function(note_id) {
		
		if (this.validateId(note_id) == true)
		{
			return this.notes[note_id];
		}
		return this.validateId(note_id, 'get');
	}

	// Search function
	this.search = function(search_text) {
		if(search_text)
		{
			var resultList = "Showing results for search '&lt;" + search_text + "&gt;'<br><br>";
			var empty = true;
			for(var i = 0; i < this.notes.length; i++){
				if(this.notes[i].includes(search_text))
				{
					resultList += this.formatNote(i);
					empty = false;
				}
			}
			return empty == true ? "No results found for search '&lt;" + search_text + "&gt;'<br><br>" : resultList ;
		}
		else {
			// document.write("Showing all results<br><br>");
			return "Showing all results<br><br>" + this.listNotes();
		}
	}

	// Delete function
	this.delete = function(note_id) {
		if(this.validateId(note_id) == true) {
			this.notes.splice(note_id, 1);
			return "Note at index " + note_id + " has been deleted";
		}
		else {
			return this.validateId(note_id, 'delete');
		}
	}

	// Edit function
	this.edit = function(note_id, new_content) {
		if (this.validateId(note_id) == true && new_content) {
			this.notes[note_id] = new_content;
			return "Note at index " + note_id + " has been edited";
		}
		else {
			if(this.validateId(note_id) != true)
			{
				return this.validateId(note_id, 'edit');
			}
			return "Note was not edited because note content is empty";
		}
	}
	
	// Validate the note_id by checking if it an index of the note list
	this.validateId = function(note_id, operation) {
		if(typeof note_id == typeof 1 && note_id <= (this.notes.length - 1)) {
			return true;
		}
		else {
			if(note_id == null) {
				return "No note id included";
			}
			if(typeof note_id != typeof 1)
			{
				return note_id + " is not a number";
			}
			else {
				return "Note not found for " + operation + " operation at index " + note_id;
			}
		}
	}

	// Format the note in required format
	this.formatNote = function(note_id) {
		if(!this.author) {
			this.author = "Anonymous";
		}
		if(typeof note_id == typeof 1 && note_id <= (this.notes.length - 1)) {
			return "Note ID: " + note_id + "<br>" + this.notes[note_id] + "<br><br>By Author " + this.author + "<br><br>";
		}
	}
}

var notesApplication = new NotesApplication('Chineze Nwosu');
// Tests
// var notesApplication = new NotesApplication('Chineze Nwosu');
// document.getElementById('test1').innerHTML = notesApplication.create();
// document.getElementById('test1').innerHTML = notesApplication.create('fffdgd');
// notesApplication.listNotes();
// document.getElementById('test1').innerHTML = notesApplication.search('');
// document.getElementById('test2').innerHTML = notesApplication.delete(0);
// document.getElementById('test2').innerHTML = notesApplication.get('f');
// document.getElementById('test3').innerHTML = notesApplication.edit(1, "This is the first edit replacing the note at index 1");
// notesApplication.listNotes();

