// Wait for Cordova to load
    //
    document.addEventListener("deviceready", onDeviceReady, false);

    // Populate the database 
    
    function populateDB(tx) {
        tx.executeSql('DROP TABLE IF EXISTS DEMO');
        tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id unique, data)');
        tx.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "First row")');
        tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Second row")');
    }
    // Query the database
    //
    function queryDB(tx) {
        tx.executeSql('SELECT * FROM DEMO', [], querySuccess, errorCB);
    }

    // Query the success callback
    //
    function querySuccess(tx, results) {
  console.log("Returned rows = " + results.rows.length);
  // this will be true since it was a select statement and so rowsAffected was 0
  if (!results.rowsAffected) {
    console.log('No rows affected!');
    return false;
  }
  // for an insert statement, this property will return the ID of the last inserted row
  console.log("Last inserted row ID = " + results.insertId);
    }

    // Transaction error callback
    //
    function errorCB(err) {
        console.log("Error processing SQL: "+err.code);
    }

    // Transaction success callback
    //
    function successCB() {
        var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
        db.transaction(queryDB, errorCB);
    }

    // Cordova is ready
    //
    function onDeviceReady() {
        var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
        db.transaction(populateDB, errorCB, successCB);
    }
function createDB(){

	//SELECT name FROM sqlite_master WHERE type='table' AND name='MyTable';
	tx.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name='app_login'", [], function(tx, result) { 
		if (results.rows.length == 0) {
			tx.executeSql('CREATE TABLE IF NOT EXISTS app_login (id unique, user_name, password, phone_number,gender, mail, city)');
		  } });
	
}

function insertDB(tx){
	tx.executeSql("INSERT INTO app_record (client_name, number, mail, date, place, details, product_name) VALUES ()");
}
function login(tx){
	tx.executeSql('SELECT user_name, password FROM app_login WHERE user_name = '.a.' and password='.b, [], querySuccess, errorCB);
}

function signup(tx){
	tx.executeSql('INSERT INTO app_login (user_name, password, phone_number,gender, mail, city) VALUES (1, "First row")');
}

 tx.executeSql("INSERT INTO test_table (data, data_num) VALUES (?,?)", ["test", 100], function(tx, res) {
          console.log("insertId: " + res.insertId + " -- probably 1");
          console.log("rowsAffected: " + res.rowsAffected + " -- should be 1");

          tx.executeSql("select count(id) as cnt from test_table;", [], function(tx, res) {
            console.log("res.rows.length: " + res.rows.length + " -- should be 1");
            console.log("res.rows.item(0).cnt: " + res.rows.item(0).cnt + " -- should be 1");
          });
