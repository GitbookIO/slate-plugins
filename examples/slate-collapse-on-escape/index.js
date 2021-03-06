
import CollapseOnEscape from '@gitbook/slate-collapse-on-escape'
import React from 'react'
import initialValue from './value.json'
import { Editor } from '@gitbook/slate-react'
import { Value } from '@gitbook/slate'

/**
 * Example.
 *
 * @type {Component}
 */

class Example extends React.Component {
  plugins = [CollapseOnEscape()]

  state = {
    value: Value.fromJSON(initialValue),
  }

  onChange = ({ value }) => {
    this.setState({ value })
  }

  render = () => {
    return (
      <Editor
        value={this.state.value}
        plugins={this.plugins}
        onChange={this.onChange}
      />
    )
  }
}

/**
 * Export.
 *
 * @type {Component}
 */

export default Example
