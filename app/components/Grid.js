
import React, { Component } from 'react'


class Grid extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() { }

  componentWillUnmount() { }

  render() {
    const { data = [], columns = [] } = this.props;

    return (
      <table style={{ width: '400px' }} className="grid">
        <thead>
          <tr>
            {
              columns.map(col => {
                return <th key={'header_' + col.dataIndex}>{col.header}</th>
              })
            }
          </tr>
        </thead>
        <tbody>
          {
            data.map((row, key) => {

              return (

                <tr key={'row_' + key} id={ 'row_' + key }>
                  {
                    ((r) => {
                      let cols = []

                      for (let i = 0; i < columns.length; i++) {
                        let meta = columns[i]

                        for (let c in r) {
                          if (c === meta.dataIndex) {
                            cols.push(<td key={'col_' + c}>{r[c]}</td>)
                          }

                        }

                      }

                      return cols

                    })(row)
                  }

                </tr>
              )

            })
          }
        </tbody>
      </table>
    );
  }
}


export default Grid