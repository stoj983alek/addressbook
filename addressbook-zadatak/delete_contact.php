<?php include('core/init.php'); ?>

<?php
//create DB object
$db = new Database;

//run query
$db->query("DELETE FROM contacts WHERE id = :id");

//bind value
$db->bind(':id', $_POST['id']);

if($db->execute()){
	echo "Contact was deleted";
}else{
	echo "Could not delete contact";
}