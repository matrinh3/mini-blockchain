import Item from './components/block'
import Head from './components/head'
import Foot from './components/foot';
import BlockChain from './model/blockchain';

var blockchain = new BlockChain();
  blockchain.addBlock("Nguyen Anh Tuan");
  blockchain.addBlock("Nguyễn Anh Tú");
  blockchain.addBlock("Nguyen Ngọc Hòa");
  blockchain.addBlock("Nguyễn Thị hậu");
console.log(blockchain)
function App() {
  let dem = 1;
  const list =blockchain.chain.map(e => <Item preHash={e["prehash"]} lastHash={e["lastHash"]} value={e["data"]} times={e["times"]} id={dem++} key={dem} />);
  return (
    <div className="App">
      <Head/>
    
      {list}

      <Foot />
    </div>
    
  );
}

export default App;
