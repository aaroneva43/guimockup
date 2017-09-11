
import React, { Component } from 'react'


class Grid extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() { }

  componentWillUnmount() { }

  render() {
    const { data } = this.props;

    return (
      <table style={{width: '400px'}}>
        {
          data.map(row => {
            return (
              <tr>
                {
                  (row => {
                    let cols = [];

                    for (let c in row) {
                      cols.push(<td>{row[c]}</td>);
                    }
                    return cols.join()

                  })()
                }

              </tr>)
          })
        }
      </table>
    );
  }
}


export default Grid