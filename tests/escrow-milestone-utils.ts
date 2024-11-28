import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  AdminManagerUpdated,
  Approved,
  BulkClaimed,
  Claimed,
  ClientOwnershipTransferred,
  ContractorOwnershipTransferred,
  Deposited,
  DisputeCreated,
  DisputeResolved,
  MaxMilestonesSet,
  Refilled,
  RegistryUpdated,
  ReturnApproved,
  ReturnCanceled,
  ReturnRequested,
  Submitted,
  Withdrawn
} from "../generated/EscrowMilestone/EscrowMilestone"

export function createAdminManagerUpdatedEvent(
  adminManager: Address
): AdminManagerUpdated {
  let adminManagerUpdatedEvent = changetype<AdminManagerUpdated>(newMockEvent())

  adminManagerUpdatedEvent.parameters = new Array()

  adminManagerUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "adminManager",
      ethereum.Value.fromAddress(adminManager)
    )
  )

  return adminManagerUpdatedEvent
}

export function createApprovedEvent(
  approver: Address,
  contractId: BigInt,
  milestoneId: BigInt,
  amountApprove: BigInt,
  receiver: Address
): Approved {
  let approvedEvent = changetype<Approved>(newMockEvent())

  approvedEvent.parameters = new Array()

  approvedEvent.parameters.push(
    new ethereum.EventParam("approver", ethereum.Value.fromAddress(approver))
  )
  approvedEvent.parameters.push(
    new ethereum.EventParam(
      "contractId",
      ethereum.Value.fromUnsignedBigInt(contractId)
    )
  )
  approvedEvent.parameters.push(
    new ethereum.EventParam(
      "milestoneId",
      ethereum.Value.fromUnsignedBigInt(milestoneId)
    )
  )
  approvedEvent.parameters.push(
    new ethereum.EventParam(
      "amountApprove",
      ethereum.Value.fromUnsignedBigInt(amountApprove)
    )
  )
  approvedEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )

  return approvedEvent
}

export function createBulkClaimedEvent(
  contractor: Address,
  contractId: BigInt,
  startMilestoneId: BigInt,
  endMilestoneId: BigInt,
  totalClaimedAmount: BigInt,
  totalFeeAmount: BigInt,
  totalClientFee: BigInt
): BulkClaimed {
  let bulkClaimedEvent = changetype<BulkClaimed>(newMockEvent())

  bulkClaimedEvent.parameters = new Array()

  bulkClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "contractor",
      ethereum.Value.fromAddress(contractor)
    )
  )
  bulkClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "contractId",
      ethereum.Value.fromUnsignedBigInt(contractId)
    )
  )
  bulkClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "startMilestoneId",
      ethereum.Value.fromUnsignedBigInt(startMilestoneId)
    )
  )
  bulkClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "endMilestoneId",
      ethereum.Value.fromUnsignedBigInt(endMilestoneId)
    )
  )
  bulkClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "totalClaimedAmount",
      ethereum.Value.fromUnsignedBigInt(totalClaimedAmount)
    )
  )
  bulkClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "totalFeeAmount",
      ethereum.Value.fromUnsignedBigInt(totalFeeAmount)
    )
  )
  bulkClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "totalClientFee",
      ethereum.Value.fromUnsignedBigInt(totalClientFee)
    )
  )

  return bulkClaimedEvent
}

export function createClaimedEvent(
  contractor: Address,
  contractId: BigInt,
  milestoneId: BigInt,
  amount: BigInt
): Claimed {
  let claimedEvent = changetype<Claimed>(newMockEvent())

  claimedEvent.parameters = new Array()

  claimedEvent.parameters.push(
    new ethereum.EventParam(
      "contractor",
      ethereum.Value.fromAddress(contractor)
    )
  )
  claimedEvent.parameters.push(
    new ethereum.EventParam(
      "contractId",
      ethereum.Value.fromUnsignedBigInt(contractId)
    )
  )
  claimedEvent.parameters.push(
    new ethereum.EventParam(
      "milestoneId",
      ethereum.Value.fromUnsignedBigInt(milestoneId)
    )
  )
  claimedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return claimedEvent
}

export function createClientOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): ClientOwnershipTransferred {
  let clientOwnershipTransferredEvent = changetype<ClientOwnershipTransferred>(
    newMockEvent()
  )

  clientOwnershipTransferredEvent.parameters = new Array()

  clientOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  clientOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return clientOwnershipTransferredEvent
}

