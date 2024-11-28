import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { AdminManagerUpdated } from "../generated/schema"
import { AdminManagerUpdated as AdminManagerUpdatedEvent } from "../generated/EscrowMilestone/EscrowMilestone"
import { handleAdminManagerUpdated } from "../src/escrow-milestone"
import { createAdminManagerUpdatedEvent } from "./escrow-milestone-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let adminManager = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newAdminManagerUpdatedEvent =
      createAdminManagerUpdatedEvent(adminManager)
    handleAdminManagerUpdated(newAdminManagerUpdatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AdminManagerUpdated created and stored", () => {
    assert.entityCount("AdminManagerUpdated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AdminManagerUpdated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "adminManager",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
