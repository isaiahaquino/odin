const ExpForm = (
    <div className="form">
        <input type="text" name="position" placeholder="Position" onChange={handleChange} value={}></input>
        <input type="text" name="company" placeholder="Company" onChange={handleChange} value={}></input>
        <input type="text" name="city" placeholder="City" onChange={handleChange} value={}></input>
        <input type="text" name="start" placeholder="From" onChange={handleChange} value={}></input>
        <input type="text" name="end" placeholder="To" onChange={handleChange} value={}></input>
    </div>
)

export default ExpForm;