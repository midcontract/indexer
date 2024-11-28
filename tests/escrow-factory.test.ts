import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address } from "@graphprotocol/graph-ts"
import { EscrowProxyDeployed } from "../generated/schema"
import { EscrowProxyDeployed as EscrowProxyDeployedEvent } from "../generated/EscrowFactory/EscrowFactory"
import { handleEscrowProxyDeployed } from "../src/escrow-factory"
import { createEscrowProxyDeployedEvent } from "./escrow-factory-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let sender = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let deployedProxy = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let escrowType = 123
    let newEscrowProxyDeployedEvent = createEscrowProxyDeployedEvent(
      sender,
      deployedProxy,
      escrowType
    )
    handleEscrowProxyDeployed(newEscrowProxyDeployedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("EscrowProxyDeployed created and stored", () => {
    assert.entityCount("EscrowProxyDeployed", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "EscrowProxyDeployed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "sender",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "EscrowProxyDeployed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "deployedProxy",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "EscrowProxyDeployed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "escrowType",
      "123"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
