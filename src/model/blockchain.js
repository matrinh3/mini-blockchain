import Block from "./block.js"

class BlockChain{
    constructor() {
       this.chain = [];
        this.lastHashBlock = "0000000000000000000000000000000000000000000000000000000000000000";
        
    }
    addBlock(data){
        let block = new Block(new Date(),data,this.lastHashBlock, 0);
        this.chain.push(block);
        this.lastHashBlock = block.lastHash;
    }
    getLatestBlock() {
    return this.chain[this.chain.length - 1];
    }
    update(count_zero){

    }

}
export default BlockChain;
