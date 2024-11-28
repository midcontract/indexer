import {
  AdminManagerUpdated as AdminManagerUpdatedEvent,
  Approved as ApprovedEvent,
  Claimed as ClaimedEvent,
  ClientOwnershipTransferred as ClientOwnershipTransferredEvent,
  ContractorOwnershipTransferred as ContractorOwnershipTransferredEvent,
  Deposited as DepositedEvent,
  DisputeCreated as DisputeCreatedEvent,
  DisputeResolved as DisputeResolvedEvent,
  Refilled as RefilledEvent,
  RegistryUpdated as RegistryUpdatedEvent,
  ReturnApproved as ReturnApprovedEvent,
  ReturnCanceled as ReturnCanceledEvent,
  ReturnRequested as ReturnRequestedEvent,
  Submitted as SubmittedEvent,
  Withdrawn as WithdrawnEvent,
} from "../generated/templates/EscrowFixedPrice/EscrowFixedPrice"
import {
  AdminManagerUpdated,
  Approved,
  Claimed,
  ClientOwnershipTransferred,
  ContractorOwnershipTransferred,
  Deposited,
  DisputeCreated,
  DisputeResolved,
  Refilled,
  RegistryUpdated,
  ReturnApproved,
  ReturnCanceled,
  ReturnRequested,
  Submitted,
  Withdrawn,
} from "../generated/schema"
import { log } from '@graphprotocol/graph-ts'

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
  let entity = new Approved(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.approver = event.params.approver
  entity.contractId = event.params.contractId
  entity.amountApprove = event.params.amountApprove
  entity.receiver = event.params.receiver

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleClaimed(event: ClaimedEvent): void {
  let entity = new Claimed(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.contractor = event.params.contractor
  entity.contractId = event.params.contractId
  entity.paymentToken = event.params.paymentToken
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleClientOwnershipTransferred(
  event: ClientOwnershipTransferredEvent,
): void {
  let entity = new ClientOwnershipTransferred(
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
  let entity = new ContractorOwnershipTransferred(
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
  log.info(`Handle Deposited {}`, [event.transaction.hash.toHexString()])
  let entity = new Deposited(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.sender = event.params.sender
  entity.contractId = event.params.contractId
  entity.paymentToken = event.params.paymentToken
  entity.amount = event.params.amount
  entity.feeConfig = event.params.feeConfig

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDisputeCreated(event: DisputeCreatedEvent): void {
  let entity = new DisputeCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.sender = event.params.sender
  entity.contractId = event.params.contractId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDisputeResolved(event: DisputeResolvedEvent): void {
  let entity = new DisputeResolved(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.approver = event.params.approver
  entity.contractId = event.params.contractId
  entity.winner = event.params.winner
  entity.clientAmount = event.params.clientAmount
  entity.contractorAmount = event.params.contractorAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRefilled(event: RefilledEvent): void {
  let entity = new Refilled(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.sender = event.params.sender
  entity.contractId = event.params.contractId
  entity.amountAdditional = event.params.amountAdditional

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRegistryUpdated(event: RegistryUpdatedEvent): void {
  let entity = new RegistryUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.registry = event.params.registry

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleReturnApproved(event: ReturnApprovedEvent): void {
  let entity = new ReturnApproved(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.approver = event.params.approver
  entity.contractId = event.params.contractId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleReturnCanceled(event: ReturnCanceledEvent): void {
  let entity = new ReturnCanceled(
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
  let entity = new ReturnRequested(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.sender = event.params.sender
  entity.contractId = event.params.contractId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSubmitted(event: SubmittedEvent): void {
  let entity = new Submitted(
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
  let entity = new Withdrawn(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.withdrawer = event.params.withdrawer
  entity.contractId = event.params.contractId
  entity.paymentToken = event.params.paymentToken
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
