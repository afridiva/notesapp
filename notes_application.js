function NotesApplication(author) {
	this.author = author;
	this.notes = [];
	this.create = function(note_content) {
		this.notes.push(note_content);
	}
	this.listNotes = function() {
		var notelist = "";
		for(var i = 0; i < notes.length; i++){
			notelist += "Note ID: " + i + "\n" + this.notes[i] + "\n\nBy Author " + this.author + "\n\n";
		}
		return notelist;
	}
	
}

var notesApplication = new NotesApplication();
