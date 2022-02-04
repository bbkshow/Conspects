import React from 'react';
import './TaskList.css';

// export default function TaskList({ tasks, onRemoveTask }) {
//     return (
//         <div>
//             {/* {console.log(tasks)} */}
//             <ul className="TaskList">
//                 {tasks.map(({ id, text, completed }) => (
//                     <li key={id} className="TaskList-item">
//                         <p className="TaskList-text">{text}</p>
//                         <section className="TaskList-actions">
//                             <button
//                                 onClick={() => onRemoveTask(id, text)}
//                                 // onClick={onRemoveTask}
//                                 type="button"
//                                 className="TaskList-button"
//                             >
//                                 Delete
//                             </button>
//                         </section>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

import TaskListItem from './TaskListItem';
export default function TaskList({ tasks, onRemoveTask }) {
    return (
        <div>
            {/* {console.log(tasks)} */}
            <ul className="TaskList">
                {tasks.map(({ id, text, completed }) => (
                    <TaskListItem
                        key={id}
                        text={text}
                        onRemove={() => onRemoveTask(id)}
                    />
                ))}
            </ul>
        </div>
    );
}
