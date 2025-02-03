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
  RefilledPrepayment as RefilledPrepaymentEvent,
  RefilledWeekPayment as RefilledWeekPaymentEvent,
  RegistryUpdated as RegistryUpdatedEvent,
  ReturnApproved as ReturnApprovedEvent,
  ReturnCanceled as ReturnCanceledEvent,
  ReturnRequested as ReturnRequestedEvent,
  Withdrawn as WithdrawnEvent,
} from "../generated/EscrowHourly/EscrowHourly"
import {
  AdminManagerUpdated,
  EscrowHourlyApproved,
  EscrowHourlyBulkClaimed,
  EscrowHourlyClaimed,
  EscrowHourlyClientOwnershipTransferred,
  EscrowHourlyContractorOwnershipTransferred,
  EscrowHourlyDeposited,
  EscrowHourlyDisputeCreated,
  EscrowHourlyDisputeResolved,
  EscrowHourlyRegistryUpdated,
  EscrowHourlyReturnApproved,
  EscrowHourlyReturnCanceled,
  EscrowHourlyReturnRequested, EscrowHourlyWithdrawn,
  RefilledPrepayment,
  RefilledWeekPayment,
  RegistryUpdated,
  ReturnApproved,
  ReturnCanceled,
  ReturnRequested,
  Withdrawn,
} from '../generated/schema'

export function handleAdminManagerUpdated(
  event: AdminManagerUpdatedEvent,
): void {
  let entity = new AdminManagerUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.adminManager = event.params.adminManager

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApproved(event: ApprovedEvent): void {
  let entity = new EscrowHourlyApproved(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.approver = event.params.approver
  entity.contractId = event.params.contractId
  entity.weekId = event.params.weekId
  entity.amountApprove = event.params.amountApprove
  entity.receiver = event.params.receiver

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBulkClaimed(event: BulkClaimedEvent): void {
  let entity = new EscrowHourlyBulkClaimed(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.contractor = event.params.contractor
  entity.contractId = event.params.contractId
  entity.startWeekId = event.params.startWeekId
  entity.endWeekId = event.params.endWeekId
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
  let entity = new EscrowHourlyClaimed(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.contractor = event.params.contractor
  entity.contractId = event.params.contractId
  entity.weekId = event.params.weekId
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
  let entity = new EscrowHourlyClientOwnershipTransferred(
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
  let entity = new EscrowHourlyContractorOwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.contractId = event.params.contractId
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDeposited(event: DepositedEvent): void {
  let entity = new EscrowHourlyDeposited(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.sender = event.params.sender
  entity.contractId = event.params.contractId
  entity.weekId = event.params.weekId
  entity.totalDepositAmount = event.params.totalDepositAmount
  entity.contractor = event.params.contractor

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDisputeCreated(event: DisputeCreatedEvent): void {
  let entity = new EscrowHourlyDisputeCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.sender = event.params.sender
  entity.contractId = event.params.contractId
  entity.weekId = event.params.weekId
  entity.client = event.params.client

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDisputeResolved(event: DisputeResolvedEvent): void {
  let entity = new EscrowHourlyDisputeResolved(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.approver = event.params.approver
  entity.contractId = event.params.contractId
  entity.weekId = event.params.weekId
  entity.winner = event.params.winner
  entity.clientAmount = event.params.clientAmount
  entity.contractorAmount = event.params.contractorAmount
  entity.client = event.params.client

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRefilledPrepayment(event: RefilledPrepaymentEvent): void {
  let entity = new RefilledPrepayment(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.sender = event.params.sender
  entity.contractId = event.params.contractId
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRefilledWeekPayment(
  event: RefilledWeekPaymentEvent,
): void {
  let entity = new RefilledWeekPayment(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.sender = event.params.sender
  entity.contractId = event.params.contractId
  entity.weekId = event.params.weekId
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRegistryUpdated(event: RegistryUpdatedEvent): void {
  let entity = new EscrowHourlyRegistryUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.registry = event.params.registry

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleReturnApproved(event: ReturnApprovedEvent): void {
  let entity = new EscrowHourlyReturnApproved(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.approver = event.params.approver
  entity.contractId = event.params.contractId
  entity.client = event.params.client

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleReturnCanceled(event: ReturnCanceledEvent): void {
  let entity = new EscrowHourlyReturnCanceled(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.sender = event.params.sender
  entity.contractId = event.params.contractId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleReturnRequested(event: ReturnRequestedEvent): void {
  let entity = new EscrowHourlyReturnRequested(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.sender = event.params.sender
  entity.contractId = event.params.contractId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdrawn(event: WithdrawnEvent): void {
  let entity = new EscrowHourlyWithdrawn(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.withdrawer = event.params.withdrawer
  entity.contractId = event.params.contractId
  entity.amount = event.params.amount
  entity.feeAmount = event.params.feeAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
