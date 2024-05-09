import { ListOfTask } from './ListOfTask';

import '../stylesheet/List.css';

export function List() {
    return (
        <div>
            <p className="txt-list">LIST OF TASK</p>
            <div className='main-task'>
                <p className='title-list'>My Tasks</p>
                <ListOfTask />
            </div>
        </div>
    );
}