import {
  EscrowProxyDeployed as EscrowProxyDeployedEvent,
  OwnerUpdateInitiated as OwnerUpdateInitiatedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Paused as PausedEvent,
  RegistryUpdated as RegistryUpdatedEvent,
  Unpaused as UnpausedEvent
} from "../generated/EscrowFactory/EscrowFactory"
import {
  EscrowProxyDeployed,
  OwnerUpdateInitiated,
  OwnershipTransferred,
  Paused,
  RegistryUpdated,
  Unpaused
} from "../generated/schema"
import { log } from '@graphprotocol/graph-ts'

import { EscrowFixedPrice, EscrowMilestone, EscrowHourly } from "../generated/templates"

export enum EscrowType {
  FixedPrice,
  Milestone,
  Hourly,
}

export function handleEscrowProxyDeployed(
  event: EscrowProxyDeployedEvent
): void {
  let entity = new EscrowProxyDeployed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.deployedProxy = event.params.deployedProxy
  entity.escrowType = event.params.escrowType

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
  
  log.info(`Deployed proxy address {}`, [entity.deployedProxy.toHexString()]);
  
  switch (event.params.escrowType) {
    case EscrowType.FixedPrice:
      EscrowFixedPrice.create(event.params.deployedProxy)
      break;
    case EscrowType.Milestone:
      EscrowMilestone.create(event.params.deployedProxy)
      break;
    case EscrowType.Hourly:
      EscrowHourly.create(event.params.deployedProxy)
      break;
  }
}

export function handleOwnerUpdateInitiated(
  event: OwnerUpdateInitiatedEvent
): void {
  let entity = new OwnerUpdateInitiated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.ownerCandidate = event.params.ownerCandidate

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
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
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRegistryUpdated(event: RegistryUpdatedEvent): void {
  let entity = new RegistryUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.registry = event.params.registry

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUnpaused(event: UnpausedEvent): void {
  let entity = new Unpaused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
