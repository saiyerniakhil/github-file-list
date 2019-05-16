import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types'
import moment from 'moment'

const FileList = ({ files }) => (
    <div>    
    <table className="file-list">
        <tbody>
            {files.map(file => (
                <FileListItem key={file.id} file={file}/>
            ))}
        </tbody>
    </table>
    </div>
)

FileList.propTypes = {
    files : PropTypes.array 
}

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

const CommitMessage = ({commit}) => (
    <div>    
        {commit.message}
    </div> 
) 

CommitMessage.propTypes = {
    commit: PropTypes.object.isRequired
}

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

const Time = ({time}) => {
    const timeString = moment(time).fromNow();
    return (
        <span className='time'>
            {timeString}
        </span>
    )
}
Time.propTypes = {
    time: PropTypes.string.isRequired
}

export default Time;

const testFiles = [
    {
        id :  1,
        name : "src",
        type: "folder",
        uploaded_at: "2019-03-11 21:24:00",
        latestCommit: {
            message: 'Initial Commit'
        }

    },
    {
        id :  5,
        name : "public",
        type: "folder",
        uploaded_at: "2019-03-11 21:24:00",
        latestCommit: {
            message: 'Initial Commit'
        }

    },
    {
        id :  2,
        name : "tests",
        type: "folder",
        uploaded_at: "2019-03-11 21:24:00",
        latestCommit: {
            message: 'Initial Commit'
        }

    },
    {
        id :  3,
        name : "README",
        type: "file",
        uploaded_at: "2019-03-11 21:24:00",
        latestCommit: {
            message: 'Add a README'
        }

    },
    {
        id :  4,
        name : "package.json",
        type: "file",
        uploaded_at: "2019-04-11 21:24:00",
        latestCommit: {
            message: 'updated packages'
        }

    }
]


ReactDOM.render(<FileList files={testFiles}/>,document.querySelector('#root'))
