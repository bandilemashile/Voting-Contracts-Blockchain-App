const Voter = artifacts.require('Voter.sol');


contract("Voter", async(accounts) => {

  it("can check weather or not a voter is registered", async () => {

           voter = await Voter.deployed();

           let notVoter = accounts[0];
           var isVoting = await  voter.isVoting.call(notVoter);
           assert.equal(isVoting, false, "Voter should not be registered.");

           let isVoter = accounts[1];
           await voter.register(isVoter);
           var isVoting = await voter.isVoting.call(isVoter);
          assert.equal(isVoting, false, "Voter should be registered.");

  })

})
