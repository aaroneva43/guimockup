
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
      <table style={{ width: '400px' }} className="grid">
        {
          data.map((row) => {

            return (
              <tbody>
                <tr>
                  {
                    ((r) => {

                      let cols = [];

                      for (let c in r) {
                        cols.push(<td>{r[c]}</td>);
                      }
                      return cols

                    })(row)
                  }

                </tr>
              </tbody>)

          })
        }

      </table>
    );
  }
}


export default Grid