<?php
define('http://mysql.theoremz.com', 'localhost'); // Database server
define('theoremzcom1', 'root'); // Database username
define('Bpgeczvx', ''); // Database password
define('theoremz_com', 'demo'); // Database name
 
/* connect to MySQL database */
$db = mysqli_connect(DBSERVER, DBUSERNAME, DBPASSWORD, DBNAME);
 
// Check db connection
if($db === false){
    die("Error: connection error. " . mysqli_connect_error());
}
?>
