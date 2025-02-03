import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
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
  Withdrawn
} from "../generated/EscrowFixedPrice/EscrowFixedPrice"

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
      "amountApprove",
      ethereum.Value.fromUnsignedBigInt(amountApprove)
    )
  )
  approvedEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )

  return approvedEvent
}

export function createClaimedEvent(
  contractor: Address,
  contractId: BigInt,
  amount: BigInt,
  feeAmount: BigInt,
  client: Address
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
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  claimedEvent.parameters.push(
    new ethereum.EventParam(
      "feeAmount",
      ethereum.Value.fromUnsignedBigInt(feeAmount)
    )
  )
  claimedEvent.parameters.push(
    new ethereum.EventParam("client", ethereum.Value.fromAddress(client))
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
  depositor: Address,
  contractId: BigInt,
  totalDepositAmount: BigInt,
  contractor: Address
): Deposited {
  let depositedEvent = changetype<Deposited>(newMockEvent())

  depositedEvent.parameters = new Array()

  depositedEvent.parameters.push(
    new ethereum.EventParam("depositor", ethereum.Value.fromAddress(depositor))
  )
  depositedEvent.parameters.push(
    new ethereum.EventParam(
      "contractId",
      ethereum.Value.fromUnsignedBigInt(contractId)
    )
  )
  depositedEvent.parameters.push(
    new ethereum.EventParam(
      "totalDepositAmount",
      ethereum.Value.fromUnsignedBigInt(totalDepositAmount)
    )
  )
  depositedEvent.parameters.push(
    new ethereum.EventParam(
      "contractor",
      ethereum.Value.fromAddress(contractor)
    )
  )

  return depositedEvent
}

export function createDisputeCreatedEvent(
  sender: Address,
  contractId: BigInt,
  client: Address
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
    new ethereum.EventParam("client", ethereum.Value.fromAddress(client))
  )

  return disputeCreatedEvent
}

export function createDisputeResolvedEvent(
  approver: Address,
  contractId: BigInt,
  winner: i32,
  clientAmount: BigInt,
  contractorAmount: BigInt,
  client: Address
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
  disputeResolvedEvent.parameters.push(
    new ethereum.EventParam("client", ethereum.Value.fromAddress(client))
  )

  return disputeResolvedEvent
}

export function createRefilledEvent(
  sender: Address,
  contractId: BigInt,
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
  client: Address
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
    new ethereum.EventParam("client", ethereum.Value.fromAddress(client))
  )

  return returnApprovedEvent
}

export function createReturnCanceledEvent(
  sender: Address,
  contractId: BigInt
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

  return returnCanceledEvent
}

export function createReturnRequestedEvent(
  sender: Address,
  contractId: BigInt
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

  return returnRequestedEvent
}

export function createSubmittedEvent(
  sender: Address,
  contractId: BigInt,
  client: Address
): Submitted {
  let submittedEvent = changetype<Submitted>(newMockEvent())

  submittedEvent.parameters = new Array()

  submittedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  submittedEvent.parameters.push(
    new ethereum.EventParam(
      "contractId",
      ethereum.Value.fromUnsignedBigInt(contractId)
    )
  )
  submittedEvent.parameters.push(
    new ethereum.EventParam("client", ethereum.Value.fromAddress(client))
  )

  return submittedEvent
}

export function createWithdrawnEvent(
  withdrawer: Address,
  contractId: BigInt,
  amount: BigInt,
  feeAmount: BigInt
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
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  withdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "feeAmount",
      ethereum.Value.fromUnsignedBigInt(feeAmount)
    )
  )

  return withdrawnEvent
}