export function createContractorOwnershipTransferredEvent(
  contractId: BigInt,
  milestoneId: BigInt,
  previousOwner: Address,
  newOwner: Address
): ContractorOwnershipTransferred {
  let contractorOwnershipTransferredEvent =
    changetype<ContractorOwnershipTransferred>(newMockEvent())

  contractorOwnershipTransferredEvent.parameters = new Array()

  contractorOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "contractId",
      ethereum.Value.fromUnsignedBigInt(contractId)
    )
  )
  contractorOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "milestoneId",
      ethereum.Value.fromUnsignedBigInt(milestoneId)
    )
  )
  contractorOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  contractorOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return contractorOwnershipTransferredEvent
}

export function createDepositedEvent(
  sender: Address,
  contractId: BigInt,
  milestoneId: BigInt,
  paymentToken: Address,
  amount: BigInt,
  feeConfig: i32
): Deposited {
  let depositedEvent = changetype<Deposited>(newMockEvent())

  depositedEvent.parameters = new Array()

  depositedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  depositedEvent.parameters.push(
    new ethereum.EventParam(
      "contractId",
      ethereum.Value.fromUnsignedBigInt(contractId)
    )
  )
  depositedEvent.parameters.push(
    new ethereum.EventParam(
      "milestoneId",
      ethereum.Value.fromUnsignedBigInt(milestoneId)
    )
  )
  depositedEvent.parameters.push(
    new ethereum.EventParam(
      "paymentToken",
      ethereum.Value.fromAddress(paymentToken)
    )
  )
  depositedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  depositedEvent.parameters.push(
    new ethereum.EventParam(
      "feeConfig",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(feeConfig))
    )
  )

  return depositedEvent
}

export function createDisputeCreatedEvent(
  sender: Address,
  contractId: BigInt,
  milestoneId: BigInt
): DisputeCreated {
  let disputeCreatedEvent = changetype<DisputeCreated>(newMockEvent())

  disputeCreatedEvent.parameters = new Array()

  disputeCreatedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  disputeCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "contractId",
      ethereum.Value.fromUnsignedBigInt(contractId)
    )
  )
  disputeCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "milestoneId",
      ethereum.Value.fromUnsignedBigInt(milestoneId)
    )
  )

  return disputeCreatedEvent
}

export function createDisputeResolvedEvent(
  approver: Address,
  contractId: BigInt,
  milestoneId: BigInt,
  winner: i32,
  clientAmount: BigInt,
  contractorAmount: BigInt
): DisputeResolved {
  let disputeResolvedEvent = changetype<DisputeResolved>(newMockEvent())

  disputeResolvedEvent.parameters = new Array()

  disputeResolvedEvent.parameters.push(
    new ethereum.EventParam("approver", ethereum.Value.fromAddress(approver))
  )
  disputeResolvedEvent.parameters.push(
    new ethereum.EventParam(
      "contractId",
      ethereum.Value.fromUnsignedBigInt(contractId)
    )
  )
  disputeResolvedEvent.parameters.push(
    new ethereum.EventParam(
      "milestoneId",
      ethereum.Value.fromUnsignedBigInt(milestoneId)
    )
  )
  disputeResolvedEvent.parameters.push(
    new ethereum.EventParam(
      "winner",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(winner))
    )
  )
  disputeResolvedEvent.parameters.push(
    new ethereum.EventParam(
      "clientAmount",
      ethereum.Value.fromUnsignedBigInt(clientAmount)
    )
  )
  disputeResolvedEvent.parameters.push(
    new ethereum.EventParam(
      "contractorAmount",
      ethereum.Value.fromUnsignedBigInt(contractorAmount)
    )
  )

  return disputeResolvedEvent
}

export function createMaxMilestonesSetEvent(
  maxMilestones: BigInt
): MaxMilestonesSet {
  let maxMilestonesSetEvent = changetype<MaxMilestonesSet>(newMockEvent())

  maxMilestonesSetEvent.parameters = new Array()

  maxMilestonesSetEvent.parameters.push(
    new ethereum.EventParam(
      "maxMilestones",
      ethereum.Value.fromUnsignedBigInt(maxMilestones)
    )
  )

  return maxMilestonesSetEvent
}

