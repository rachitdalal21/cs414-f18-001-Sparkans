# Building and Running the Server

## Building
To build the server you must have Maven installed.
#
"mvn package" will run tests and build the server-*.jar file.
#
run "mvn clean" followed by "mvn package" to be sure you have only the latest version of the server built.

## Running
To run the server use "java -jar server-*.jar" on the .jar file located in /server/target/
#
If you're in a bash enviroment the run.sh script at the project root will build and run the server. 
#
The server runs on localhost:31406

