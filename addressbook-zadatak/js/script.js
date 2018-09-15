$(document).ready(function(){
	//show loader image
	$('#loaderImage').show();
	
	//show contacts on page load
	showContacts();
	
	//add Contact
	$(document).on('submit', '#addContact', function(){
		//show loader image
		$('#loaderImage').show();
		
		//post data from form
		$.post("add_contact.php", $(this).serialize()).done(function(data){
			console.log(data);
			$('#addModal').foundation('reveal', 'close');
			showContacts();
		});
		return false;
	});
	
	//Edit Contact
	$(document).on('submit', '#editContact', function(){
		//show loader image
		$('#loaderImage').show();
		
		//post data from form
		$.post("edit_contact.php", $(this).serialize()).done(function(data){
			console.log(data);
			$('.editModal').foundation('reveal', 'close');
			showContacts();
		});
		return false;
	});
	
	//delete contact
	
	$(document).on('submit', '#deleteContact', function(){
		//show loader image
		$('#loaderImage').show();
		
		//post data from form
		$.post("delete_contact.php", $(this).serialize()).done(function(data){
			console.log(data);
			showContacts();
		});
		return false;
	});
	
});

//show contacts
function showContacts(){
	console.log('Showing contacts...');
	setTimeout("$('#pageContent').load('contacts.php', function(){$('loaderImage').hide();})",1000);
}

//close Modal
$(document).on('click', '.close-reveal-modal', function (){
	$('[data-reveal]').function('reveal', 'close');
});