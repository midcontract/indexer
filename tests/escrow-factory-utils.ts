import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  AdminManagerUpdated,
  ETHWithdrawn,
  EscrowProxyDeployed,
  OwnerUpdateInitiated,
  OwnershipTransferred,
  Paused,
  RegistryUpdated,
  Unpaused
} from "../generated/EscrowFactory/EscrowFactory"

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

export function createETHWithdrawnEvent(
  receiver: Address,
  amount: BigInt
): ETHWithdrawn {
  let ethWithdrawnEvent = changetype<ETHWithdrawn>(newMockEvent())

  ethWithdrawnEvent.parameters = new Array()

  ethWithdrawnEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  ethWithdrawnEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return ethWithdrawnEvent
}

export function createEscrowProxyDeployedEvent(
  sender: Address,
  deployedProxy: Address,
  escrowType: i32
): EscrowProxyDeployed {
  let escrowProxyDeployedEvent = changetype<EscrowProxyDeployed>(newMockEvent())

  escrowProxyDeployedEvent.parameters = new Array()

  escrowProxyDeployedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  escrowProxyDeployedEvent.parameters.push(
    new ethereum.EventParam(
      "deployedProxy",
      ethereum.Value.fromAddress(deployedProxy)
    )
  )
  escrowProxyDeployedEvent.parameters.push(
    new ethereum.EventParam(
      "escrowType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(escrowType))
    )
  )

  return escrowProxyDeployedEvent
}

export function createOwnerUpdateInitiatedEvent(
  user: Address,
  ownerCandidate: Address
): OwnerUpdateInitiated {
  let ownerUpdateInitiatedEvent = changetype<OwnerUpdateInitiated>(
    newMockEvent()
  )

  ownerUpdateInitiatedEvent.parameters = new Array()

  ownerUpdateInitiatedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  ownerUpdateInitiatedEvent.parameters.push(
    new ethereum.EventParam(
      "ownerCandidate",
      ethereum.Value.fromAddress(ownerCandidate)
    )
  )

  return ownerUpdateInitiatedEvent
}

export function createOwnershipTransferredEvent(
  user: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPausedEvent(account: Address): Paused {
  let pausedEvent = changetype<Paused>(newMockEvent())

  pausedEvent.parameters = new Array()

  pausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return pausedEvent
}

export function createRegistryUpdatedEvent(registry: Address): RegistryUpdated {
  let registryUpdatedEvent = changetype<RegistryUpdated>(newMockEvent())

  registryUpdatedEvent.parameters = new Array()

  registryUpdatedEvent.parameters.push(
    new ethereum.EventParam("registry", ethereum.Value.fromAddress(registry))
  )

  return registryUpdatedEvent
}

export function createUnpausedEvent(account: Address): Unpaused {
  let unpausedEvent = changetype<Unpaused>(newMockEvent())

  unpausedEvent.parameters = new Array()

  unpausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return unpausedEvent
}
