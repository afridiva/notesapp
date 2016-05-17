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
		var resultList = "Showing results for search ‘<" + search_text + ">’<br><br>";
		for(var i = 0; i < this.notes.length; i++){
			if(this.notes[i].includes(search_text))
			{
				resultList += "Note ID: " + i + "<br>" + this.notes[i] + "<br><br>By Author " + this.author + "<br><br>";
			}
		}
		return resultList;
	}
	this.delete = function(note_id) {
		this.notes.splice(note_id, 1);
	}
	this.edit = function(note_id, new_content) {
		this.notes[note_id] = new_content;
	}
}

var notesApplication = new NotesApplication('Chineze Nwosu');
notesApplication.create('hiiiiiiiii this is me');
notesApplication.create('hiiiiiiiii this is you');

notesApplication.listNotes();
notesApplication.delete(0);
notesApplication.listNotes();
notesApplication.edit(0, 'naaa');
notesApplication.listNotes();

