import React from 'react';
import PropTypes from 'prop-types'
import FileName from './file-name.jsx'
import Time from './time.jsx'
import CommitMessage from './commit-message.jsx'

const FileListItem = ({file}) => (
        <React.Fragment>   
            <tr className="file-list-item" key={file.id}>
                <FileName file={file}/>
                <td className="commit-message"><CommitMessage commit={file.latestCommit}/></td>
                <td className="age">
                    <Time time={file.uploaded_at}/>
                </td>
            </tr>
        </React.Fragment>
)

FileListItem.propTypes = {
    file: PropTypes.object.isRequired
}

export default FileListItem