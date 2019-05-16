import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types'
import FileListItem from './file-list-item.jsx'

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
