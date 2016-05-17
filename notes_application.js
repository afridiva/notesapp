function NotesApplication(author) {
	this.author = author;
	this.notes = [];
	this.create = function(note_content) {
		this.notes.push(note_content);
	}
	this.listNotes = function() {
		var noteList = "";
		for(var i = 0; i < notes.length; i++){
			noteList += "Note ID: " + i + "\n" + this.notes[i] + "\n\nBy Author " + this.author + "\n\n";
		}
		return noteList;
	}
	this.get = function(note_id) {
		return this.notes[note_id];
	}
	this.search = function(search_text) {
		var resultList = "Showing results for search ‘<" + search_text + ">’\n\n";
		for(var i = 0; i < notes.length; i++){
			if(notes[i].includes(search_text))
			{
				resultList += "Note ID: " + i + "\n" + this.notes[i] + "\n\nBy Author " + this.author + "\n\n";
			}
		}
		return resultList;
	}
	
}

var notesApplication = new NotesApplication();
