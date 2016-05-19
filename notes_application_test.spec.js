describe('Notes Application', function(){

	// Check if properties exist
	it('should have create property', function(){
		expect(notesApplication.hasOwnProperty('create')).toBe(true);
	});
	it('should have listNotes property', function(){
		expect(notesApplication.hasOwnProperty('listNotes')).toBe(true);
	});
	it('should have get property', function(){
		expect(notesApplication.hasOwnProperty('get')).toBe(true);
	});
	it('should have search property', function(){
		expect(notesApplication.hasOwnProperty('search')).toBe(true);
	});
	it('should have delete property', function(){
		expect(notesApplication.hasOwnProperty('delete')).toBe(true);
	});
	it('should have edit property', function(){
		expect(notesApplication.hasOwnProperty('edit')).toBe(true);
	});

	// Check if author exists
	it('should return No author specified', function(){
		// notesApplication = new NotesApplication();
		expect(notesApplication.author).toBeDefined();
	});

	// check if functions return correct output
	it('should give an error message on create with empty note content', function(){
		expect(notesApplication.create()).toBe("Note was not created because note content is empty");
		expect(notesApplication.create('')).toBe("Note was not created because note content is empty");
	});

	it('should give an error message on edit with invalid note_id', function(){
		// Check if note_id exists
		expect(notesApplication.edit(1)).toMatch(/^Note not found for/);
		expect(notesApplication.edit(0, '')).toMatch(/^Note not found for/);
	});

	it('should give an error message on edit with empty note content', function(){
		// Check if new content is undefined
		notesApplication.create('This is a new note');
		expect(notesApplication.edit(0)).toBe("Note was not edited because note content is empty");
		expect(notesApplication.edit(0, '')).toBe("Note was not edited because note content is empty");
	});

	it('should give an error message on get invalid note_id', function(){
		notesApplication.create();
		// For get operation
		expect(notesApplication.get()).toMatch(/is not a number$/);

		// For edit operation
		expect(notesApplication.edit()).toMatch(/is not a number$/);
		
		// For delete operation
		expect(notesApplication.delete()).toMatch(/is not a number$/);
	});

	it('should give an error message on non_existent note_id', function(){
		// For get operation
		expect(notesApplication.get(1)).toMatch(/^Note not found for/);

		// For delete operation
		expect(notesApplication.delete(1)).toMatch(/^Note not found for/);
	});

});