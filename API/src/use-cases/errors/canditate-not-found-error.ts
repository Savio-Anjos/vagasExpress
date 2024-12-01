export class CandidateNotFoundError extends Error {
  constructor() {
    super("Candidate not found.");
  }
}