export function createRefilledEvent(
  sender: Address,
  contractId: BigInt,
  milestoneId: BigInt,
  amountAdditional: BigInt
): Refilled {
  let refilledEvent = changetype<Refilled>(newMockEvent())

  refilledEvent.parameters = new Array()

  refilledEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  refilledEvent.parameters.push(
    new ethereum.EventParam(
      "contractId",
      ethereum.Value.fromUnsignedBigInt(contractId)
    )
  )
  refilledEvent.parameters.push(
    new ethereum.EventParam(
      "milestoneId",
      ethereum.Value.fromUnsignedBigInt(milestoneId)
    )
  )
  refilledEvent.parameters.push(
    new ethereum.EventParam(
      "amountAdditional",
      ethereum.Value.fromUnsignedBigInt(amountAdditional)
    )
  )

  return refilledEvent
}

export function createRegistryUpdatedEvent(registry: Address): RegistryUpdated {
  let registryUpdatedEvent = changetype<RegistryUpdated>(newMockEvent())

  registryUpdatedEvent.parameters = new Array()

  registryUpdatedEvent.parameters.push(
    new ethereum.EventParam("registry", ethereum.Value.fromAddress(registry))
  )

  return registryUpdatedEvent
}

export function createReturnApprovedEvent(
  approver: Address,
  contractId: BigInt,
  milestoneId: BigInt
): ReturnApproved {
  let returnApprovedEvent = changetype<ReturnApproved>(newMockEvent())

  returnApprovedEvent.parameters = new Array()

  returnApprovedEvent.parameters.push(
    new ethereum.EventParam("approver", ethereum.Value.fromAddress(approver))
  )
  returnApprovedEvent.parameters.push(
    new ethereum.EventParam(
      "contractId",
      ethereum.Value.fromUnsignedBigInt(contractId)
    )
  )
  returnApprovedEvent.parameters.push(
    new ethereum.EventParam(
      "milestoneId",
      ethereum.Value.fromUnsignedBigInt(milestoneId)
    )
  )

  return returnApprovedEvent
}

export function createReturnCanceledEvent(
  sender: Address,
  contractId: BigInt,
  milestoneId: BigInt
): ReturnCanceled {
  let returnCanceledEvent = changetype<ReturnCanceled>(newMockEvent())

  returnCanceledEvent.parameters = new Array()

  returnCanceledEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  returnCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "contractId",
      ethereum.Value.fromUnsignedBigInt(contractId)
    )
  )
  returnCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "milestoneId",
      ethereum.Value.fromUnsignedBigInt(milestoneId)
    )
  )

  return returnCanceledEvent
}

export function createReturnRequestedEvent(
  sender: Address,
  contractId: BigInt,
  milestoneId: BigInt
): ReturnRequested {
  let returnRequestedEvent = changetype<ReturnRequested>(newMockEvent())

  returnRequestedEvent.parameters = new Array()

  returnRequestedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  returnRequestedEvent.parameters.push(
    new ethereum.EventParam(
      "contractId",
      ethereum.Value.fromUnsignedBigInt(contractId)
    )
  )
  returnRequestedEvent.parameters.push(
    new ethereum.EventParam(
      "milestoneId",
      ethereum.Value.fromUnsignedBigInt(milestoneId)
    )
  )

  return returnRequestedEvent
}

export function createSubmittedEvent(
  sender: Address,
  milestoneId: BigInt,
  contractId: BigInt
): Submitted {
  let submittedEvent = changetype<Submitted>(newMockEvent())

  submittedEvent.parameters = new Array()

  submittedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  submittedEvent.parameters.push(
    new ethereum.EventParam(
      "milestoneId",
      ethereum.Value.fromUnsignedBigInt(milestoneId)
    )
  )
  submittedEvent.parameters.push(
    new ethereum.EventParam(
      "contractId",
      ethereum.Value.fromUnsignedBigInt(contractId)
    )
  )

  return submittedEvent
}

export function createWithdrawnEvent(
  withdrawer: Address,
  contractId: BigInt,
  milestoneId: BigInt,
  amount: BigInt
): Withdrawn {
  let withdrawnEvent = changetype<Withdrawn>(newMockEvent())

  withdrawnEvent.parameters = new Array()

  withdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "withdrawer",
      ethereum.Value.fromAddress(withdrawer)
    )
  )
  withdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "contractId",
      ethereum.Value.fromUnsignedBigInt(contractId)
    )
  )
  withdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "milestoneId",
      ethereum.Value.fromUnsignedBigInt(milestoneId)
    )
  )
  withdrawnEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return withdrawnEvent
}
