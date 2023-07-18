const WAITING_FOR_APPROVAL = 'waiting-for-approval';
const APPROVED = 'approved';
const REJECTED = 'rejected';
const LIVE = 'live';
const ENDED = 'ended';
const REVISION_REQUESTED = 'revision-requested';
const REVISION_COMPLETED = 'revision-completed';

const GO_LIVE_NOT_ALLOWED = [WAITING_FOR_APPROVAL, REJECTED, ENDED, REVISION_REQUESTED, REVISION_COMPLETED, LIVE];
const APPROVE_NOT_ALLOWED = [REJECTED, LIVE, ENDED, REVISION_REQUESTED];
const REJECT_NOT_ALLOWED = [APPROVED, LIVE, ENDED];
const REQUEST_REVISION_NOT_ALLOWED = [APPROVED, REJECTED, LIVE, ENDED];

module.exports = {
  WAITING_FOR_APPROVAL,
  APPROVED,
  REJECTED,
  LIVE,
  ENDED,
  REVISION_REQUESTED,
  REVISION_COMPLETED,
  GO_LIVE_NOT_ALLOWED,
  APPROVE_NOT_ALLOWED,
  REQUEST_REVISION_NOT_ALLOWED,
  REJECT_NOT_ALLOWED,
};
