const Loan = require('../models/loan.model');
const staffData = require('../data/staffs.json');
const loansData = require('../data/loans.json');


function getAllLoans(req, res) {
  try {
    const modifiedLoans = loansData.map(loan => {
      const modifiedLoan = { ...loan };
      if (req.user.role !== 'admin' && req.user.role !== 'superAdmin') {
        modifiedLoan.applicant.totalLoan = 'Hidden';
      }
      return modifiedLoan;
    });
    res.status(200).json({ loans: modifiedLoans });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

function getLoansByStatus(req, res) {
  try {
    const { status } = req.query;
    if (!status || !['pending', 'active'].includes(status)) {
      return res.status(400).json({ message: 'Invalid status parameter' });
    }
    const filteredLoans = loansData.filter(loan => loan.status === status);
    const modifiedLoans = filteredLoans.map(loan => {
      const modifiedLoan = { ...loan };
      if (req.user.role !== 'admin' && req.user.role !== 'superAdmin') {
        modifiedLoan.applicant.totalLoan = 'Hidden';
      }
      return modifiedLoan;
    });

   res.status(200).json({ loans: modifiedLoans });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

function getUserLoans(req, res) {
  try {
    const { userEmail } = req.params;
    const userLoans = loansData.filter(loan => loan.applicant.email === userEmail);
    if (userLoans.length === 0) {
      return res.json({ loans: [] });
    }
    const modifiedLoans = userLoans.map(loan => {
      const modifiedLoan = { ...loan };
      if (req.user.role !== 'admin' && req.user.role !== 'superAdmin') {
        modifiedLoan.applicant.totalLoan = 'Hidden';
      }
      return modifiedLoan;
    });

    res.status(200).json({ loans: modifiedLoans });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

function getExpiredLoans(req, res) {
  try {
    const currentDate = new Date();
    const expiredLoans = loansData.filter(loan => new Date(loan.maturityDate) < currentDate);
    const modifiedLoans = expiredLoans.map(loan => {
      const modifiedLoan = { ...loan };
      if (req.user.role !== 'admin' && req.user.role !== 'superAdmin') {
        modifiedLoan.applicant.totalLoan = 'Hidden';
      }
      return modifiedLoan;
    });

   res.status(200).json({ loans: modifiedLoans });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

function deleteLoan(req, res) {
  try {
    const { loanId } = req.params;
    if (req.user.role !== 'superAdmin') {
      return res.status(403).json({ message: 'Forbidden' });
    }

    const index = loansData.findIndex(loan => loan.id === loanId);
    if (index === -1) {
      return res.status(404).json({ message: 'Loan not found' });
    }
    loansData.splice(index, 1);

    res.json({ message: 'Loan deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
module.exports = { getAllLoans, getLoansByStatus, getUserLoans, getExpiredLoans, deleteLoan };
