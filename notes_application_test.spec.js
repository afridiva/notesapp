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

	
});