class Loan {
  constructor(id, amount, maturityDate, status, applicant, createdAt) {
    this.id = id;
    this.amount = amount;
    this.maturityDate = maturityDate;
    this.status = status;
    this.applicant = applicant;
    this.createdAt = createdAt;
  }
}

module.exports = Loan;
