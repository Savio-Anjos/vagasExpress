export class RecruiterAlreadyExistsError extends Error {
  constructor() {
    super("Recruiter already exists.");
  }
}
