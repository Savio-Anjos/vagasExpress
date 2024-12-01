export class NoJobsFoundError extends Error {
  constructor() {
    super("No jobs found.");
  }
}
