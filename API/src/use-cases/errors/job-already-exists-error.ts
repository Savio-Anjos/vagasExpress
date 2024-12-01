export class JobApplicationAlreadyExistsError extends Error {
  constructor() {
    super("Job Application already exists.");
  }
}
