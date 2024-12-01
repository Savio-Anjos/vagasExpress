export class JobNotFoundError extends Error {
  constructor() {
    super("Job not found.");
  }
}
