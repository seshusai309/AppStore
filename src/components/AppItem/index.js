import {Component} from 'react'
import './index.css'

class AppItem extends Component {
  render() {
    const {appItems} = this.props
    const {appName, imageUrl} = appItems
    return (
      <li className="appitems">
        <img alt={appName} className="smallImg" src={imageUrl} />
        <p className="para">{appName}</p>
      </li>
    )
  }
}

export default AppItem
