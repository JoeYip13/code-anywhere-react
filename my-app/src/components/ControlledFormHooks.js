import React, {useState} from 'react'

function ControlledFormHooks() {
    // Using react hooks
    // name, category, comments are the state
    // setName, setCategory, setComments are the methods
    const [name, setName] = useState('');
    const [category, setCategory] = useState('website');
    const [comments, setComments] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, category, comments)
    }
    return (
        <div>
            <h2>Please fill out the form below:</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="id-name">Your Name:</label>
                    <input
                    // compare the difference in code from the ControlledForm.js file
                    // We no longer need the this.state
                    // just the state name as defined in the const 
                        value={name}
                        // we target the onChange event to the set method in const
                        onChange={
                            (e) => setName(e.target.value)
                        }
                        id="id-name"
                        name="name"
                        type="text"
                    />
                </div>
                <div>
                    <label htmlFor="id-category">Query category:</label>
                    <select
                        id="id-category"
                        name="category"
                        value={category}
                        onChange={
                            (e) => setCategory(e.target.value)
                        }>
                        <option value="website">Website issue</option>
                        <option value="order">Order issue</option>
                        <option value="general">General inquiry</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="id-comments">Comments:</label>
                    <textarea
                        id="id-comments"
                        name="commments"
                        value={comments}
                        onChange={
                            (e) => setComments(e.target.value)
                        }
                    />
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default ControlledFormHooks