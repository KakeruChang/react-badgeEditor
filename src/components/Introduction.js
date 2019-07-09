import React, { Component } from 'react';
import EditButton from '../components/tags/EditButton';
import TagsEditor from '../components/tagsEditor';

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <div className='row justify-content-end'>
          <EditButton />
        </div>
        <TagsEditor />
      </div>
    );
  }
}
