import {Component} from 'react'
import './index.css'

class TabItem extends Component {
  render() {
    const {tabsProps, activeTab, fun} = this.props
    const {tabId, displayText} = tabsProps
    const clicked = () => {
      fun(tabId)
    }
    const checkingStatus = activeTab ? 'highlighting' : ''
    const checkingStatus2 = activeTab ? 'highlighHR' : ''
    return (
      <li className="sub-tabItem ">
        <button
          onClick={clicked}
          type="button"
          className={`btn1 ${checkingStatus}`}
        >
          <p className="highlightingPara">{displayText}</p>
          <hr className={`hr ${checkingStatus2}`} />
        </button>
      </li>
    )
  }
}

export default TabItem
