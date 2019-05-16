import React from 'react';
import PropTypes from 'prop-types'


function FileIcon({ file }) {
    let icon = 'fa-file';
    if(file.type === 'folder') {
        icon = 'fa-folder'
    }
    return(
        <td className='file-icon'>
            <i className={`fa ${icon}`}/>
        </td> 
    )
}

FileIcon.propTypes = {
    file : PropTypes.object.isRequired
}


export default FileIcon
