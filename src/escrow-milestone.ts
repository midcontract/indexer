import {
  AdminManagerUpdated as AdminManagerUpdatedEvent,
  Approved as ApprovedEvent,
  BulkClaimed as BulkClaimedEvent,
  Claimed as ClaimedEvent,
  ClientOwnershipTransferred as ClientOwnershipTransferredEvent,
  ContractorOwnershipTransferred as ContractorOwnershipTransferredEvent,
  Deposited as DepositedEvent,
  DisputeCreated as DisputeCreatedEvent,
  DisputeResolved as DisputeResolvedEvent,
  MaxMilestonesSet as MaxMilestonesSetEvent,
  Refilled as RefilledEvent,
  RegistryUpdated as RegistryUpdatedEvent,
  ReturnApproved as ReturnApprovedEvent,
  ReturnCanceled as ReturnCanceledEvent,
  ReturnRequested as ReturnRequestedEvent,
  Submitted as SubmittedEvent,
  Withdrawn as WithdrawnEvent,
} from "../generated/EscrowMilestone/EscrowMilestone"
import {
  AdminManagerUpdated,
  BulkClaimed,
  ClientOwnershipTransferred, EscrowMilestoneAdminManagerUpdated,
  EscrowMilestoneApproved,
  EscrowMilestoneClaimed, EscrowMilestoneClientOwnershipTransferred,
  EscrowMilestoneContractorOwnershipTransferred,
  EscrowMilestoneDeposited,
  EscrowMilestoneDisputeCreated,
  EscrowMilestoneDisputeResolved,
  EscrowMilestoneRefilled,
  EscrowMilestoneRegistryUpdated,
  EscrowMilestoneReturnApproved,
  EscrowMilestoneReturnCanceled,
  EscrowMilestoneReturnRequested, EscrowMilestoneSubmitted, EscrowMilestoneWithdrawn,
  MaxMilestonesSet,
  Refilled,
  RegistryUpdated,
  ReturnApproved,
  ReturnCanceled,
  ReturnRequested,
  Submitted,
  Withdrawn,
} from '../generated/schema'

export function handleAdminManagerUpdated(
  event: AdminManagerUpdatedEvent,
): void {
  let entity = new EscrowMilestoneAdminManagerUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.adminManager = event.params.adminManager

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApproved(event: ApprovedEvent): void {
  let entity = new EscrowMilestoneApproved(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.approver = event.params.approver
  entity.contractId = event.params.contractId
  entity.milestoneId = event.params.milestoneId
  entity.amountApprove = event.params.amountApprove
  entity.receiver = event.params.receiver

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBulkClaimed(event: BulkClaimedEvent): void {
  let entity = new BulkClaimed(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.contractor = event.params.contractor
  entity.contractId = event.params.contractId
  entity.startMilestoneId = event.params.startMilestoneId
  entity.endMilestoneId = event.params.endMilestoneId
  entity.totalClaimedAmount = event.params.totalClaimedAmount
  entity.totalFeeAmount = event.params.totalFeeAmount
  entity.totalClientFee = event.params.totalClientFee
  entity.client = event.params.client

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleClaimed(event: ClaimedEvent): void {
  let entity = new EscrowMilestoneClaimed(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.contractor = event.params.contractor
  entity.contractId = event.params.contractId
  entity.milestoneId = event.params.milestoneId
  entity.amount = event.params.amount
  entity.feeAmount = event.params.feeAmount
  entity.client = event.params.client

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleClientOwnershipTransferred(
  event: ClientOwnershipTransferredEvent,
): void {
  let entity = new EscrowMilestoneClientOwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleContractorOwnershipTransferred(
  event: ContractorOwnershipTransferredEvent,
): void {
  let entity = new EscrowMilestoneContractorOwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.contractId = event.params.contractId
  entity.milestoneId = event.params.milestoneId
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDeposited(event: DepositedEvent): void {
  let entity = new EscrowMilestoneDeposited(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.depositor = event.params.depositor
  entity.contractId = event.params.contractId
  entity.milestoneId = event.params.milestoneId
  entity.amount = event.params.amount
  entity.contractor = event.params.contractor

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDisputeCreated(event: DisputeCreatedEvent): void {
  let entity = new EscrowMilestoneDisputeCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.sender = event.params.sender
  entity.contractId = event.params.contractId
  entity.milestoneId = event.params.milestoneId
  entity.client = event.params.client

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDisputeResolved(event: DisputeResolvedEvent): void {
  let entity = new EscrowMilestoneDisputeResolved(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.approver = event.params.approver
  entity.contractId = event.params.contractId
  entity.milestoneId = event.params.milestoneId
  entity.winner = event.params.winner
  entity.clientAmount = event.params.clientAmount
  entity.contractorAmount = event.params.contractorAmount
  entity.client = event.params.client

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMaxMilestonesSet(event: MaxMilestonesSetEvent): void {
  let entity = new MaxMilestonesSet(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.maxMilestones = event.params.maxMilestones

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRefilled(event: RefilledEvent): void {
  let entity = new EscrowMilestoneRefilled(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.sender = event.params.sender
  entity.contractId = event.params.contractId
  entity.milestoneId = event.params.milestoneId
  entity.amountAdditional = event.params.amountAdditional

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRegistryUpdated(event: RegistryUpdatedEvent): void {
  let entity = new EscrowMilestoneRegistryUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.registry = event.params.registry

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleReturnApproved(event: ReturnApprovedEvent): void {
  let entity = new EscrowMilestoneReturnApproved(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.approver = event.params.approver
  entity.contractId = event.params.contractId
  entity.milestoneId = event.params.milestoneId
  entity.client = event.params.client

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleReturnCanceled(event: ReturnCanceledEvent): void {
  let entity = new EscrowMilestoneReturnCanceled(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.sender = event.params.sender
  entity.contractId = event.params.contractId
  entity.milestoneId = event.params.milestoneId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleReturnRequested(event: ReturnRequestedEvent): void {
  let entity = new EscrowMilestoneReturnRequested(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.sender = event.params.sender
  entity.contractId = event.params.contractId
  entity.milestoneId = event.params.milestoneId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSubmitted(event: SubmittedEvent): void {
  let entity = new EscrowMilestoneSubmitted(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.sender = event.params.sender
  entity.contractId = event.params.contractId
  entity.milestoneId = event.params.milestoneId
  entity.client = event.params.client

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdrawn(event: WithdrawnEvent): void {
  let entity = new EscrowMilestoneWithdrawn(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.withdrawer = event.params.withdrawer
  entity.contractId = event.params.contractId
  entity.milestoneId = event.params.milestoneId
  entity.amount = event.params.amount
  entity.feeAmount = event.params.feeAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
