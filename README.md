# waitlistMe

db schema

CREATE TABLE users(
   id INT AUTO_INCREMENT PRIMARY KEY,
   initialPos INT,
   position INT,
   name TEXT,
   email TEXT,
   password TEXT,
   referalURL TEXT,
   APIkey TEXT,
   profilePic INT,
   referalId INT
);

Sample Data

(
	(1, 99, 99, 'Dhaarani', 'dhaarani@gmail.com', '7ea9b99ed841d62d082a9a80472a61d0', 'http://localhost:4200/signup/Dhaarani/skAjUz4OI78UgYNZ0XHSXAD15eywVfQJyNVKrMpvNOJ3rYh40x', 'Y8GvI8mKUUJrtnTbMt04m2WjHRthJC9E9yl495H6XlNFW8nzy1s5xSrT3VOCxSLzGUyzoHwFNmKk3plolISFhSfPckz5qP974Qn7', 1, 0), 
	(2, 100, 98, 'Lavanya', 'lav6_forever@yahoo.com', '2887ec8b01f6859f15e605c615de3876', 'http://localhost:4200/signup/Lavanya/C4UQuW3ZGMBTdDmjdUPQPojT3gSAtptanqEMILIzqwkKX462u2', 'EhGtNZ3sIhKlodDcFVyY8RqXGKI9nN3rPG1RYWQ1VDC5qD8yTfEUMuDgKGxsMAek7KXeN5thsbLO0LPwNVtuckC8RAO7hSc3WFSy', 3, 0), 
	(3, 101, 101, 'Keethi', 'keerthi@gmail.com', 'c2db078445b795274028ce9647380889', 'http://localhost:4200/signup/Keethi/ucruyCv50BiVXGRTK0jZReRshSPYBO4Mo55rD1hD8yuxpRzWHc', 'SsQd2fWBjV6Uq4Ea3X2S3hZkV406BHyKlbgrgABO2ycDyCGfywEDweD6LPqVWdHLW2zCesPtj9jvOUVFCgiP7GVYjGsZFWm1kl3I', 2, 0), 
	(4, 102, 102, 'Venkat', 'venky@gmail.com', '0766b9e7257698ca91fb6bf870d5a1d8', 'http://localhost:4200/signup/Venkat/UjpFsMuDSM2WYoPdZXf9PJwVppQQUQdgHdM4PfMIWkL43KgYOd', 'ge0FQF2br8LLfkJv5ulKNlAnvEzHgWNYHag0L3YZ6aOvsBLg9ElcYeudBdFh9ZgbsICwdcwvEM70MalzPIomkaGPUliTXBYdHPRt', 2, 0), 
	(5, 103, 103, 'Dharshini', 'dhars@gmail.com', '3be9720a1f830b73562caad985486244', 'http://localhost:4200/signup/Dharshini/D2N8pmBVdXrIUlbhdLOk6YxmL9irakPsRBV1mggMSh0Wt4ooTf', 'z2Ur4VSLUuoahiEhj9uuv2CtkoYIF1zkMt1qIa9Uac0MIUZogjRRrAKKo8Hbi58iiohpKvR3ciFmQOoUei4L95HoH86eyVv32MMg', 8, 0), 
	(6, 104, 104, 'Selvam', 'selvam@gmail.com', 'f66671919d7d3a5ca0320963cf260c6a', 'http://localhost:4200/signup/Selvam/kR1Zk4gFF5h0tEqDpZBbu1gRLHrRmhcR2tonu2q6irAUFamtpH', 'AEn6s52NZBFG386fR0Q0OVsXkRCizurwP56RBAWtiNJQzmggpMv0wZsIkQaAMQa0DKpxyzkH3Go3ms6B7JIPafVsDg8s9njiop9f', 1, 0), 
	(7, 105, 105, 'Max', 'haxex91161@to200.com', 'b1f55e163bd8f5874cffa9d99ee7c655', 'http://localhost:4200/signup/Max/veLAm1PYJWMWKJ3QwgTVcB0ZL79Jwsd8bGbdiGVOHFyDg8KYjE', 'IlwWw6pIFj07hafWFM1AVVdSqbLVQSbtgXhacfARcac0kHr60RENByd8Qx0Z7xWHUU3IuiU2rSCzLgTTBWm1WHuUvIsExVYBaTI1', 8, 0), 
	(8, 106, 106, 'Harry', 'girec18829@threepp.com', 'e5754964cb460dec86f05b5a20b93e0b', 'http://localhost:4200/signup/Harry/v7u5py2QERoSou4MZg7O7vWJ8dqJlQ2wopbxTQbrLCyBozzd3f', 'c5rLiJG7tmJHfn927BtPJTx6AOi7S0ucrTddu1s3kQ6euMqdU6i4Vu4kkGTj0FlMiOr0jeMzfzEtDtINxFUs86xriEIjTN9b0kU2', 6, 0), 
	(9, 107, 107, 'Ron', 'kedaj99988@o3live.com', 'f7984e0cb64b861e5d6b1e5f476de685', 'http://localhost:4200/signup/Ron/CxH6ccsTVCIs1XVexncVag6wx8CVQaWuwnuDBcs8XJJyn6hbbO', 'd2sB0OynfrFffWP1ggsJ3LweIhHj7VgZaf7SjyCpgnHMBLqp7XPPDcXskvuYOhqG033u2sfOoQNwaPc3qZInR1mIT7rP16JwQcBw', 1, 2), 
	(10, 108, 108, 'Jack', 'codosob381@threepp.com', '7c76dd9542caeca6c80d635a625b290d', 'http://localhost:4200/signup/Jack/EQt3TNXnp3NJ9uqBDu1afv9NBEytXwroDlgpcBZAhseG4Df0Rg', 'hBoyrbXxnFCp2HF1Ibd2f3wwanWptgco8iZiE1Td4dSyUlOyYYQrcrONP5DuHKssHZRN4wpErtIpHqt7EqKObkJKjvYAZ2IA0ie3', 8, 2), 
	(11, 109, 108, 'Ajay', 'polep83175@troikos.com', '1436a615e62482ba4f075c1d4a4fd94b', 'http://localhost:4200/signup/Ajay/uPQfwbfIvqSD72KtfckY5P1yGQppeKDkkUgo4H3T1Hwbvf7LN6', 'tmNj0yOO2eSiOLAQrpKTNqbRkPsqjM8HOcMRiYFYoJsjTb993XU0RjQ1lgN1hvnG51q1S65Xc69BH4f2RsCqfmSsrvsRRsovCkPv', 3, 0), 
	(15, 110, 110, 'Tom', 'coxot27801@to200.com', '8fb40bdf313b7ed0fc5097dfb5e620f3', 'http://localhost:4200/signup/Tom/FUNXDyt1bmmp4zaSS355Mh3phefruYvGyxemOESxvP3SLulKoa', 'LnK8rp94gtzfpgUZVM8AvitiCa1XnHm8kyHVqa8cFprw2pCIf8MRMYV0jWrVtBNXfrWUj2u1xQL23yLaUL0dKaTJRxbegXDtuNec', 5, 11), 
	(16, 111, 111, 'Anu', 'datedo8824@threepp.com', '813a7909d487f199d38420b26d7c5289', 'http://localhost:4200/signup/Anu/46BwJZXUbaOtnoJ6E19HNFKrQTul1I5o8fKSqEk39Ag4fjzIKU', 'xMcJDusKQItKiyDuQVCprtYvx7bQEoMowhH41pVl1bB2fU6Nc9JqQ2XbiQhlUVVxKvGwW0Wk2qjll9evR1vHym8S1BiPwDESy97J', 7, 0)
)


Project instructions

	1. Download the angular project, python Api and nodeJS API files
	2. Keep them in separate sub folders under main folder.

Angular - frontend

1. Navigate to the folder location of the py file - folder\path> - then run the following commands

3. Installation

	1. npm install

4. Run the app

	1. ng serve

Python - backend

1. Navigate to the folder location of the py file - folder\path> - then run the following commands

2. installations

	1. python --version
		pip --version
	2. if python and pip are not available
		install python and pip
	3. pip install flask
	4. pip install Flask-Cors
	5. pip install captcha
	6. pip install MySQL-python or pip install MySQL-python-connector or python -m pip install mysql-connector-python

3. Run the file

	1. python <YourfileName.py>

Node JS - backend for sending mail

1. Navigate to the folder location of the py file - folder\path> - then run the following commands

2. installation
	
	1. install npm
	2. npm install express --save
	3. npm i cors
	4. npm install nodemailer

3. Run the file

	1. node index.js

Run all the 3 file in separate terminals

After running all the files

Go to browser and type 'http://localhost:4200'

Links
	1. http://localhost:4200 - frontend
	2. http://127.0.0.1:5000 - backend
	3. http://localhost:3100 - backend for mail
