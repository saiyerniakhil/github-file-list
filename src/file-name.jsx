import React from 'react';
import FileIcon from './file-icon.jsx'

function FileName({ file }) {
    return (
        <React.Fragment>
            <FileIcon file={file}/>
                <td className="file-name">
                    {file.name}
                </td>
        </React.Fragment>
    )
}

export default FileName