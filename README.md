# AnonyZKVote
Anonymous ZKVote is a voting platform for growing the web3.0 community.Anonymous ZKVote is used to protect the privacy of voter using Zero Knowledge.

# Overview
This application allows anyone to create new voting process or to vote on already existing processes. 
In order to vote users need to register their identity using Discord. Registration is done with the use of Semaphore smart contracts. 
User’s IdentityCommitment is stored on chain, but their identity remains private. When casting a vote, proof of registration is created and verified by Semaphore smart contract. 
Users are not allowed to vote on the same voting process twice. Double voting is disabled with the use of external nullifiers (voting process id). 
Nullifier hash (hash of external nullifier and identity nullier) is stored on chain and checked every time voting happens, which prevents double voting.

# Usecase
This application can be used by DAOs as a governance tool. DAO members can vote on important decisions without revealing which voting option they chose. 
This privacy aspect is really important as it prevents discrimination and possible conflicts inside DAO. Anonymous ZKVote can essentially be used for any big public decision, where keeping privacy is important.

## Note
Currently this demo is only for POC. Here we are using Discord server as authorization to create DAO,joined DAO and create identity. 
In future this will be replace by other authentication system.Users only get access to the voting page and get voting rights after the user is verified by Discord role.

### Important!!
ZK proof generated while casting vote. So it will take sometime to complete transactions.

## Resource
#### Contract Address:- 0x721DCFcE1f846e6F3a52f9658a7B50AB16Ee16c7
#### UI:- https://sensational-sprite-22d535.netlify.app/
#### Demo:- https://vimeo.com/manage/videos/733185517
#### Relay Repository:- https://github.com/Harsh8196/AnonyZKVoter-Relay.git
#### UI Repository:- https://github.com/Harsh8196/anonyzkvote-ui.git

### Architecture 

![ZKVote](https://user-images.githubusercontent.com/35626990/181221665-1ce1120d-dce3-4707-86d4-73d97837378f.jpg)



## Steps to use Anonymous ZKVote

1. Login - Login with Discord to generate ZK identity. (Transaction done by Relay)
2. Create DAO - Discord server's admin has access to create DAO. Also include the Discord role so that, members belonging to that role can join DAO and participate in the voting process. (Transaction done by Relay)
3. Join DAO - Use DAO identity to join DAO (Transaction done by Relay)
4. Create Proposal - DAO's Admin can create proposal.
5. Add Voter - DAO's Admin can add voter to proposal
6. Start Poll - DAO's admin can start poll
7. Cast Vote - Voter belongs to DAO can cast vote- Use ZK for voting (Transaction done by Relay)
8. End Poll - DAO's admin can end poll
9. View Result - Any voter can see voting result. (Transaction done by Relay)
