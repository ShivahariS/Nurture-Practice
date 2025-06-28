CREATE TABLE Accounts (AccID INT(20) PRIMARY KEY, AccType VARCHAR(20), Bal DECIMAL(12,2));
CREATE TABLE Employees (EmpID INT(20) PRIMARY KEY, Name VARCHAR(100), Dept VARCHAR(100), Sal DECIMAL(10,2));

INSERT INTO Accounts VALUES 
('101', 'Savings', 14000.00),
('102', 'Current', 5520.00),
('103', 'Savings', 21000.00),
('104', 'Current', 3750.00);

INSERT INTO Employees VALUES 
('001', 'Hari', 'HR', 40000.00),
('002', 'Sreeram', 'IT', 60000.00),
('003', 'Gogulan', 'ACC', 50000.00),
('004', 'Ziya', 'HR', 45000.00);

DELIMITER $$
CREATE PROCEDURE ProcessMonthlyInterest()
BEGIN
  UPDATE Accounts
  SET Bal = Bal * 1.01
  WHERE AccType = 'Savings';
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE UpdateEmployeeBonus(IN deptName VARCHAR(100), IN bonusPercent DECIMAL(5,2))
BEGIN
  UPDATE Employees
  SET Sal = Sal+(Sal*bonusPercent/100)
  WHERE Dept = deptName;
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE TransferFunds(
  IN fromAcc VARCHAR(20),
  IN toAcc VARCHAR(20),
  IN amt DECIMAL(12,2)
)
BEGIN
  DECLARE fromBal DECIMAL(12,2);

  SELECT Bal INTO fromBal
  FROM Accounts
  WHERE AccID = fromAcc;

  IF fromBal >= amt THEN
     UPDATE Accounts
    SET Bal = Bal - amt
    WHERE AccID = fromAcc;

    UPDATE Accounts
    SET Bal = Bal + amt
    WHERE AccID = toAcc;

    SELECT CONCAT('₹', amt, ' transferred from Account ', fromAcc, ' to Account ', toAcc) AS Message;

  ELSE
    SIGNAL SQLSTATE '45000'
    SET MESSAGE_TEXT = 'Insufficient balance in source account';
  END IF;
END$$

DELIMITER ;

CALL ProcessMonthlyInterest;
CALL TransferFunds(101,104,1200);
CALL UpdateEmployeeBonus(‘HR’,10);
