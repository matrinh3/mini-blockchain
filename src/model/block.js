import sha256 from 'crypto-js/sha256';
class Block{
    constructor(timestamp,data ,lastHash,count_zero_first ){
        this.timestamp = timestamp;
        this.prehash = lastHash;
        this.data = data;
        this.times=0;
        this.lastHash = this.correctblock(count_zero_first);


    }
    correctblock(count_zero_first) {
        let result = this.Hashing();
        while (result.substring(0, count_zero_first) !== Array(count_zero_first + 1).join("0")){
            this.times++;
            result = this.Hashing();
        }
        return result;
        
    }
    Hashing() {
        return sha256(this.prehash + this.data + this.times).toString();
    }
}
export default Block;