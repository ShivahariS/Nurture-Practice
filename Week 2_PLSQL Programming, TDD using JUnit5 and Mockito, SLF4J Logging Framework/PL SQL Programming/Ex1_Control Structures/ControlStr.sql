CREATE TABLE Customers (CustomerID   VARCHAR(20) PRIMARY KEY, Name VARCHAR(100), Age INT, Balance DECIMAL(12,2), IsVIP CHAR(1) DEFAULT 'N');
CREATE TABLE Loans (LoanID VARCHAR(20) PRIMARY KEY, CustomerID VARCHAR(20), InterestRate DECIMAL(5,2), DueDate DATE, FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID));
INSERT INTO Customers (CustomerID, Name, Age, Balance, IsVIP)
VALUES
('1', 'Shivahari', 33, 15000.00, 'N'),
('2', 'Sreeram', 68, 8000.00, 'N'),
('3', 'Gogulan', 70, 12000.00, 'N'),
('4', 'Ziya', 45, 8000.00, 'N');
INSERT INTO Loans (LoanID, CustomerID, InterestRate, DueDate)
VALUES
('101', '1', 6.50, DATE_ADD(CURDATE(), INTERVAL 20 DAY)),
('102', '2', 9.00, DATE_ADD(CURDATE(), INTERVAL 40 DAY)),
('103', '3', 9.75, DATE_ADD(CURDATE(), INTERVAL 10 DAY)),
('104', '4', 5.00, DATE_ADD(CURDATE(), INTERVAL 30 DAY));

DELIMITER $$
CREATE PROCEDURE Scenarios()
BEGIN
  DECLARE done INT DEFAULT 0;
  DECLARE v_customerID VARCHAR(20);
  DECLARE v_name VARCHAR(100);
  DECLARE v_dueDate DATE;
  DECLARE v_loanID VARCHAR(20);
  DECLARE cur_discount CURSOR FOR 
    SELECT CustomerID FROM Customers WHERE Age > 60;
  DECLARE cur_reminder CURSOR FOR
    SELECT l.LoanID, c.CustomerID, l.DueDate
    FROM Loans l
    JOIN Customers c ON l.CustomerID = c.CustomerID
    WHERE l.DueDate <= CURDATE() + INTERVAL 30 DAY;
  DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = 1;
  SET done = 0;
  OPEN cur_discount;
  read_discount: LOOP
    FETCH cur_discount INTO v_customerID;
    IF done THEN
      LEAVE read_discount;
    END IF;
    UPDATE Loans
    SET InterestRate = InterestRate - 1
    WHERE CustomerID = v_customerID;
  END LOOP;
  CLOSE cur_discount;
  UPDATE Customers  SET IsVIP = 'Y'  WHERE Balance > 10000;
  SET done = 0;
  OPEN cur_reminder;
  read_reminders: LOOP
    FETCH cur_reminder INTO v_loanID, v_customerID, v_dueDate;
    IF done THEN
      LEAVE read_reminders;
    END IF;
    SELECT CONCAT('Reminder: Loan ', v_loanID, 
                  ' for Customer ', v_customerID, 
                  ' is due on ', DATE_FORMAT(v_dueDate, '%d-%b-%Y')) AS ReminderMessage;
  END LOOP;
  CLOSE cur_reminder;
END$$
DELIMITER ;

CALL Scenarios();
