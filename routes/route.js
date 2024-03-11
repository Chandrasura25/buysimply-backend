const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const loanController = require('../controllers/loanController');
const { authenticateToken } = require('../utils/authMiddleware');

router.post('/login', authController.login);
router.post('/logout', authController.logout);

router.get('/loans', authenticateToken, loanController.getAllLoans);
router.get('/loans/:userEmail/get', authenticateToken, loanController.getUserLoans);
router.get('/loans', authenticateToken, loanController.getLoansByStatus);
router.get('/loans/expired', authenticateToken, loanController.getExpiredLoans);
router.delete('/loan/:loanId/delete', authenticateToken, loanController.deleteLoan);

module.exports = router;
