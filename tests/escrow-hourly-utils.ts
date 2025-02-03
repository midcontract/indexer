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
  RefilledPrepayment,
  RefilledWeekPayment,
  RegistryUpdated,
  ReturnApproved,
  ReturnCanceled,
  ReturnRequested,
  Withdrawn
} from "../generated/EscrowHourly/EscrowHourly"

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
  weekId: BigInt,
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
    new ethereum.EventParam("weekId", ethereum.Value.fromUnsignedBigInt(weekId))
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
  startWeekId: BigInt,
  endWeekId: BigInt,
  totalClaimedAmount: BigInt,
  totalFeeAmount: BigInt,
  totalClientFee: BigInt,
  client: Address
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
      "startWeekId",
      ethereum.Value.fromUnsignedBigInt(startWeekId)
    )
  )
  bulkClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "endWeekId",
      ethereum.Value.fromUnsignedBigInt(endWeekId)
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
  bulkClaimedEvent.parameters.push(
    new ethereum.EventParam("client", ethereum.Value.fromAddress(client))
  )

  return bulkClaimedEvent
}

export function createClaimedEvent(
  contractor: Address,
  contractId: BigInt,
  weekId: BigInt,
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
    new ethereum.EventParam("weekId", ethereum.Value.fromUnsignedBigInt(weekId))
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
  sender: Address,
  contractId: BigInt,
  weekId: BigInt,
  totalDepositAmount: BigInt,
  contractor: Address
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
    new ethereum.EventParam("weekId", ethereum.Value.fromUnsignedBigInt(weekId))
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
  weekId: BigInt,
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
    new ethereum.EventParam("weekId", ethereum.Value.fromUnsignedBigInt(weekId))
  )
  disputeCreatedEvent.parameters.push(
    new ethereum.EventParam("client", ethereum.Value.fromAddress(client))
  )

  return disputeCreatedEvent
}

export function createDisputeResolvedEvent(
  approver: Address,
  contractId: BigInt,
  weekId: BigInt,
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
    new ethereum.EventParam("weekId", ethereum.Value.fromUnsignedBigInt(weekId))
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

export function createRefilledPrepaymentEvent(
  sender: Address,
  contractId: BigInt,
  amount: BigInt
): RefilledPrepayment {
  let refilledPrepaymentEvent = changetype<RefilledPrepayment>(newMockEvent())

  refilledPrepaymentEvent.parameters = new Array()

  refilledPrepaymentEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  refilledPrepaymentEvent.parameters.push(
    new ethereum.EventParam(
      "contractId",
      ethereum.Value.fromUnsignedBigInt(contractId)
    )
  )
  refilledPrepaymentEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return refilledPrepaymentEvent
}

export function createRefilledWeekPaymentEvent(
  sender: Address,
  contractId: BigInt,
  weekId: BigInt,
  amount: BigInt
): RefilledWeekPayment {
  let refilledWeekPaymentEvent = changetype<RefilledWeekPayment>(newMockEvent())

  refilledWeekPaymentEvent.parameters = new Array()

  refilledWeekPaymentEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  refilledWeekPaymentEvent.parameters.push(
    new ethereum.EventParam(
      "contractId",
      ethereum.Value.fromUnsignedBigInt(contractId)
    )
  )
  refilledWeekPaymentEvent.parameters.push(
    new ethereum.EventParam("weekId", ethereum.Value.fromUnsignedBigInt(weekId))
  )
  refilledWeekPaymentEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return refilledWeekPaymentEvent
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
