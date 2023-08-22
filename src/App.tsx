import './App.css'
import Listing from './components/Listing/Listing'
import rawData from './data/etsy.json'
import '../src/css/main.css'
import { GoodsItem } from "./interface"

function instanceOfGoodsItem(object: Object): object is GoodsItem {
  return true
}

function App() {

  let list: Array<GoodsItem> = []
  rawData.forEach(item => {
    if (instanceOfGoodsItem(item)) {
      
      list.push(item)
    }
  })

  return (
    <>
      <Listing items={list} />
    </>
  )
}

export default App
