const AnonyZKVote = artifacts.require("AnonyZKVote");
const Verifier = artifacts.require("Verifier16");


module.exports = async function (deployer) {

  await deployer.deploy(Verifier)
  const _verifier = await Verifier.deployed()
  const _verifiers = [{merkleTreeDepth:16,contractAddress:_verifier.address}]
  await deployer.deploy(AnonyZKVote,_verifiers);
};
