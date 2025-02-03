import {
  AdminManagerUpdated as AdminManagerUpdatedEvent,
  ETHWithdrawn as ETHWithdrawnEvent,
  EscrowProxyDeployed as EscrowProxyDeployedEvent,
  OwnerUpdateInitiated as OwnerUpdateInitiatedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Paused as PausedEvent,
  RegistryUpdated as RegistryUpdatedEvent,
  Unpaused as UnpausedEvent,
} from "../generated/EscrowFactory/EscrowFactory"
import {
  AdminManagerUpdated,
  ETHWithdrawn,
  EscrowProxyDeployed,
  OwnerUpdateInitiated,
  OwnershipTransferred,
  Paused,
  RegistryUpdated,
  Unpaused,
} from "../generated/schema"

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

export function handleETHWithdrawn(event: ETHWithdrawnEvent): void {
  let entity = new ETHWithdrawn(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.receiver = event.params.receiver
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEscrowProxyDeployed(
  event: EscrowProxyDeployedEvent,
): void {
  let entity = new EscrowProxyDeployed(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.sender = event.params.sender
  entity.deployedProxy = event.params.deployedProxy
  entity.escrowType = event.params.escrowType

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnerUpdateInitiated(
  event: OwnerUpdateInitiatedEvent,
): void {
  let entity = new OwnerUpdateInitiated(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.user = event.params.user
  entity.ownerCandidate = event.params.ownerCandidate

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent,
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.user = event.params.user
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePaused(event: PausedEvent): void {
  let entity = new Paused(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.account = event.params.account

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

export function handleUnpaused(event: UnpausedEvent): void {
  let entity = new Unpaused(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
